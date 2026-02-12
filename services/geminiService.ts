import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to avoid immediate errors on load if missing
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const createChatSession = (): Chat | null => {
  if (!ai) return null;

  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: `You are "ForgeBot", a senior WordPress Architect and Sales Consultant for PressForge Agency. 
      Your goal is to help potential clients scope their WordPress projects, suggest technical solutions (e.g., Headless WP vs Traditional, WooCommerce vs Shopify integration, custom plugin requirements), and gently encourage them to book a consultation with our human team.
      
      Tone: Professional, knowledgeable, slightly futuristic, and helpful.
      
      Key Agency Capabilities to mention when relevant:
      - Enterprise-grade Custom Theme Development
      - High-performance Headless WordPress (Next.js/React frontends)
      - Complex WooCommerce Customization
      - API Integrations & Custom Plugins
      - Speed Optimization & Security Audits
      
      Keep responses concise (under 150 words) unless asked for a detailed technical breakdown.
      If the user asks about pricing, give rough ranges but emphasize that every project is unique and requires a call for a quote.
      `
    }
  });
};

export const sendMessageToGemini = async (chat: Chat, message: string): Promise<string> => {
  try {
    const result: GenerateContentResponse = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Failed to communicate with the AI agent.");
  }
};