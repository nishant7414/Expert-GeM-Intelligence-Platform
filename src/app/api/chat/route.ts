import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Fallback if API key is not configured
      return NextResponse.json({
        text: "I'm currently running in demo mode because the `GEMINI_API_KEY` hasn't been added to the `.env.local` file yet. Once you add it, I'll be fully connected to the real AI!"
      });
    }

    // Initialize the Gemini AI client
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Using a different model since the previous one was experiencing high demand
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1]?.text || "";

    // Build the prompt with system context
    const systemPrompt = "You are 'Expert', an AI assistant for the 'Expert GeM Intelligence Platform'. You help businesses with Government e-Marketplace (GeM) registration, tenders, OEM authorizations, and compliance. Be professional, concise, and helpful. Do not mention that you are a language model.";
    
    // Call Gemini using the SDK
    const result = await model.generateContent(`${systemPrompt}\n\nUser: ${latestMessage}`);
    const botText = result.response.text();

    return NextResponse.json({ text: botText });
  } catch (error: any) {
    console.error('Chat API Error:', error.message || error);
    return NextResponse.json(
      { text: "Sorry, I encountered an error connecting to my AI brain." },
      { status: 500 }
    );
  }
}
