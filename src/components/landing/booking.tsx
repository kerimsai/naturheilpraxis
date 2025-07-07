import { ContactForm } from "@/components/landing/contact-form";

export function Booking() {
  return (
    <section id="booking" className="container py-12 md:py-24">
      <div className="flex flex-col items-center gap-8 text-center">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline">Kontakt aufnehmen</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl">
              Haben Sie Fragen oder möchten Sie einen Termin vereinbaren? Füllen Sie das Formular aus und ich melde mich in Kürze bei Ihnen.
            </p>
        </div>
        <div className="w-full max-w-4xl text-left">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
