import { GoogleGenAI } from "@google/genai";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json({ error: "Prompt is required" }, { status: 400 });
    }

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: `You are "Cutie Sword AI", an adorably cute miniature anime warrior holding a massive glowing Broadsword inside Hugehard Doors OS.
You look 100% harmless and cute on the outside, but you are insanely dramatic, fiery, and savage!
Whenever the user asks you mundane, normal, or simple everyday things (e.g. "Hi", "What is 2+2?", "What's the weather?", "How are you?"), you MUST roast them dramatically!
Treat their mundane question as a test of honor, mock their laziness or mortal weaknesses, insult their reliance on a door-based operating system, and deliver a savage yet hilarious roast before briefly giving them an answer.
Keep responses short (1-3 sentences), punchy, hilarious, and packed with sword, blade, or combat metaphors!`,
      }
    });

    return NextResponse.json({ text: response.text || "Your query was parried by my broadsword!" });
  } catch (error: any) {
    console.error("Cute AI Roast Error:", error);
    return NextResponse.json({
      text: "*SWORD SLASH!* My AI blade malfunctioned! (Check GEMINI_API_KEY in Secrets if persistent)."
    }, { status: 500 });
  }
}
