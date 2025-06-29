
"use server";

import { generateWellnessTips } from "@/ai/flows/generate-wellness-tips";
import { z } from "zod";

const wellnessSchema = z.object({
  lifestyle: z
    .string()
    .min(10, "Bitte beschreiben Sie Ihren Lebensstil mit mindestens 10 Zeichen."),
  healthGoals: z
    .string()
    .min(10, "Bitte beschreiben Sie Ihre Gesundheitsziele mit mindestens 10 Zeichen."),
});

type State = {
  message: string;
  tips?: string;
  errors?: {
    lifestyle?: string[];
    healthGoals?: string[];
  } | null;
};

export async function getWellnessTips(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = wellnessSchema.safeParse({
    lifestyle: formData.get("lifestyle"),
    healthGoals: formData.get("healthGoals"),
  });

  if (!validatedFields.success) {
    return {
      message: "Validierung fehlgeschlagen.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    const result = await generateWellnessTips(validatedFields.data);
    return {
      message: "Erfolg",
      tips: result.wellnessTips,
      errors: null,
    };
  } catch (error) {
    console.error("Error generating wellness tips:", error);
    return {
      message: "Bei der Erstellung der Tipps ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
      errors: null,
    };
  }
}
