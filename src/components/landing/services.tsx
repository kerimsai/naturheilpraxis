
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Leaf, Stethoscope, HeartPulse, Brain, Zap, Dna } from 'lucide-react';

const services = [
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    title: "Pflanzenheilkunde",
    description: "Personalisierte pflanzliche Heilmittel zur Unterstützung der natürlichen Heilungsprozesse Ihres Körpers und zur Wiederherstellung des Gleichgewichts.",
  },
  {
    icon: <Stethoscope className="w-8 h-8 text-primary" />,
    title: "Ernährungsberatung",
    description: "Beratung zu Diät und Ernährung zur Optimierung Ihrer Gesundheit, Bewältigung von Krankheiten und Steigerung der Vitalität.",
  },
  {
    icon: <HeartPulse className="w-8 h-8 text-primary" />,
    title: "Homöopathie",
    description: "Sanfte und doch kraftvolle Behandlungen mit hochverdünnten natürlichen Substanzen zur Anregung der Selbstheilung.",
  },
  {
    icon: <Brain className="w-8 h-8 text-primary" />,
    title: "Mind-Body-Medizin",
    description: "Techniken zur Harmonisierung Ihrer geistigen und körperlichen Gesundheit, zur Stressreduktion und zur Verbesserung des Wohlbefindens.",
  },
  {
    icon: <Zap className="w-8 h-8 text-primary" />,
    title: "Akupunktur",
    description: "Traditionelle chinesische Medizintechnik zum Ausgleich des Energieflusses, zur Schmerzlinderung und zur Behandlung verschiedener Beschwerden.",
  },
  {
    icon: <Dna className="w-8 h-8 text-primary" />,
    title: "Lebensstil-Coaching",
    description: "Ganzheitliche Unterstützung, um Ihnen zu helfen, nachhaltige Veränderungen für ein gesünderes, ausgeglicheneres Leben vorzunehmen.",
  }
];

export function Services() {
  return (
    <section id="services" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Unsere Leistungen</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Wir bieten eine Reihe von Leistungen an, die auf Ihre individuellen gesundheitlichen Anliegen eingehen und Sie auf dem Weg zu optimalem Wohlbefinden begleiten.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card key={index} className="flex flex-col items-center text-center p-6 transition-all hover:shadow-lg hover:-translate-y-1">
            <CardHeader className="p-0">
              <div className="p-4 bg-accent rounded-full inline-block mb-4">
                {service.icon}
              </div>
              <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2 text-base">
              {service.description}
            </CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
