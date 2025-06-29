
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-balance">
          Naturheilpraxis Julia Jordan
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Ihre Naturheilpraxis in Aachen für ganzheitliche Dermatologie und Ästhetik
        </p>
        <div className="flex flex-wrap gap-4 mt-4">
          <Button asChild size="lg">
            <Link href="#booking">Termin buchen</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/services">Leistungen entdecken</Link>
          </Button>
        </div>
      </div>
      <div className="relative h-80 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
        <Image
          src="https://placehold.co/800x600.png"
          alt="Eine ruhige Naturkulisse als Symbol für Wohlbefinden"
          fill
          className="object-cover"
          data-ai-hint="serene nature"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent"></div>
      </div>
    </section>
  );
}
