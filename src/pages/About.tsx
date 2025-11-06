import { Navbar } from "@/components/Navbar";
import { Heart, Users, Target, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            About Medi Soul
          </h1>
          
          <div className="space-y-8">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Heart className="h-6 w-6 text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Medi Soul is dedicated to making healthcare accessible to everyone through AI-powered technology. 
                We believe that everyone deserves instant access to reliable health information in their native language.
                Our platform bridges the gap between patients and healthcare by providing 24/7 AI-powered medical assistance.
              </p>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Target className="h-6 w-6 text-accent" />
                What We Do
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Medi Soul leverages cutting-edge AI trained on data from world-trusted medical sources including Drugs.com, NHS.uk, and WHO guidelines. Our AI has been trained on thousands of doctor-approved prescriptions and medical protocols to provide reliable health insights for common and basic medical conditions.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Instant symptom analysis and health insights</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Multilingual support in English, Hindi, Marathi, and Spanish</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Personal health tracking and medical history management</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Verified medical information from trusted sources like Drugs.com, NHS.uk, and WHO</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>AI trained on doctor-approved prescriptions and medical protocols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <span>Pharmacy locator and health information services</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Users className="h-6 w-6 text-secondary" />
                Our Values
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-primary mb-2">Accessibility</h3>
                  <p className="text-sm text-muted-foreground">
                    Healthcare information should be available to everyone, regardless of language or location.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-accent mb-2">Privacy</h3>
                  <p className="text-sm text-muted-foreground">
                    Your health data is encrypted and secure. We never share your information without consent.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary mb-2">Accuracy</h3>
                  <p className="text-sm text-muted-foreground">
                    Our AI is trained on verified data from Drugs.com, NHS.uk, WHO, and thousands of doctor-approved prescriptions for reliable health insights.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-primary mb-2">Innovation</h3>
                  <p className="text-sm text-muted-foreground">
                    We constantly improve our technology to serve you better.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" />
                Why Trust Us
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Medi Soul is built on cutting-edge AI technology trained on authoritative medical data from Drugs.com, NHS.uk, WHO, 
                and thousands of doctor-approved medical prescriptions. Our AI provides evidence-based health insights for common 
                and basic medical conditions. While our AI is highly accurate for general health guidance, we always recommend 
                consulting with healthcare professionals for serious medical concerns. We serve as your first point of contact 
                for health questions, helping you make informed decisions about when to seek professional medical care.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
