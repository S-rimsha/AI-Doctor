import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { Save, User, Mail, Calendar, AlertCircle, Activity, FileText } from "lucide-react";

const Profile = () => {
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [language, setLanguage] = useState("en");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState({
    full_name: "",
    age: "",
    gender: "",
    allergies: [] as string[],
  });
  const [allergyInput, setAllergyInput] = useState("");
  const [chatCount, setChatCount] = useState(0);
  const [medicineCount, setMedicineCount] = useState(0);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/auth");
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    const loadProfile = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();

      if (data) {
        setProfile({
          full_name: data.full_name || "",
          age: data.age?.toString() || "",
          gender: data.gender || "",
          allergies: data.allergies || [],
        });
      }

      // Get chat history count
      const { count: chatHistoryCount } = await supabase
        .from('chat_history')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);
      setChatCount(chatHistoryCount || 0);

      // Get medicine records count
      const { count: medicineRecordsCount } = await supabase
        .from('medicine_records')
        .select('*', { count: 'exact', head: true })
        .eq('user_id', user.id);
      setMedicineCount(medicineRecordsCount || 0);
    };

    loadProfile();
  }, [user]);

  const handleSave = async () => {
    if (!user) return;

    setLoading(true);
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: user.id,
          full_name: profile.full_name,
          age: profile.age ? parseInt(profile.age) : null,
          gender: profile.gender,
          allergies: profile.allergies,
        });

      if (error) throw error;

      toast({
        title: "Profile Updated",
        description: "Your profile has been saved successfully.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const addAllergy = () => {
    if (allergyInput.trim()) {
      setProfile(prev => ({
        ...prev,
        allergies: [...prev.allergies, allergyInput.trim()]
      }));
      setAllergyInput("");
    }
  };

  const removeAllergy = (index: number) => {
    setProfile(prev => ({
      ...prev,
      allergies: prev.allergies.filter((_, i) => i !== index)
    }));
  };

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar language={language} onLanguageChange={setLanguage} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            My Profile
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <Card className="glass">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <User className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Account Email</p>
                    <p className="font-semibold truncate">{user?.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-accent/10">
                    <FileText className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Chat Sessions</p>
                    <p className="font-semibold text-2xl">{chatCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <Activity className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Medicine Records</p>
                    <p className="font-semibold text-2xl">{medicineCount}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Personal Information
              </CardTitle>
              <CardDescription>
                Keep your health profile up to date for personalized AI recommendations
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.full_name}
                  onChange={(e) => setProfile(prev => ({ ...prev, full_name: e.target.value }))}
                  className="glass border-white/20 mt-1"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="age">Age</Label>
                  <Input
                    id="age"
                    type="number"
                    value={profile.age}
                    onChange={(e) => setProfile(prev => ({ ...prev, age: e.target.value }))}
                    className="glass border-white/20 mt-1"
                    placeholder="Your age"
                  />
                </div>

                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <select
                    id="gender"
                    value={profile.gender}
                    onChange={(e) => setProfile(prev => ({ ...prev, gender: e.target.value }))}
                    className="w-full glass border-white/20 rounded-md p-2 mt-1 bg-background"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div>
                <Label className="flex items-center gap-2">
                  <AlertCircle className="h-4 w-4 text-primary" />
                  Known Allergies
                </Label>
                <p className="text-xs text-muted-foreground mb-2">
                  Add any medications, foods, or substances you're allergic to
                </p>
                <div className="flex gap-2 mt-1">
                  <Input
                    value={allergyInput}
                    onChange={(e) => setAllergyInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && addAllergy()}
                    placeholder="e.g., Penicillin, Peanuts, Latex"
                    className="glass border-white/20"
                  />
                  <Button onClick={addAllergy} type="button" className="bg-gradient-to-r from-primary to-accent">
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {profile.allergies.map((allergy, index) => (
                    <div key={index} className="glass px-4 py-2 rounded-full flex items-center gap-2 border border-primary/20">
                      <AlertCircle className="h-3 w-3 text-primary" />
                      <span className="text-sm">{allergy}</span>
                      <button onClick={() => removeAllergy(index)} className="text-red-400 hover:text-red-600 ml-1">
                        ×
                      </button>
                    </div>
                  ))}
                  {profile.allergies.length === 0 && (
                    <p className="text-sm text-muted-foreground italic">No allergies added yet</p>
                  )}
                </div>
              </div>

              <Button
                onClick={handleSave}
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary"
              >
                <Save className="mr-2 h-4 w-4" />
                {loading ? "Saving..." : "Save Profile"}
              </Button>
            </CardContent>
          </Card>

          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Button
              onClick={() => navigate("/track-records")}
              variant="outline"
              className="glass border-white/20"
            >
              <Activity className="mr-2 h-4 w-4" />
              View Medicine Records
            </Button>
            <Button
              onClick={() => navigate("/chat")}
              variant="outline"
              className="glass border-white/20"
            >
              <FileText className="mr-2 h-4 w-4" />
              View Chat History
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
