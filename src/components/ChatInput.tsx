import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export const ChatInput = ({ onSendMessage }: ChatInputProps) => {
  const [message, setMessage] = useState("");

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
        placeholder="Describe your symptoms..."
        className="glass border-white/20 text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-primary/20"
      />
      <Button
        type="submit"
        className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary"
      >
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
};
