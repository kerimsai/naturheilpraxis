"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";

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
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name muss mindestens 2 Zeichen lang sein.",
  }),
  email: z.string().email({
    message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
  }),
  phone: z.string().min(6, {
    message: "Bitte geben Sie eine gültige Telefonnummer ein.",
  }),
  message: z.string().min(10, {
    message: "Die Nachricht muss mindestens 10 Zeichen lang sein.",
  }),
  privacyPolicy: z.boolean().default(false).refine(val => val === true, {
    message: "Sie müssen der Datenschutzerklärung zustimmen.",
  })
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyPolicy: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const snippet = values.message.length > 20 ? `${values.message.slice(0, 20)}...` : values.message;
    const subject = `Anfrage von ${values.name}: ${snippet}`;
    const body = [
      `Name: ${values.name}`,
      `Telefon: ${values.phone}`,
      `E-Mail: ${values.email}`,
      '',
      'Nachricht:',
      values.message,
    ].join('\n');

    const mailtoLink = `mailto:info@heilpraxis-jordan.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;

    toast({
      title: "E-Mail-Entwurf geöffnet",
      description: "Ihr Standard-Mailprogramm öffnet sich mit den eingegebenen Daten.",
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Ihr Name" {...field} />
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
                  <Input placeholder="ihre@email.de" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefonnummer</FormLabel>
                <FormControl>
                  <Input placeholder="Ihre Telefonnummer" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nachricht</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ihre Nachricht an mich..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="privacyPolicy"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  Ich stimme der Verarbeitung meiner Daten gemäß der <Link href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</Link> zu.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        <Button type="submit">
          E-Mail öffnen
        </Button>
      </form>
    </Form>
  );
}
