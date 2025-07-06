
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Info } from 'lucide-react';

export default function PricingPage() {
  const priceItems = [
    {
      title: "Erstanamnese",
      description: "inkl. körperlicher Untersuchung (90 Minuten)",
      price: "110 €",
      extra: "jede weitere halbe Stunde: 22 €"
    },
    {
      title: "Therapiekonzept",
      description: "Individuell auf Sie zugeschnitten",
      price: "Erstellung: 45 €",
      extra: "Besprechung: 55 €"
    },
    {
      title: "Manuelle-Neuro-Therapie",
      description: "Ganzheitliche Behandlung",
      price: "Erstgespräch & Therapie: 85 €",
      extra: "Jede weitere Therapie: 50 €"
    },
    {
      title: "Aderlass",
      description: "Traditionelles Ausleitverfahren",
      price: "Erstgespräch & Aderlass: 75 €",
      extra: "Jeder weitere Aderlass: 50 €"
    }
  ]

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Kosten & Abrechnung</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Sie erhalten eine Rechnung nach dem Gebührenverzeichnis für Heilpraktiker (GebüH). Hier finden Sie alle weiteren Informationen zur Kostenerstattung.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mb-16">
            <div className="space-y-6 text-muted-foreground md:text-lg prose-styling">
                <h2 className="text-2xl md:text-3xl font-bold font-headline text-foreground">Wie werden die Kosten abgerechnet?</h2>
                
                <h4>Privat- und Beihilfeversicherte</h4>
                <p>
                    Die Behandlungskosten werden von Ihrer Privatversicherung oder Ihrer Beihilfestelle nach entsprechenden Tarifen erstattet. Bitte fragen Sie vor der Behandlung bei Ihrer Versicherung oder Ihrer Beihilfestelle nach. Werden die Kosten nur teilweise erstattet, muss der restliche Betrag privat von Ihnen nach Erhalt der Rechnung getragen werden.
                </p>

                <h4>Gesetzlich Versicherte</h4>
                <p>
                    Die Behandlungskosten werden von den gesetzlichen Krankenkassen nicht getragen. Hier besteht die Möglichkeit, sich bei Ihrer Versicherung nach einer privaten Zusatzversicherung für Heilpraktikerleistungen zu erkundigen.
                </p>
            </div>
            
             <div className="mt-6 p-4 border-l-4 border-primary bg-secondary/50 rounded-r-lg text-sm space-y-2">
                <h4 className="font-bold font-headline text-foreground mb-2 flex items-center gap-2">
                    <Info className="w-5 h-5 text-primary flex-shrink-0" />
                    Gut zu wissen
                </h4>
                <p className="text-muted-foreground">Die Heilpraktikerkosten können im Einkommensteuerbescheid beim Finanzamt unter Sonderausgaben nach § 10 EStG angegeben werden.</p>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">Preisübersicht für Selbstzahler</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {priceItems.map((item) => (
                <Card key={item.title} className="flex flex-col h-full border-border/60 hover:shadow-xl transition-shadow duration-300">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl">{item.title}</CardTitle>
                        {item.description && <CardDescription>{item.description}</CardDescription>}
                    </CardHeader>
                    <CardContent className="flex-grow space-y-2">
                        <p className="text-2xl font-bold text-foreground">{item.price}</p>
                        {item.extra && <p className="text-muted-foreground">{item.extra}</p>}
                    </CardContent>
                </Card>
              ))}
            </div>
          </div>

        </section>
      </main>
      <Footer />
    </div>
  );
}
