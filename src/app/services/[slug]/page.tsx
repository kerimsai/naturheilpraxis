import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { services } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  const { title, longDescription, price, image, imageHint, icon: Icon } = service;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="container py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="flex flex-col gap-4">
              <div className="inline-block bg-accent p-3 rounded-full self-start mb-2">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-balance">
                {title}
              </h1>
              <div
                className="text-lg text-foreground/90 space-y-4"
                dangerouslySetInnerHTML={{ __html: longDescription }}
              />
              
              <Card className="mt-6 bg-secondary/50">
                <CardHeader>
                    <CardTitle className="font-headline text-xl">Preisinformation</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg whitespace-pre-line">{price}</p>
                    <p className="text-sm text-muted-foreground mt-1">Weitere Sitzungen und Pakete auf Anfrage.</p>
                </CardContent>
              </Card>

              <div className="flex flex-wrap gap-4 mt-4">
                <Button asChild size="lg">
                  <Link href="/#booking">Termin buchen</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Alle Leistungen</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl mt-8 lg:mt-0">
              <Image
                src={image}
                alt={`Bild, das ${title} darstellt`}
                fill
                className="object-cover"
                data-ai-hint={imageHint}
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
