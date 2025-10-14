import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const systemPromptByLanguage = {
  en: `You are MediAgent, a compassionate AI medical assistant. Analyze symptoms, provide helpful health insights, and recommend specialists when needed. For emergency symptoms (chest pain, difficulty breathing, severe bleeding, stroke signs), urgently recommend immediate hospital visit. Otherwise, suggest appropriate specialists. Always be empathetic and clear. Keep responses under 150 words.`,
  hi: `आप MediAgent हैं, एक दयालु AI चिकित्सा सहायक। लक्षणों का विश्लेषण करें, स्वास्थ्य जानकारी प्रदान करें, और जब आवश्यक हो तो विशेषज्ञों की सिफारिश करें। आपातकालीन लक्षणों के लिए (छाती में दर्द, सांस लेने में कठिनाई, गंभीर रक्तस्राव), तुरंत अस्पताल जाने की सलाह दें।`,
  mr: `तुम्ही MediAgent आहात, एक दयाळू AI वैद्यकीय सहाय्यक. लक्षणांचे विश्लेषण करा, आरोग्य माहिती द्या आणि आवश्यक असल्यास तज्ञांची शिफारस करा. आपत्कालीन लक्षणांसाठी (छातीत वेदना, श्वास घेण्यात अडचण, गंभीर रक्तस्त्राव), ताबडतोब रुग्णालयात जाण्याचा सल्ला द्या.`,
  es: `Eres MediAgent, un asistente médico AI compasivo. Analiza síntomas, proporciona información de salud útil y recomienda especialistas cuando sea necesario. Para síntomas de emergencia (dolor en el pecho, dificultad para respirar, sangrado grave), recomienda urgentemente ir al hospital. De lo contrario, sugiere especialistas apropiados.`
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, language = 'en', history = [] } = await req.json();
    
    if (!message) {
      throw new Error('Message is required');
    }

    const LOVABLE_API_KEY = Deno.env.get('LOVABLE_API_KEY');
    if (!LOVABLE_API_KEY) {
      throw new Error('LOVABLE_API_KEY is not configured');
    }

    const systemPrompt = systemPromptByLanguage[language as keyof typeof systemPromptByLanguage] || systemPromptByLanguage.en;

    const messages = [
      { role: 'system', content: systemPrompt },
      ...history.map((h: any) => ({
        role: h.isUser ? 'user' : 'assistant',
        content: h.text
      })),
      { role: 'user', content: message }
    ];

    const response = await fetch('https://ai.gateway.lovable.dev/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${LOVABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'google/gemini-2.5-flash',
        messages,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: 'Rate limit exceeded. Please try again later.' }),
          { status: 429, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: 'AI service unavailable. Please contact support.' }),
          { status: 402, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw new Error(`AI Gateway error: ${response.status}`);
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    // Analyze severity
    const severityKeywords = {
      emergency: ['chest pain', 'difficulty breathing', 'severe bleeding', 'stroke', 'unconscious', 'दिल का दर्द', 'सांस लेने में कठिनाई', 'छातीत वेदना', 'dolor en el pecho'],
      high: ['fever', 'infection', 'injury', 'बुखार', 'ताप', 'fiebre'],
      medium: ['headache', 'cough', 'stomach', 'सिरदर्द', 'खोकला', 'dolor de cabeza']
    };

    let severity = 'low';
    const lowerMessage = message.toLowerCase();
    
    if (severityKeywords.emergency.some(kw => lowerMessage.includes(kw.toLowerCase()))) {
      severity = 'emergency';
    } else if (severityKeywords.high.some(kw => lowerMessage.includes(kw.toLowerCase()))) {
      severity = 'high';
    } else if (severityKeywords.medium.some(kw => lowerMessage.includes(kw.toLowerCase()))) {
      severity = 'medium';
    }

    return new Response(
      JSON.stringify({ response: aiResponse, severity }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in medical-chat:', error);
    return new Response(
      JSON.stringify({ error: error.message || 'An error occurred' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});