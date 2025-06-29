
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { services } from "@/lib/services";
import Link from 'next/link';

export function Services() {
  return (
    <section id="services" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Unsere Leistungen</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Wir bieten eine Reihe von Leistungen an, die auf Ihre individuellen gesundheitlichen Anliegen eingehen. Klicken Sie auf eine Leistung, um mehr zu erfahren.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <Link href={`/services/${service.slug}`} key={index} className="group block">
              <Card className="flex flex-col items-center text-center p-6 h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="p-4 bg-accent rounded-full inline-block mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardDescription className="mt-2 text-base">
                  {service.description}
                </CardDescription>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
