import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

export const ChatMessage = ({ message, isUser }: ChatMessageProps) => {
  return (
    <div className={`flex gap-3 mb-4 animate-fade-in ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-full glass flex items-center justify-center glow-primary">
          <Bot className="w-5 h-5 text-primary" />
        </div>
      )}
      <div
        className={`max-w-[70%] p-4 rounded-2xl ${
          isUser
            ? "glass border-primary/30 text-foreground glow-primary"
            : "glass border-white/20 text-foreground"
        }`}
      >
        <p className="text-sm leading-relaxed">{message}</p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-full glass flex items-center justify-center border-primary/30">
          <User className="w-5 h-5 text-primary" />
        </div>
      )}
    </div>
  );
};
