import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

// Define the response schema for structured output
const designResponseSchema = {
  type: Type.OBJECT,
  properties: {
    advice: {
      type: Type.STRING,
      description: "Comprehensive interior design advice formatted with clear paragraphs.",
    },
    colorPalette: {
      type: Type.ARRAY,
      description: "A suggested color palette for the space.",
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Creative name of the color" },
          hex: { type: Type.STRING, description: "Hex code of the color" },
          usage: { type: Type.STRING, description: "How to use this color (e.g., Walls, Accents)" }
        }
      }
    }
  },
  required: ["advice", "colorPalette"]
};

export interface DesignResponse {
  advice: string;
  colorPalette: Array<{
    name: string;
    hex: string;
    usage: string;
  }>;
}

export const getInteriorDesignAdvice = async (
  promptText: string,
  imageBase64?: string
): Promise<DesignResponse> => {
  try {
    const model = 'gemini-2.5-flash';
    
    let parts: any[] = [];
    
    // Add image if present
    if (imageBase64) {
      // Extract mimeType and base64 data if possible, otherwise fallback to jpeg assumption
      const match = imageBase64.match(/^data:(.*?);base64,(.*)$/);
      const mimeType = match ? match[1] : 'image/jpeg';
      const data = match ? match[2] : imageBase64.replace(/^data:image\/\w+;base64,/, "");

      parts.push({
        inlineData: {
          mimeType,
          data
        }
      });
    }

    const systemInstruction = `
      You are JK AI, a senior interior designer known for 'Quiet Luxury' and modern warm aesthetics.
      Analyze the user's request (and image if provided).
      Provide sophisticated, actionable design advice.
      
      Crucial: Select a cohesive color palette of 4-5 colors that compliments the advice.
    `;

    parts.push({
      text: `User Request: ${promptText}`
    });

    const response = await ai.models.generateContent({
      model: model,
      contents: { parts },
      config: {
        systemInstruction: systemInstruction,
        temperature: 0.5,
        responseMimeType: "application/json",
        responseSchema: designResponseSchema,
      }
    });

    if (response.text) {
      return JSON.parse(response.text) as DesignResponse;
    }
    
    throw new Error("No response text generated");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw new Error("Unable to generate design advice at this time. Please check your API key.");
  }
};