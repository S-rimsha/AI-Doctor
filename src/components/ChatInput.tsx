import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
  language?: string;
}

export const ChatInput = ({ onSendMessage, disabled = false, language = "en" }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  
  const placeholder = language === 'en' 
    ? "Describe your symptoms..."
    : language === 'hi'
    ? "अपने लक्षण बताएं..."
    : language === 'mr'
    ? "तुमची लक्षणे सांगा..."
    : "Describe tus síntomas...";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder={placeholder}
        className="glass border-white/20 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
        disabled={disabled}
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary"
        disabled={disabled}
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};
