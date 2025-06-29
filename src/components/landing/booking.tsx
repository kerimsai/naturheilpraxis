
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { format } from "date-fns";
import { de } from 'date-fns/locale';
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from 'next/image';

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Der Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  date: z.date({
    required_error: "Ein Datum für Ihren Termin ist erforderlich.",
  }),
  message: z.string().optional(),
});

export function Booking() {
    const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
        title: "Terminanfrage gesendet",
        description: "Vielen Dank! Wir haben Ihre Anfrage erhalten und werden uns in Kürze zur Bestätigung bei Ihnen melden.",
    });
    form.reset();
  }

  return (
    <section id="booking" className="container py-12 md:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Buchen Sie Ihren Termin</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-xl">
                Bereit, den ersten Schritt zu besserer Gesundheit zu machen? Füllen Sie das Formular aus, um einen Termin anzufragen. Wir freuen uns darauf, Sie in unserer Praxis begrüssen zu dürfen.
            </p>
            <Image
                src="https://placehold.co/800x600.png"
                alt="Ein ruhiges und einladendes Praxis-Interieur"
                width={800}
                height={600}
                className="rounded-lg mt-8 hidden lg:block"
                data-ai-hint="clinic interior"
            />
        </div>
        <Card className="shadow-xl">
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Termin anfragen</CardTitle>
            <CardDescription>
              Wir werden Ihren Termin per E-Mail bestätigen.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Vollständiger Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Julia Jordan" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-Mail</FormLabel>
                      <FormControl>
                        <Input placeholder="hallo@beispiel.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>Wunschdatum</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP", { locale: de })
                              ) : (
                                <span>Wählen Sie ein Datum</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            locale={de}
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date < new Date(new Date().setHours(0,0,0,0))
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Nachricht (Optional)</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Erzählen Sie uns ein wenig über Ihre gesundheitlichen Anliegen..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full">Termin anfragen</Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
