
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';

export default function ImpressumPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="container py-12 md:py-24">
          <div className="max-w-3xl mx-auto prose-styling text-muted-foreground">
            <h1 className="text-4xl md:text-5xl font-bold font-headline text-foreground mb-8">Impressum</h1>
            
            <h3 className="text-2xl font-bold font-headline text-foreground mt-8 mb-4">Angaben gemäß § 5 TMG</h3>
            <p>
              Julia Jordan<br />
              Naturheilpraxis Julia Jordan<br />
              Vaalserstr. 525<br />
              52074 Aachen<br />
              Deutschland
            </p>

            <h3 className="text-2xl font-bold font-headline text-foreground mt-8 mb-4">Kontakt</h3>
            <p>
              Telefon: +49 (0)151 50798638<br />
              E-Mail: info@heilpraxis-jordan.de
            </p>
            
            <h3 className="text-2xl font-bold font-headline text-foreground mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h3>
            <p>
              Berufsbezeichnung: Heilpraktikerin<br />
              Zuständige Aufsichtsbehörde: Gesundheitsamt Aachen<br />
              Verliehen in: Deutschland<br />
              Es gelten folgende berufsrechtliche Regelungen: Gesetz über die berufsmäßige Ausübung der Heilkunde ohne Bestallung (Heilpraktikergesetz) und Durchführungsverordnung.<br />
              Regelungen einsehbar unter: <a href="http://www.gesetze-im-internet.de/heilprg/index.html" target="_blank" rel="noopener noreferrer">http://www.gesetze-im-internet.de/heilprg/index.html</a>
            </p>
            
            <h3 className="text-2xl font-bold font-headline text-foreground mt-8 mb-4">Angaben zur Berufshaftpflichtversicherung</h3>
            <p>
                Name und Sitz des Versicherers:<br/>
                <em>[Bitte hier Name und Anschrift der Versicherung einfügen]</em><br/>
                Geltungsraum der Versicherung: Deutschland
            </p>

            <h3 className="text-2xl font-bold font-headline text-foreground mt-8 mb-4">Haftungsausschluss (Disclaimer)</h3>

            <h4>Haftung für Inhalte</h4>
            <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

            <h4>Haftung für Links</h4>
            <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

            <h4>Urheberrecht</h4>
            <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
