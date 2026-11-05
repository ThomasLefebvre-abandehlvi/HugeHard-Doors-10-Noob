import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const recipientEmail = data.email || "abandehlvi542@gmail.com";

    console.log(`[GRYAHAVEN AIRLINES] Paperwork received for ${data.fullName || "Mortal Passenger"}`);
    console.log(`[GRYAHAVEN AIRLINES] Emailing paperwork to: ${recipientEmail}`);
    console.log(`Form details:`, JSON.stringify(data, null, 2));

    let funnyRejectionNote = "";

    // Optional Gemini generated funny flight rejection notice
    if (process.env.GEMINI_API_KEY) {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
        const prompt = `Write a 2-sentence hilarious rejection letter from Gryahaven Airlines to passenger "${data.fullName || 'Passenger'}". Mention that we received their 48 pages of paperwork including embarrassing memory ("${data.embarrassingMemory || 'None'}"), 2nd grade teacher ("${data.secondGradeTeacher || 'Unknown'}"), favorite fruit ("${data.favFruit || 'Fruit'}"), and pet shoe size ("${data.petShoeSize || 'Unknown'}"), but unfortunately all seats on Flight GH-909 to Gryahaven Island are 100% full!`;
        
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          contents: prompt,
        });

        if (response.text) {
          funnyRejectionNote = response.text.trim();
        }
      } catch (e) {
        console.error("Gemini API error generating rejection note:", e);
      }
    }

    if (!funnyRejectionNote) {
      funnyRejectionNote = `Official Notice: Gryahaven Airport Tower has received all 48 pages of your paperwork (including 2nd grade teacher ${data.secondGradeTeacher || 'Teacher'}, pet shoe size ${data.petShoeSize || 'Size 2'}, and favorite fruit ${data.favFruit || 'Banana'}), but Flight GH-909 is 100% FULL!`;
    }

    return NextResponse.json({
      success: true,
      status: "SEATS_FULL",
      targetEmail: recipientEmail,
      message: "OOPS! All seats on Flight GH-909 to Gryahaven Island are FULL!",
      paperworkLogged: true,
      rejectionNote: funnyRejectionNote,
      dataReceived: {
        fullName: data.fullName,
        favColor: data.favColor,
        favFruit: data.favFruit,
        embarrassingMemory: data.embarrassingMemory,
        secondGradeTeacher: data.secondGradeTeacher,
        firstGradeSandwich: data.firstGradeSandwich,
        zodiacSign: data.zodiacSign,
        petShoeSize: data.petShoeSize,
        favoriteBlanket: data.favoriteBlanket,
        toeStubs: data.toeStubs,
        doorSwingPreference: data.doorSwingPreference,
        email: recipientEmail,
      }
    });
  } catch (error: any) {
    console.error("Airplane booking API error:", error);
    return NextResponse.json(
      { success: false, error: "Paperwork rejected by Airport Control Tower." },
      { status: 500 }
    );
  }
}
