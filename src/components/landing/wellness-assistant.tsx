"use client";

import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { getWellnessTips } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";
import { SubmitButton } from "./submit-button";
import { Sparkles } from "lucide-react";

const initialState = {
  message: "",
  tips: "",
  errors: null,
};

export function WellnessAssistant() {
  const [state, formAction] = useFormState(getWellnessTips, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message === "Erfolg") {
      formRef.current?.reset();
    }
    if (state.message === "Bei der Erstellung der Tipps ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.") {
      toast({
        title: "Fehler",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  return (
    <section id="wellness" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">KI-gestützter Wellness-Assistent</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Erhalten Sie personalisierte Wellness-Tipps basierend auf Ihrem einzigartigen Lebensstil und Ihren Zielen. Unser KI-Assistent gibt Ihnen sofortige Vorschläge, um Sie auf Ihrem Gesundheitsweg zu unterstützen.
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              Erstellen Sie Ihre Tipps
            </CardTitle>
            <CardDescription>
              Füllen Sie das folgende Formular aus, und unsere KI wird individuelle Empfehlungen für Sie erstellen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="lifestyle">Beschreiben Sie Ihren aktuellen Lebensstil</Label>
                <Textarea
                  id="lifestyle"
                  name="lifestyle"
                  placeholder="z.B. 'Ich habe einen Schreibtischjob, trainiere 2-3 Mal pro Woche und esse oft auswärts.'"
                  rows={4}
                  required
                />
                {state.errors?.lifestyle && (
                  <p className="text-sm font-medium text-destructive">
                    {state.errors.lifestyle[0]}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="healthGoals">Was sind Ihre Gesundheitsziele?</Label>
                <Textarea
                  id="healthGoals"
                  name="healthGoals"
                  placeholder="z.B. 'Ich möchte mehr Energie haben, meinen Schlaf verbessern und Stress reduzieren.'"
                  rows={4}
                  required
                />
                {state.errors?.healthGoals && (
                   <p className="text-sm font-medium text-destructive">
                    {state.errors.healthGoals[0]}
                  </p>
                )}
              </div>
              <SubmitButton />
            </form>
          </CardContent>
        </Card>
        
        <div className="mt-8 lg:mt-0">
          {state.tips && (
             <Card className="bg-background shadow-lg animate-in fade-in-0 duration-500 h-full">
                <CardHeader>
                  <CardTitle className="font-headline">Ihre persönlichen Wellness-Tipps</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-p:text-foreground prose-li:text-foreground text-foreground whitespace-pre-wrap">
                    {state.tips}
                  </div>
                </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
