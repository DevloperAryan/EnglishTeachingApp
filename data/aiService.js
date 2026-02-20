import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const PROVIDER = "gemini";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function getAIResponse(userMessage) {

    if (PROVIDER === "gemini") {
        return await geminiResponse(userMessage);
    }

    throw new Error("Invalid AI Provider");
}

async function geminiResponse(message) {

    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `
You are an English speaking coach.
Reply naturally to the user.
After replying, provide grammar correction under the heading "Correction:".

User message:
${message}
`;

    const result = await model.generateContent(prompt);
    const response = await result.response;

    return response.text();
}