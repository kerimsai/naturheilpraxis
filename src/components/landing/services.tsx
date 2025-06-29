
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { services } from "@/lib/services";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="container py-12 md:py-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold font-headline">Meine Behandlungen</h2>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Entdecken Sie eine Auswahl meiner exklusiven Schönheits- und Wellnessanwendungen, die darauf ausgelegt sind, Ihre natürliche Schönheit zu betonen und Ihr Wohlbefinden zu steigern.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.slug} className="flex flex-col text-center p-8 h-full border-border/60 hover:shadow-xl transition-shadow duration-300">
              <div className="flex-grow flex flex-col items-center">
                <div className="p-4 bg-accent rounded-full inline-block mb-6">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <CardHeader className="p-0 items-center">
                  <CardTitle className="font-headline text-2xl mb-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </div>
              <CardFooter className="p-0 mt-8 justify-center">
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/services/${service.slug}`}>
                    Mehr erfahren <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
       <div className="mt-16 text-center">
        <Button asChild variant="outline" size="lg">
            <Link href="#services">Alle Leistungen anzeigen</Link>
        </Button>
      </div>
    </section>
  );
}
