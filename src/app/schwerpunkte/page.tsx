
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const focusAreas = [
    {
        title: "Akne",
        content: "Akne wird oft durch hormonelle Schwankungen, Ernährung und Stress beeinflusst. Wir verfolgen einen ganzheitlichen Ansatz, der die Ursachen erforscht und durch natürliche Heilmethoden wie Kräutertherapie, Ernährungsberatung und Mikronährstofftherapie die Hautgesundheit von innen heraus verbessert."
    },
    {
        title: "Allergien und Autoimmunerkrankungen",
        content: "Bei Allergien und Autoimmunerkrankungen ist das Immunsystem fehlgeleitet. Unser Ziel ist es, das Immunsystem zu modulieren und zu beruhigen. Durch Darmsanierung, Ausleitungsverfahren und gezielte Nährstofftherapie unterstützen wir den Körper dabei, wieder ins Gleichgewicht zu finden und Überreaktionen zu reduzieren."
    },
    {
        title: "Juckreiz",
        content: "Juckreiz (Pruritus) kann viele Ursachen haben, von trockener Haut bis hin zu inneren Erkrankungen. Wir suchen nach der Wurzel des Problems und behandeln es mit einer Kombination aus topischen natürlichen Mitteln, pflanzlichen Heilmitteln und Anpassungen des Lebensstils, um die Haut zu beruhigen und den Juckreiz nachhaltig zu lindern."
    },
    {
        title: "Neurodermitis (atopisches Ekzem)",
        content: "Neurodermitis ist eine chronisch-entzündliche Hauterkrankung, die eng mit dem Darm und dem Immunsystem verbunden ist. Unser Behandlungsansatz umfasst eine detaillierte Mikrobiom-Analyse, eine entzündungshemmende Ernährungsstrategie und den Einsatz von Pflanzenheilkunde, um die Hautbarriere zu stärken und Schübe zu minimieren."
    },
    {
        title: "Schuppenflechte (Psoriasis)",
        content: "Psoriasis ist eine Autoimmunerkrankung, die sich auf der Haut manifestiert. Wir konzentrieren uns auf die Beruhigung des Immunsystems und die Reduzierung von Entzündungen im Körper. Entgiftungsverfahren, spezielle Diäten und naturheilkundliche Mittel sind zentrale Bestandteile unserer Therapie, um die Symptome zu kontrollieren und das Hautbild zu verbessern."
    },
    {
        title: "Warzen",
        content: "Warzen werden durch Viren verursacht und sind ein Zeichen für ein geschwächtes lokales Immunsystem. Anstatt nur die Warze selbst zu entfernen, zielt unser Ansatz darauf ab, die körpereigene Abwehr zu stärken. Wir nutzen pflanzliche Tinkturen und homöopathische Mittel, um den Körper bei der Bekämpfung des Virus zu unterstützen."
    }
];

export default function SchwerpunktePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="focus-areas" className="container py-12 md:py-24">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Schwerpunkte meiner Praxis</h1>
            <p className="text-lg text-muted-foreground mt-4">
                Mein Fokus liegt auf der ganzheitlichen Behandlung von Hauterkrankungen. Hier finden Sie einen Überblick über die Beschwerden, bei denen ich Sie mit naturheilkundlichen Methoden unterstützen kann.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
                {focusAreas.map((area, index) => (
                    <AccordionItem value={`item-${index}`} key={index}>
                        <AccordionTrigger className="text-xl font-headline text-left">{area.title}</AccordionTrigger>
                        <AccordionContent className="text-lg text-muted-foreground">
                            {area.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
          </div>

          <div className="mt-16 text-center">
            <Button asChild size="lg">
                <Link href="/#booking">Jetzt Termin vereinbaren</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
