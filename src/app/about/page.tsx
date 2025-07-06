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
                Mein Name ist Julia Jordan und ich arbeite als Heilpraktikerin in Aachen. Ich bin
                verheiratet und Mutter von zwei Jungen.
              </p>
              <p>
                Meine Ausbildung zur Arzthelferin begann ich bei der Bundeswehr in Hannover in
                der Fachabteilung Dermatologie.
                Dort entdeckte ich meine Leidenschaft für die Haut und ihre Erkrankungen.
                Mein damaliger Chef ist ein begnadeter Dermatologe und gab seine Faszination
                an Mensch und Haut an mich weiter. Dafür bin ich ihm unendlich dankbar.
              </p>
              <p>
                Nach einem Umzug nach Hamburg arbeitete ich weiterhin als Arzthelferin in der
                Dermatologie. Zusätzlich begann ich meine 3-jährige Vollzeitausbildung zur
                Heilpraktikerin in der Arcana Heilpraktikerschule. Mit meiner Abschlussprüfung im
                Gesundheitsamt Hamburg, im November 2010, schloss ich meine Ausbildung
                erfolgreich ab und bin seitdem Heilpraktikerin.
              </p>
              <p>
                Seit 2014 wohne ich nun mit meiner Familie in Aachen. Im Praxiszentrum bei Udo
                Froneberg, Heilpraktiker in Aachen, erlernte ich zusätzlich die Manuelle
                Neurotherapie nach Froneberg.
              </p>
              <p>
                Das Praxiszentrum bot mir an zu bleiben und das habe ich getan.
              </p>
              <p>
                Ich bin sehr froh, dass ich den Weg zur Naturheilkunde gefunden habe und eine
                sehr fundierte Ausbildung zur Heilpraktikerin genießen konnte. Denn darin habe
                ich meine Berufung gefunden.
              </p>
              <p>
                Ich freue mich, Sie kennenzulernen und gemeinsam mit Ihnen nach einer
                naturheilkundlichen Lösung für Ihr Anliegen zu suchen.
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
                src="/images/2019-06-25-Julia Jordan-FOVEART_DSCF0199.jpg"
                alt="Portrait von Julia Jordan"
                width={800}
                height={1200}
                className="rounded-2xl shadow-xl w-full h-auto max-w-[450px]"
                priority
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
