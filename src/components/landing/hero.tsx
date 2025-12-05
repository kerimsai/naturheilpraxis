
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section className="container grid lg:grid-cols-2 gap-12 items-center py-20 md:py-32">
      <div className="flex flex-col gap-4">
        <h1 className="text-4xl md:text-6xl font-bold font-headline text-balance">
          Naturheilpraxis Julia Jordan – Ganzheitliche Naturheilkunde in Aachen
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl">
          Spezialisierte Begleitung bei Haut- und Immungesundheit mit sanften, naturheilkundlichen Methoden.
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
          src="/images/2019-06-25-Julia Jordan-FOVEART_DSCF0195 1.webp"
          alt="Eine ruhige Naturkulisse als Symbol für Wohlbefinden"
          fill
          className="object-cover"
          data-ai-hint="serene nature"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent to-50%"></div>
      </div>
    </section>
  );
}
