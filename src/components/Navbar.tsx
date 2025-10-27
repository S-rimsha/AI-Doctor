import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { Activity, Menu, X, MapPin, History, User, MessageSquare } from "lucide-react";
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
      chat: "Chat",
      pharmacies: "Pharmacies",
      history: "History",
      profile: "Profile",
      login: "Login",
      logout: "Logout",
    },
    hi: {
      chat: "चैट",
      pharmacies: "फार्मेसी",
      history: "इतिहास",
      profile: "प्रोफ़ाइल",
      login: "लॉगिन",
      logout: "लॉगआउट",
    },
    mr: {
      chat: "चॅट",
      pharmacies: "फार्मसी",
      history: "इतिहास",
      profile: "प्रोफाइल",
      login: "लॉगिन",
      logout: "लॉगआउट",
    },
    es: {
      chat: "Chat",
      pharmacies: "Farmacias",
      history: "Historial",
      profile: "Perfil",
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
          <div className="hidden md:flex items-center gap-6">
            {user && (
              <>
                <Link to="/chat">
                  <Button variant="ghost" className="gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {t.chat}
                  </Button>
                </Link>
                <Link to="/pharmacies">
                  <Button variant="ghost" className="gap-2">
                    <MapPin className="h-4 w-4" />
                    {t.pharmacies}
                  </Button>
                </Link>
                <Link to="/history">
                  <Button variant="ghost" className="gap-2">
                    <History className="h-4 w-4" />
                    {t.history}
                  </Button>
                </Link>
                <Link to="/profile">
                  <Button variant="ghost" className="gap-2">
                    <User className="h-4 w-4" />
                    {t.profile}
                  </Button>
                </Link>
              </>
            )}
            
            {showLanguageSwitcher && onLanguageChange && (
              <LanguageSwitcher language={language} onLanguageChange={onLanguageChange} />
            )}

            {user ? (
              <Button onClick={signOut} variant="outline" className="glass border-white/20">
                {t.logout}
              </Button>
            ) : (
              <Button onClick={() => navigate("/auth")} className="bg-gradient-to-r from-primary to-accent">
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
            {user && (
              <>
                <Link to="/chat" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <MessageSquare className="h-4 w-4" />
                    {t.chat}
                  </Button>
                </Link>
                <Link to="/pharmacies" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <MapPin className="h-4 w-4" />
                    {t.pharmacies}
                  </Button>
                </Link>
                <Link to="/history" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <History className="h-4 w-4" />
                    {t.history}
                  </Button>
                </Link>
                <Link to="/profile" onClick={() => setMobileMenuOpen(false)}>
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <User className="h-4 w-4" />
                    {t.profile}
                  </Button>
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
