import { type CoreMessage, generateText, streamText } from "ai";
import { createOpenAI } from "@ai-sdk/openai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

const openai = createOpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function GET(req: Request) {
  const { text } = await generateText({
    model: openai("gpt-4-turbo"),
    prompt: "Give me a short story about anyting now, max 100 words",
  });

  return new Response(text);
}
