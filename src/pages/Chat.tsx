import { useState, useEffect } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { Navbar } from "@/components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface Message {
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signOut } = useAuth();
  const { toast } = useToast();
  const [messages, setMessages] = useState<Message[]>([]);
  const [language, setLanguage] = useState("en");
  const [isLoading, setIsLoading] = useState(false);

  // Allow demo mode - don't redirect immediately
  // useEffect(() => {
  //   if (!authLoading && !user) {
  //     navigate("/auth");
  //   }
  // }, [user, authLoading, navigate]);

  useEffect(() => {
    const loadChatHistory = async () => {
      if (!user) {
        // Demo mode - show welcome message
        setMessages([
          {
            text: language === 'en' 
              ? "Hello! I'm MediAgent, your AI health assistant. You're using demo mode. Describe your symptoms and I'll help you understand what might be going on. Sign up to save your chat history!"
              : language === 'hi'
              ? "नमस्ते! मैं MediAgent हूं, आपका AI स्वास्थ्य सहायक। आप डेमो मोड उपयोग कर रहे हैं। अपने लक्षण बताएं और मैं आपको समझने में मदद करूंगा।"
              : language === 'mr'
              ? "नमस्कार! मी MediAgent आहे, तुमचा AI आरोग्य सहाय्यक। तुम्ही डेमो मोड वापरत आहात। तुमची लक्षणे सांगा आणि मी समजून घेण्यास मदत करेन।"
              : "¡Hola! Soy MediAgent, tu asistente de salud AI. Estás usando el modo demo. Describe tus síntomas y te ayudaré.",
            isUser: false,
          },
        ]);
        return;
      }

      const { data, error } = await supabase
        .from('chat_history')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: true })
        .limit(50);

      if (error) {
        console.error('Error loading chat history:', error);
        return;
      }

      if (data && data.length > 0) {
        const formattedMessages: Message[] = data.flatMap(chat => [
          { text: chat.message, isUser: true },
          { text: chat.response, isUser: false }
        ]);
        setMessages(formattedMessages);
      } else {
        setMessages([
          {
            text: language === 'en' 
              ? "Hello! I'm MediAgent, your AI health assistant. Describe your symptoms and I'll help you understand what might be going on."
              : language === 'hi'
              ? "नमस्ते! मैं MediAgent हूं, आपका AI स्वास्थ्य सहायक। अपने लक्षण बताएं और मैं आपको समझने में मदद करूंगा।"
              : language === 'mr'
              ? "नमस्कार! मी MediAgent आहे, तुमचा AI आरोग्य सहाय्यक। तुमची लक्षणे सांगा आणि मी समजून घेण्यास मदत करेन।"
              : "¡Hola! Soy MediAgent, tu asistente de salud AI. Describe tus síntomas y te ayudaré.",
            isUser: false,
          },
        ]);
      }
    };

    loadChatHistory();
  }, [user, language]);

  const handleSendMessage = async (message: string) => {
    // Allow sending in demo mode

    setMessages(prev => [...prev, { text: message, isUser: true }]);
    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('medical-chat', {
        body: { 
          message, 
          language,
          history: messages.slice(-6)
        }
      });

      if (error) throw error;

      const aiResponse = data.response;
      const severity = data.severity;

      setMessages(prev => [...prev, { text: aiResponse, isUser: false }]);

      // Save to database (only if logged in)
      if (user) {
        await supabase.from('chat_history').insert({
          user_id: user.id,
          message,
          response: aiResponse,
          language,
          severity_level: severity
        });
      }

      // Show emergency alert if needed
      if (severity === 'emergency') {
        toast({
          title: "⚠️ Emergency Alert",
          description: "Please seek immediate medical attention!",
          variant: "destructive",
        });
      }

    } catch (error: any) {
      console.error('Chat error:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
      setMessages(prev => prev.slice(0, -1));
    } finally {
      setIsLoading(false);
    }
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar language={language} onLanguageChange={setLanguage} />

      <div className="flex-1 overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full">
        {!user && (
          <div className="glass rounded-2xl p-6 mb-4">
            <h3 className="font-bold mb-2">💬 Demo Mode</h3>
            <p className="text-sm text-muted-foreground mb-3">
              You're chatting without an account. Sign up to save your history and access advanced features!
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => navigate("/auth")}
                className="text-sm bg-gradient-to-r from-primary to-accent px-4 py-2 rounded-lg font-medium hover:opacity-90"
              >
                Sign Up
              </button>
            </div>
          </div>
        )}
        
        <div className="glass rounded-2xl p-4 mb-4">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">Powered by Advanced AI</strong> • 
            This chatbot uses cutting-edge medical AI to provide health insights.
            <a 
              href="https://botpress.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-primary hover:underline font-medium"
            >
              Learn more about Botpress →
            </a>
          </p>
        </div>

        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isUser={message.isUser}
          />
        ))}
      </div>

      <div className="sticky bottom-0 border-t glass p-4">
        <div className="max-w-4xl mx-auto">
          <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} language={language} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
