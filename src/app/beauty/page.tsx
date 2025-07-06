
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { Button } from '@/components/ui/button';

export default function BeautyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background beauty-page-background">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="flex flex-col gap-6 text-muted-foreground md:text-lg">
                <h2 className="text-xl font-semibold tracking-widest text-primary uppercase">The Beauty Room</h2>
                <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4 text-balance">
                    Ihr Studio für medizinische Kosmetik und Ästhetik
                </h1>
                <p>
                    Neben meiner Tätigkeit als Heilpraktikerin widme ich mich im "The Beauty Room" der medizinischen Kosmetik und fortschrittlichen ästhetischen Behandlungen. Hier verbinde ich mein dermatologisches Wissen mit modernsten Technologien.
                </p>
                <p>
                    Entdecken Sie ein exklusives Angebot an Behandlungen, die darauf abzielen, die Gesundheit Ihrer Haut nachhaltig zu verbessern und Ihre natürliche Schönheit zu unterstreichen. Von Anti-Aging-Therapien bis hin zu spezialisierten Hautpflegekonzepten – finden Sie die perfekte Lösung für Ihre individuellen Bedürfnisse.
                </p>
                <div className="flex flex-wrap gap-4 mt-6">
                    <Button asChild size="lg">
                        <a href="https://the-beauty-room-aachen.de" target="_blank" rel="noopener noreferrer">Zur Website</a>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                        <Link href="/#booking">Termin vereinbaren</Link>
                    </Button>
                </div>
            </div>
            <div className="w-full">
              <Image
                src="https://images.unsplash.com/photo-1564640227760-db286729bf83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxibHVlJTIwZmxvd2VyfGVufDB8fHx8MTc1MTM3MzE0NXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Blaue Rose mit Wassertropfen"
                width={1080}
                height={1620}
                className="rounded-2xl shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
