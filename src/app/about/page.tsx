import Image from 'next/image';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-6 text-muted-foreground md:text-lg">
              <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-4">
                Wer ich bin ...
              </h1>
              <p>
                Mein Name ist Julia Jordan. Als Heilpraktikerin in Aachen begleite ich Menschen bei Haut- und Immunthemen auf naturheilkundliche Weise. Ich bin verheiratet und Mutter von zwei Jungen.
              </p>
              <p>
                Der erste Schritt führte mich in die Fachabteilung Dermatologie der Bundeswehr Hannover. Dort entdeckte ich meine Faszination für die Haut und ihre Bedürfnisse, geprägt durch die enge Zusammenarbeit mit erfahrenen Dermatologen.
              </p>
              <p>
                In Hamburg vertiefte ich mein Wissen, absolvierte eine dreijährige Vollzeitausbildung zur Heilpraktikerin und bestand 2010 die amtsärztliche Überprüfung. Seitdem verbinde ich medizinische Erfahrung mit naturheilkundlichen Ansätzen.
              </p>
              <p>
                2014 zog ich mit meiner Familie nach Aachen. Im Praxiszentrum von Udo Froneberg lernte ich die Manuelle Neurotherapie kennen und integrierte sie in mein Behandlungsspektrum. Hier fand ich meinen beruflichen Heimathafen.
              </p>
              <p>
                Heute arbeite ich ganzheitlich: Ich höre zu, nehme mir Zeit für Ihre Fragen und erarbeite behutsam Wege, die Ihr Wohlbefinden fördern können.
              </p>

              <div className="space-y-3">
                <h2 className="text-2xl font-headline text-foreground">Qualifikationen & Werdegang</h2>
                <ul className="list-disc pl-5 space-y-2 text-foreground">
                  <li>Ausbildung zur Arzthelferin (Fachabteilung Dermatologie, Bundeswehr Hannover)</li>
                  <li>3-jährige Vollzeitausbildung zur Heilpraktikerin (Arcana Heilpraktikerschule Hamburg)</li>
                  <li>Amtsärztliche Überprüfung Gesundheitsamt Hamburg (2010)</li>
                  <li>Manuelle Neurotherapie nach Froneberg</li>
                </ul>
              </div>

              <p>
                Ich freue mich darauf, Sie kennenzulernen und Sie auf Ihrem Weg zu mehr Hautbalance und Wohlbefinden zu begleiten.
              </p>
              <Image
                src="/images/signature.png"
                alt="Unterschrift von Julia Jordan"
                width={250}
                height={100}
                className="mt-6 object-contain"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src="/images/JuliaJordanNHP.webp"
                alt="Portrait von Julia Jordan"
                width={450}
                height={675}
                className="rounded-2xl shadow-xl w-full h-auto max-w-[450px]"
                priority
                data-ai-hint="portrait woman"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
