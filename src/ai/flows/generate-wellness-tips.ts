// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview Generates personalized wellness tips based on user-provided information.
 * 
 * - generateWellnessTips - A function that generates personalized wellness tips.
 * - GenerateWellnessTipsInput - The input type for the generateWellnessTips function.
 * - GenerateWellnessTipsOutput - The return type for the generateWellnessTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateWellnessTipsInputSchema = z.object({
  lifestyle: z
    .string()
    .describe('Description of the user\u2019s current lifestyle.'),
  healthGoals: z
    .string()
    .describe('Description of the user\u2019s health goals.'),
});

export type GenerateWellnessTipsInput = z.infer<
  typeof GenerateWellnessTipsInputSchema
>;

const GenerateWellnessTipsOutputSchema = z.object({
  wellnessTips: z
    .string()
    .describe('Personalized wellness tips based on the user input.'),
});

export type GenerateWellnessTipsOutput = z.infer<
  typeof GenerateWellnessTipsOutputSchema
>;

export async function generateWellnessTips(
  input: GenerateWellnessTipsInput
): Promise<GenerateWellnessTipsOutput> {
  return generateWellnessTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateWellnessTipsPrompt',
  input: {schema: GenerateWellnessTipsInputSchema},
  output: {schema: GenerateWellnessTipsOutputSchema},
  prompt: `You are a wellness assistant. Generate personalized wellness tips based on the user's lifestyle and health goals.

Lifestyle: {{{lifestyle}}}
Health Goals: {{{healthGoals}}}

Wellness Tips:`,
});

const generateWellnessTipsFlow = ai.defineFlow(
  {
    name: 'generateWellnessTipsFlow',
    inputSchema: GenerateWellnessTipsInputSchema,
    outputSchema: GenerateWellnessTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
