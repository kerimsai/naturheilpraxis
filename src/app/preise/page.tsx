
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { services } from '@/lib/services';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Kosten & Abrechnung</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Transparenz bei den Kosten ist mir wichtig. Hier finden Sie einen Überblick über die Abrechnung und die Preise für meine Leistungen.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <div className="space-y-6 text-muted-foreground md:text-lg">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">Abrechnungsinformationen</h2>
                <p>
                    Die Abrechnung meiner Leistungen erfolgt in Anlehnung an das Gebührenverzeichnis für Heilpraktiker (GebüH).
                </p>
                <p>
                    Als Privatpatient oder Patient mit einer privaten Zusatzversicherung für Heilpraktikerleistungen haben Sie die Möglichkeit, die Rechnung bei Ihrer Versicherung einzureichen. Bitte klären Sie vorab mit Ihrer Krankenkasse, welche Leistungen in welchem Umfang übernommen werden, da die Erstattung je nach Tarif variieren kann.
                </p>
                 <p>
                    Gesetzliche Krankenkassen übernehmen die Kosten für Heilpraktikerbehandlungen in der Regel nicht.
                </p>
                <p>
                    Selbstverständlich können Sie alle Leistungen auch als Selbstzahler in Anspruch nehmen. Die Bezahlung erfolgt üblicherweise direkt nach der Behandlung in bar oder per Karte.
                </p>
                 <div className="mt-6 p-4 border-l-4 border-primary bg-secondary/50 rounded-r-lg text-sm">
                    <h4 className="font-bold font-headline text-foreground mb-2">Wichtiger Hinweis</h4>
                    <p>Unabhängig von der Erstattung durch Ihre Versicherung ist der Rechnungsbetrag in voller Höhe zu begleichen.</p>
                </div>
            </div>

            <Card className="bg-secondary/50 shadow-lg">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">Erstanamnese</CardTitle>
                    <CardDescription>Umfassendes Erstgespräch</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-3xl font-bold text-foreground">ca. 120 €</p>
                    <p className="text-muted-foreground">
                        Für eine umfassende Erstanamnese inklusive erster Beratung und Therapieplanung nehme ich mir ca. 90 Minuten für Sie Zeit.
                    </p>
                    <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Ausführliche Besprechung Ihrer Beschwerden</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Ganzheitliche Betrachtung Ihrer Gesundheit</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-primary" />
                            <span>Entwicklung eines individuellen Behandlungsplans</span>
                        </li>
                    </ul>
                </CardContent>
            </Card>
          </div>
          
          <div className="mt-16">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Preisübersicht weiterer Leistungen</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.filter(s => s.price !== "Individuell nach Anamnese").map((service) => (
                <Card key={service.slug} className="flex flex-col h-full border-border/60 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-lg font-semibold text-foreground whitespace-pre-line">{service.price}</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                         <Button asChild variant="outline" className="w-full mt-4">
                          <Link href={`/services/${service.slug}`}>
                            Mehr Details
                          </Link>
                        </Button>
                    </div>
                </Card>
              ))}
                <Card className="flex flex-col h-full border-border/60 hover:shadow-xl transition-shadow duration-300 bg-secondary/50">
                     <CardHeader>
                        <CardTitle className="font-headline text-xl">Individuelle Therapien</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Für einige Leistungen wie Pflanzenheilkunde oder Homöopathie richten sich die Kosten nach dem individuellen Therapieaufwand.</p>
                        <p className="text-lg font-semibold text-foreground mt-4">Preis auf Anfrage</p>
                    </CardContent>
                    <div className="p-6 pt-0">
                         <Button asChild className="w-full mt-4">
                          <Link href="/#contact">
                            Jetzt anfragen
                          </Link>
                        </Button>
                    </div>
                </Card>
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
