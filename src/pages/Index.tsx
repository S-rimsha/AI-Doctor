import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Activity, Sparkles, Shield, Globe2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-8 w-8 text-primary animate-glow" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            MediAgent
          </span>
        </div>
        <LanguageSwitcher />
      </nav>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating decoration */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          
          <div className="relative z-10">
            <div className="inline-block mb-6 glass px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-primary">AI-Powered Health Assistant</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Your Personal
              <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-glow">
                Medical Companion
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get instant AI-powered health insights in your preferred language. 
              Describe your symptoms and receive personalized recommendations.
            </p>
            
            <Button
              onClick={() => navigate("/chat")}
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 rounded-full glow-primary transition-all hover:scale-105"
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Talk to MediAgent
            </Button>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="glass rounded-2xl p-8 text-center hover:border-primary/50 transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center glow-primary">
              <Activity className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">AI Symptom Analysis</h3>
            <p className="text-muted-foreground">
              Advanced AI analyzes your symptoms and provides instant health insights
            </p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:border-secondary/50 transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center glow-secondary">
              <Globe2 className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Multilingual Support</h3>
            <p className="text-muted-foreground">
              Get help in Hindi, Marathi, English, Spanish, and more languages
            </p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:border-accent/50 transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center">
              <Shield className="h-8 w-8 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Secure & Private</h3>
            <p className="text-muted-foreground">
              Your health data is encrypted and completely confidential
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
