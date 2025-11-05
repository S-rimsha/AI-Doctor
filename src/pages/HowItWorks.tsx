import { Navbar } from "@/components/Navbar";
import { MessageSquare, Sparkles, FileText, Activity, Clock, Shield } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            How Medi Soul Works
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-16">
            Get health insights in 3 simple steps
          </p>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="glass rounded-3xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-3xl font-bold glow-primary">
                    1
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Describe Your Symptoms
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Simply chat with our AI assistant in your preferred language (English, Hindi, Marathi, or Spanish). 
                    Describe your symptoms, concerns, or health questions. Our AI understands natural conversation 
                    and will ask relevant follow-up questions to better understand your situation.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="glass rounded-3xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-secondary flex items-center justify-center text-3xl font-bold glow-secondary">
                    2
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <Sparkles className="h-6 w-6 text-accent" />
                    Get AI-Powered Analysis
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Our advanced AI analyzes your symptoms using medical knowledge databases. Within seconds, 
                    you'll receive detailed insights about potential conditions, severity assessment, and 
                    recommended next steps. The AI considers your medical history and allergies (if provided) 
                    for personalized advice.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="glass rounded-3xl p-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-primary flex items-center justify-center text-3xl font-bold glow-primary">
                    3
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-3 flex items-center gap-3">
                    <FileText className="h-6 w-6 text-secondary" />
                    Take Action
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Based on the analysis, you can book appointments with recommended specialists, find nearby 
                    pharmacies, or track your symptoms over time. All conversations are saved in your history 
                    for future reference. For emergency situations, our AI will alert you to seek immediate 
                    medical attention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Additional Features</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Health Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Connect smartwatches and track vital signs continuously
                </p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <Clock className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">24/7 Availability</h3>
                <p className="text-sm text-muted-foreground">
                  Get health advice anytime, anywhere, in your language
                </p>
              </div>
              <div className="glass rounded-2xl p-6 text-center hover:scale-105 transition-transform">
                <Shield className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Secure & Private</h3>
                <p className="text-sm text-muted-foreground">
                  Your health data is encrypted and never shared
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 glass rounded-2xl p-8 text-center">
            <p className="text-sm text-muted-foreground italic">
              <strong className="text-foreground">Important:</strong> Medi Soul is an AI assistant designed to 
              provide health information and guidance. It is not a replacement for professional medical advice, 
              diagnosis, or treatment. Always consult with qualified healthcare providers for serious medical concerns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
