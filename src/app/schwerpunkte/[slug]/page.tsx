
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { focusAreas } from '@/lib/focus-areas';
import { Button } from '@/components/ui/button';

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

  const { title, longDescription, icon: Icon } = area;

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
                className="text-lg text-foreground/90 space-y-4"
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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
