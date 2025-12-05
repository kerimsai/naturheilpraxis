import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { focusAreas } from '@/lib/focus-areas';
import { services } from '@/lib/services';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const baseUrl = 'https://www.heilpraxis-jordan.de';

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const area = focusAreas.find((s) => s.slug === params.slug);

  if (!area) {
    return {
      title: 'Schwerpunkt – Naturheilpraxis Julia Jordan Aachen',
    };
  }

  const title = `${area.title} – Naturheilpraxis Julia Jordan Aachen`;
  const description = area.shortDescription;
  const imageUrl = area.image.startsWith('http') ? area.image : encodeURI(`${baseUrl}${area.image}`);

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `${baseUrl}/schwerpunkte/${area.slug}/`,
      images: [
        {
          url: imageUrl,
          alt: area.imageHint ? `${area.title} – ${area.imageHint}` : area.title,
        },
      ],
      locale: 'de_DE',
      siteName: 'Naturheilpraxis Julia Jordan',
      type: 'article',
    },
  };
}

export async function generateStaticParams() {
  return focusAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default function FocusAreaDetailPage({ params }: { params: { slug: string } }) {
  const area = focusAreas.find((s) => s.slug === params.slug);

  if (!area) {
    notFound();
  }

  const { title, longDescription, icon: Icon, relatedServices: relatedServiceSlugs } = area;
  const relatedServices = services.filter((service) => relatedServiceSlugs.includes(service.slug));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="container py-12 md:py-24">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-4">
              <div className="inline-block bg-accent p-3 rounded-full self-start mb-2">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-balance">
                {title}
              </h1>
              <div
                className="text-lg text-foreground/90 prose-styling"
                dangerouslySetInnerHTML={{ __html: longDescription }}
              />
              
              <div className="flex flex-wrap gap-4 mt-8">
                <Button asChild size="lg">
                  <Link href="/#booking">Termin buchen</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/schwerpunkte">Alle Schwerpunkte</Link>
                </Button>
              </div>

              {relatedServices.length > 0 && (
                <div className="mt-12 border-t pt-10">
                  <div className="space-y-2">
                    <h2 className="text-3xl font-headline font-semibold">Mögliche Behandlungsansätze</h2>
                    <p className="text-muted-foreground">
                      Diese Leistungen können Sie begleitend unterstützen und werden individuell auf Ihr Anliegen abgestimmt.
                    </p>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    {relatedServices.map((service) => (
                      <Card key={service.slug} className="h-full flex flex-col border-border/60">
                        <CardHeader>
                          <CardTitle className="font-headline text-xl">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="text-sm text-muted-foreground flex-1">
                          {service.description}
                        </CardContent>
                        <CardFooter className="pt-0">
                          <Button asChild variant="outline" className="w-full">
                            <Link href={`/services/${service.slug}`}>
                              Mehr zu dieser Leistung
                            </Link>
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
