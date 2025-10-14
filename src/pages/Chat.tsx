import { useState } from "react";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ArrowLeft, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface Message {
  text: string;
  isUser: boolean;
}

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm MediAgent, your AI health assistant. Please describe your symptoms and I'll help you understand what might be going on.",
      isUser: false,
    },
  ]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, { text: message, isUser: true }]);
    
    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thank you for sharing your symptoms. Based on what you've described, I recommend consulting with a healthcare professional. Would you like me to suggest a specialist?",
          isUser: false,
        },
      ]);
    }, 1000);
  };

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="glass rounded-2xl p-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Activity className="h-6 w-6 text-primary animate-glow" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MediAgent
            </h1>
          </div>
          <LanguageSwitcher />
        </div>

        {/* Chat Container */}
        <div className="glass rounded-2xl p-6 mb-4 h-[calc(100vh-250px)] overflow-y-auto">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              message={message.text}
              isUser={message.isUser}
            />
          ))}
        </div>

        {/* Input */}
        <div className="glass rounded-2xl p-4">
          <ChatInput onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
