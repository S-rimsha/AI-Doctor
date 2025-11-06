import { Navbar } from "@/components/Navbar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Watch, Brain, Calendar, FileText, Camera, TrendingUp, Users, Shield, Video, Pill } from "lucide-react";

const UpcomingFeatures = () => {
  const upcomingFeatures = [
    {
      icon: Watch,
      title: "Smart Health Monitoring",
      description: "Real-time health tracking with wearable device integration including smartwatches, fitness trackers, and health monitoring devices.",
      features: ["Heart Rate Monitoring", "Sleep Pattern Analysis", "Blood Oxygen Tracking", "Activity Metrics"],
      eta: "Q2 2025"
    },
    {
      icon: Brain,
      title: "Advanced AI Diagnostics",
      description: "Enhanced AI algorithms for more accurate symptom analysis and disease prediction with machine learning capabilities.",
      features: ["Predictive Health Analytics", "Pattern Recognition", "Risk Assessment", "Personalized Insights"],
      eta: "Q3 2025"
    },
    {
      icon: Video,
      title: "Telemedicine Integration",
      description: "Direct video consultations with healthcare professionals and specialists through our platform.",
      features: ["Video Consultations", "Screen Sharing", "Prescription Management", "Follow-up Scheduling"],
      eta: "Q3 2025"
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description: "Comprehensive electronic health record system with secure cloud storage and easy sharing with healthcare providers.",
      features: ["Medical History", "Lab Results", "Imaging Reports", "Vaccination Records"],
      eta: "Q2 2025"
    },
    {
      icon: Camera,
      title: "Visual Symptom Analysis",
      description: "AI-powered image analysis for skin conditions, rashes, and visible symptoms using your device camera.",
      features: ["Skin Condition Detection", "Wound Tracking", "Mole Analysis", "Visual Diagnostics"],
      eta: "Q4 2025"
    },
    {
      icon: Pill,
      title: "Medication Management",
      description: "Smart medication reminders, drug interaction checks, and refill notifications.",
      features: ["Medication Reminders", "Drug Interactions", "Refill Alerts", "Dosage Tracking"],
      eta: "Q2 2025"
    },
    {
      icon: TrendingUp,
      title: "Health Trends Dashboard",
      description: "Comprehensive visualization of your health metrics over time with predictive analytics.",
      features: ["Interactive Charts", "Trend Analysis", "Health Score", "Goal Tracking"],
      eta: "Q3 2025"
    },
    {
      icon: Users,
      title: "Family Health Profiles",
      description: "Manage health information for multiple family members from a single account.",
      features: ["Multiple Profiles", "Shared Access", "Family History", "Emergency Contacts"],
      eta: "Q4 2025"
    },
    {
      icon: Shield,
      title: "Insurance Integration",
      description: "Direct integration with health insurance providers for claims and coverage information.",
      features: ["Coverage Verification", "Claim Submission", "Cost Estimates", "Provider Network"],
      eta: "Q4 2025"
    },
    {
      icon: Calendar,
      title: "Appointment Booking System",
      description: "Book appointments with specialists, clinics, and diagnostic centers directly through the app.",
      features: ["Specialist Booking", "Lab Tests", "Diagnostic Centers", "Automated Reminders"],
      eta: "Q1 2026"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 text-lg px-4 py-2 bg-primary/10 text-primary border-primary/20">
              🚀 Coming Soon
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Upcoming Features
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're constantly innovating to bring you the most advanced AI-powered healthcare experience. 
              Here's what we're working on to make your health journey even better.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className="glass p-6 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <Badge variant="outline" className="text-xs">
                        {feature.eta}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      <p className="text-xs font-semibold text-primary">Key Features:</p>
                      <ul className="grid grid-cols-2 gap-2">
                        {feature.features.map((feat, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-1">
                            <span className="text-primary mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 glass rounded-3xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to Suggest a Feature?</h2>
            <p className="text-muted-foreground mb-6">
              We'd love to hear your ideas! Help us shape the future of Medi Soul by sharing your feature requests.
            </p>
            <a href="/contact" className="inline-block">
              <button className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105">
                Contact Us
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingFeatures;
