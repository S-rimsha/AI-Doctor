import { Navbar } from "@/components/Navbar";
import { Heart, Activity, Apple, Moon, Droplet, Brain, Thermometer, Shield } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const BasicHealthGuide = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Basic Health Guide
          </h1>
          <p className="text-xl text-center text-muted-foreground mb-12">
            Essential health information for everyday wellness
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <Heart className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Heart Health</h3>
              <p className="text-sm text-muted-foreground">
                Maintain a healthy heart through regular exercise, balanced diet, and stress management
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <Activity className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-2">Physical Activity</h3>
              <p className="text-sm text-muted-foreground">
                Aim for 150 minutes of moderate exercise weekly for optimal health
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <Apple className="h-10 w-10 text-secondary mb-4" />
              <h3 className="text-xl font-bold mb-2">Nutrition</h3>
              <p className="text-sm text-muted-foreground">
                Eat a balanced diet rich in fruits, vegetables, and whole grains
              </p>
            </div>

            <div className="glass rounded-2xl p-6 hover:scale-105 transition-transform">
              <Moon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-2">Sleep Health</h3>
              <p className="text-sm text-muted-foreground">
                Get 7-9 hours of quality sleep each night for better health
              </p>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Common Health Topics</h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="fever" className="glass rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Thermometer className="h-5 w-5 text-primary" />
                    <span>Managing Fever</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    <li>• Rest and stay hydrated</li>
                    <li>• Take fever-reducing medication as directed</li>
                    <li>• Use cool compresses if needed</li>
                    <li>• Seek medical attention if fever exceeds 103°F (39.4°C)</li>
                    <li>• Watch for additional symptoms like severe headache or rash</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hydration" className="glass rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Droplet className="h-5 w-5 text-accent" />
                    <span>Staying Hydrated</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    <li>• Drink 8-10 glasses of water daily</li>
                    <li>• Increase intake during exercise or hot weather</li>
                    <li>• Monitor urine color (should be light yellow)</li>
                    <li>• Eat water-rich fruits and vegetables</li>
                    <li>• Limit caffeine and alcohol consumption</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mental" className="glass rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Brain className="h-5 w-5 text-secondary" />
                    <span>Mental Health</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    <li>• Practice stress management techniques</li>
                    <li>• Maintain social connections</li>
                    <li>• Get regular physical activity</li>
                    <li>• Seek help if feeling overwhelmed or depressed</li>
                    <li>• Practice mindfulness and meditation</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="prevention" className="glass rounded-xl px-6">
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Disease Prevention</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  <ul className="space-y-2 mt-4">
                    <li>• Wash hands frequently with soap and water</li>
                    <li>• Stay up-to-date with vaccinations</li>
                    <li>• Avoid close contact with sick individuals</li>
                    <li>• Cover coughs and sneezes</li>
                    <li>• Maintain a clean living environment</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <div className="glass rounded-3xl p-8">
            <h2 className="text-2xl font-bold mb-4">When to Seek Medical Help</h2>
            <div className="space-y-3 text-muted-foreground">
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">⚠️</span>
                <span>Severe chest pain or difficulty breathing</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">⚠️</span>
                <span>Sudden weakness or numbness, especially on one side</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">⚠️</span>
                <span>Severe bleeding or injuries</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">⚠️</span>
                <span>High fever (103°F/39.4°C or higher) that doesn't respond to medication</span>
              </p>
              <p className="flex items-start gap-2">
                <span className="text-red-500 font-bold mt-1">⚠️</span>
                <span>Severe abdominal pain or persistent vomiting</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicHealthGuide;
