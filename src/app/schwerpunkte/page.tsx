
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { focusAreas } from '@/lib/focus-areas';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AllFocusAreasPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section id="focus-areas-list" className="container py-12 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-headline">Schwerpunkte meiner Praxis</h1>
            <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
              Mein Fokus liegt auf der ganzheitlichen Behandlung von Hauterkrankungen. Hier finden Sie einen Überblick über die Beschwerden, bei denen ich Sie mit naturheilkundlichen Methoden unterstützen kann.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area) => {
              const Icon = area.icon;
              return (
                <Card key={area.slug} className="flex flex-col text-center p-8 h-full border-border/60 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex-grow flex flex-col items-center">
                    <div className="p-4 bg-accent rounded-full inline-block mb-6">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                    <CardHeader className="p-0 items-center">
                      <CardTitle className="font-headline text-2xl mb-4">{area.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 flex-grow">
                      <p className="text-muted-foreground">{area.shortDescription}</p>
                    </CardContent>
                  </div>
                  <CardFooter className="p-0 mt-8 justify-center">
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/schwerpunkte/${area.slug}`}>
                        Details anzeigen <ArrowRight className="ml-2" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
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
