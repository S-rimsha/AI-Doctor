import { useState } from "react";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Activity, Sparkles, Shield, Globe2, LogIn } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("en");

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
        <div className="flex items-center gap-3">
          <LanguageSwitcher language={language} onLanguageChange={setLanguage} />
          <Button
            onClick={() => navigate("/auth")}
            variant="outline"
            className="glass border-white/20 hover:bg-white/10"
          >
            <LogIn className="h-4 w-4 mr-2" />
            Login
          </Button>
        </div>
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
              {language === 'en' && "Get instant AI-powered health insights in your preferred language. Track your medical history, find nearby pharmacies, and book appointments."}
              {language === 'hi' && "अपनी पसंदीदा भाषा में तुरंत AI-संचालित स्वास्थ्य जानकारी प्राप्त करें। अपना चिकित्सा इतिहास ट्रैक करें, नजदीकी फार्मेसियां खोजें और अपॉइंटमेंट बुक करें।"}
              {language === 'mr' && "तुमच्या पसंतीच्या भाषेत झटपट AI-शक्तीयुक्त आरोग्य माहिती मिळवा. तुमचा वैद्यकीय इतिहास ट्रॅक करा, जवळपासची फार्मसी शोधा आणि भेटी बुक करा."}
              {language === 'es' && "Obtén información de salud instantánea con IA en tu idioma preferido. Rastrea tu historial médico, encuentra farmacias cercanas y reserva citas."}
            </p>
            
            <div className="flex gap-4 justify-center">
              <Button
                onClick={() => navigate("/auth")}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-8 py-6 rounded-full glow-primary transition-all hover:scale-105"
              >
                <Sparkles className="mr-2 h-5 w-5" />
                {language === 'en' && "Get Started Free"}
                {language === 'hi' && "मुफ्त शुरू करें"}
                {language === 'mr' && "विनामूल्य सुरू करा"}
                {language === 'es' && "Empezar Gratis"}
              </Button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center glow-primary">
              <Activity className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' && "AI Symptom Analysis"}
              {language === 'hi' && "AI लक्षण विश्लेषण"}
              {language === 'mr' && "AI लक्षण विश्लेषण"}
              {language === 'es' && "Análisis AI de Síntomas"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' && "Advanced AI analyzes symptoms and provides instant insights"}
              {language === 'hi' && "उन्नत AI लक्षणों का विश्लेषण करता है"}
              {language === 'mr' && "प्रगत AI लक्षणांचे विश्लेषण करते"}
              {language === 'es' && "IA avanzada analiza los síntomas"}
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center hover:border-secondary/50 transition-all hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center glow-secondary">
              <Globe2 className="h-7 w-7 text-secondary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' && "4 Languages"}
              {language === 'hi' && "4 भाषाएं"}
              {language === 'mr' && "4 भाषा"}
              {language === 'es' && "4 Idiomas"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' && "Hindi, Marathi, English, Spanish support"}
              {language === 'hi' && "हिंदी, मराठी, अंग्रेजी, स्पेनिश समर्थन"}
              {language === 'mr' && "हिंदी, मराठी, इंग्रजी, स्पॅनिश समर्थन"}
              {language === 'es' && "Soporte en hindi, marathi, inglés, español"}
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center hover:border-accent/50 transition-all hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center">
              <Shield className="h-7 w-7 text-accent" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' && "Medical History"}
              {language === 'hi' && "चिकित्सा इतिहास"}
              {language === 'mr' && "वैद्यकीय इतिहास"}
              {language === 'es' && "Historial Médico"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' && "Track and access your complete medical records"}
              {language === 'hi' && "अपने पूर्ण चिकित्सा रिकॉर्ड ट्रैक करें"}
              {language === 'mr' && "तुमचे संपूर्ण वैद्यकीय रेकॉर्ड ट्रॅक करा"}
              {language === 'es' && "Rastrea tu historial médico completo"}
            </p>
          </div>

          <div className="glass rounded-2xl p-6 text-center hover:border-primary/50 transition-all hover:scale-105">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full glass flex items-center justify-center glow-primary">
              <Sparkles className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">
              {language === 'en' && "Smart Appointments"}
              {language === 'hi' && "स्मार्ट अपॉइंटमेंट"}
              {language === 'mr' && "स्मार्ट भेटी"}
              {language === 'es' && "Citas Inteligentes"}
            </h3>
            <p className="text-sm text-muted-foreground">
              {language === 'en' && "Book specialist appointments based on AI recommendations"}
              {language === 'hi' && "AI सिफारिशों के आधार पर विशेषज्ञ बुकिंग"}
              {language === 'mr' && "AI शिफारशींवर आधारित तज्ञ बुकिंग"}
              {language === 'es' && "Reserva citas con especialistas"}
            </p>
          </div>
        </div>

        {/* How it Works */}
        <div className="mt-32 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            {language === 'en' && "How It Works"}
            {language === 'hi' && "यह कैसे काम करता है"}
            {language === 'mr' && "हे कसे कार्य करते"}
            {language === 'es' && "Cómo Funciona"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'en' && "Describe Symptoms"}
                {language === 'hi' && "लक्षण बताएं"}
                {language === 'mr' && "लक्षणे सांगा"}
                {language === 'es' && "Describe Síntomas"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' && "Chat with our AI in your language"}
                {language === 'hi' && "अपनी भाषा में AI से बात करें"}
                {language === 'mr' && "तुमच्या भाषेत AI शी बोला"}
                {language === 'es' && "Chatea con nuestra IA"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-accent to-secondary flex items-center justify-center text-white font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'en' && "Get AI Analysis"}
                {language === 'hi' && "AI विश्लेषण प्राप्त करें"}
                {language === 'mr' && "AI विश्लेषण मिळवा"}
                {language === 'es' && "Obtén Análisis AI"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' && "Receive instant health insights"}
                {language === 'hi' && "तुरंत स्वास्थ्य जानकारी प्राप्त करें"}
                {language === 'mr' && "झटपट आरोग्य माहिती मिळवा"}
                {language === 'es' && "Recibe información instantánea"}
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-secondary to-primary flex items-center justify-center text-white font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">
                {language === 'en' && "Take Action"}
                {language === 'hi' && "कार्रवाई करें"}
                {language === 'mr' && "कृती करा"}
                {language === 'es' && "Toma Acción"}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'en' && "Book appointments or find pharmacies"}
                {language === 'hi' && "अपॉइंटमेंट बुक करें या फार्मेसी खोजें"}
                {language === 'mr' && "भेटी बुक करा किंवा फार्मसी शोधा"}
                {language === 'es' && "Reserva citas o encuentra farmacias"}
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-32 glass rounded-3xl p-12 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            {language === 'en' && "Ready to Start Your Health Journey?"}
            {language === 'hi' && "अपनी स्वास्थ्य यात्रा शुरू करने के लिए तैयार हैं?"}
            {language === 'mr' && "तुमचा आरोग्य प्रवास सुरू करण्यास तयार आहात?"}
            {language === 'es' && "¿Listo para Comenzar tu Viaje de Salud?"}
          </h2>
          <p className="text-muted-foreground mb-8">
            {language === 'en' && "Join thousands of users managing their health with AI assistance"}
            {language === 'hi' && "AI सहायता से अपने स्वास्थ्य का प्रबंधन करने वाले हजारों उपयोगकर्ताओं से जुड़ें"}
            {language === 'mr' && "AI सहाय्याने त्यांच्या आरोग्याचे व्यवस्थापन करणाऱ्या हजारो वापरकर्त्यांसोबत सामील व्हा"}
            {language === 'es' && "Únete a miles de usuarios que gestionan su salud con asistencia AI"}
          </p>
          <Button
            onClick={() => navigate("/auth")}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-lg px-12 py-6 rounded-full glow-primary"
          >
            <Sparkles className="mr-2 h-5 w-5" />
            {language === 'en' && "Sign Up Free"}
            {language === 'hi' && "मुफ्त साइन अप करें"}
            {language === 'mr' && "विनामूल्य साइन अप करा"}
            {language === 'es' && "Regístrate Gratis"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
