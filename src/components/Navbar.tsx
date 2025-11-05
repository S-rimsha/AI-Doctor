import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Activity, Menu, X, MapPin, History, User, MessageSquare, Watch } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface NavbarProps {
  language?: string;
  onLanguageChange?: (lang: string) => void;
  showLanguageSwitcher?: boolean;
}

export const Navbar = ({ language = "en", onLanguageChange, showLanguageSwitcher = true }: NavbarProps) => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const translations = {
    en: {
      home: "Home",
      chat: "Chat",
      about: "About",
      howItWorks: "How It Works",
      contact: "Contact",
      healthGuide: "Health Guide",
      settings: "Settings",
      pharmacies: "Pharmacies",
      healthMonitoring: "Health Monitor",
      profile: "Profile",
      trackRecords: "Track Records",
      login: "Login",
      logout: "Logout",
    },
    hi: {
      home: "होम",
      chat: "चैट",
      about: "हमारे बारे में",
      howItWorks: "यह कैसे काम करता है",
      contact: "संपर्क करें",
      healthGuide: "स्वास्थ्य गाइड",
      settings: "सेटिंग्स",
      pharmacies: "फार्मेसी",
      healthMonitoring: "स्वास्थ्य मॉनिटर",
      profile: "प्रोफ़ाइल",
      trackRecords: "रिकॉर्ड ट्रैक करें",
      login: "लॉगिन",
      logout: "लॉगआउट",
    },
    mr: {
      home: "मुख्यपृष्ठ",
      chat: "चॅट",
      about: "आमच्याबद्दल",
      howItWorks: "हे कसे कार्य करते",
      contact: "संपर्क",
      healthGuide: "आरोग्य मार्गदर्शक",
      settings: "सेटिंग्ज",
      pharmacies: "फार्मसी",
      healthMonitoring: "आरोग्य मॉनिटर",
      profile: "प्रोफाइल",
      trackRecords: "रेकॉर्ड ट्रॅक करा",
      login: "लॉगिन",
      logout: "लॉगआउट",
    },
    es: {
      home: "Inicio",
      chat: "Chat",
      about: "Acerca de",
      howItWorks: "Cómo Funciona",
      contact: "Contacto",
      healthGuide: "Guía de Salud",
      settings: "Ajustes",
      pharmacies: "Farmacias",
      healthMonitoring: "Monitor de Salud",
      profile: "Perfil",
      trackRecords: "Seguimiento",
      login: "Iniciar sesión",
      logout: "Cerrar sesión",
    },
  };

  const t = translations[language as keyof typeof translations] || translations.en;

  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Activity className="h-8 w-8 text-primary animate-glow transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              MediAgent
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link to="/chat" className="text-sm font-medium hover:text-primary transition-colors">
              {t.chat}
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">
              {t.about}
            </Link>
            <Link to="/how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
              {t.howItWorks}
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              {t.contact}
            </Link>
            <Link to="/health-guide" className="text-sm font-medium hover:text-primary transition-colors">
              {t.healthGuide}
            </Link>
            
            {user && (
              <>
                <Link to="/pharmacies" className="text-sm font-medium hover:text-primary transition-colors">
                  {t.pharmacies}
                </Link>
                <Link to="/health-monitoring" className="text-sm font-medium hover:text-primary transition-colors">
                  {t.healthMonitoring}
                </Link>
                <Link to="/history" className="text-sm font-medium hover:text-primary transition-colors">
                  {t.history}
                </Link>
                <Link to="/profile" className="text-sm font-medium hover:text-primary transition-colors">
                  {t.profile}
                </Link>
                <Link to="/track-records" className="text-sm font-medium hover:text-primary transition-colors">
                  {t.trackRecords}
                </Link>
                <Link to="/settings" className="text-sm font-medium hover:text-primary transition-colors">
                  {t.settings}
                </Link>
              </>
            )}
            
            {showLanguageSwitcher && onLanguageChange && (
              <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
            )}

            {user ? (
              <Button onClick={signOut} variant="outline" size="sm" className="glass border-white/20">
                {t.logout}
              </Button>
            ) : (
              <Button onClick={() => navigate("/auth")} size="sm" className="bg-gradient-to-r from-primary to-accent">
                {t.login}
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              {t.home}
            </Link>
            <Link to="/chat" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              {t.chat}
            </Link>
            <Link to="/about" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              {t.about}
            </Link>
            <Link to="/how-it-works" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              {t.howItWorks}
            </Link>
            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              {t.contact}
            </Link>
            <Link to="/health-guide" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
              {t.healthGuide}
            </Link>
            
            {user && (
              <>
                <Link to="/pharmacies" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t.pharmacies}
                </Link>
                <Link to="/health-monitoring" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t.healthMonitoring}
                </Link>
                <Link to="/history" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t.history}
                </Link>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t.profile}
                </Link>
                <Link to="/track-records" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t.trackRecords}
                </Link>
                <Link to="/settings" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2 text-sm font-medium hover:text-primary transition-colors">
                  {t.settings}
                </Link>
              </>
            )}

            {showLanguageSwitcher && onLanguageChange && (
              <div className="px-2 py-2">
                <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
              </div>
            )}

            {user ? (
              <Button onClick={signOut} variant="outline" className="w-full glass border-white/20">
                {t.logout}
              </Button>
            ) : (
              <Button 
                onClick={() => {
                  navigate("/auth");
                  setMobileMenuOpen(false);
                }} 
                className="w-full bg-gradient-to-r from-primary to-accent"
              >
                {t.login}
              </Button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};
