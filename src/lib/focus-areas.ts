
import { XCircle, ShieldAlert, Waves, Layers, DiscAlbum, Shield, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type FocusArea = {
  slug: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  shortDescription: string;
  longDescription: string;
};

export const focusAreas: FocusArea[] = [
    {
        slug: "akne",
        icon: XCircle,
        title: "Akne",
        shortDescription: "Ganzheitliche Begleitung bei Akne durch Erforschung von Ursachen und Anwendung natürlicher Methoden.",
        longDescription: `
<p><strong>Akne – wenn die Haut aus dem Gleichgewicht gerät</strong></p>
<p>Hat Ihr Neugeborenes kleine Pickelchen im Gesicht? Hat Ihre Tochter oder Ihr Sohn mit Mitessern und entzündlicher Haut im Gesicht, am Rücken oder im Brustbereich zu kämpfen? Oder leiden Sie selbst unter unreiner Haut oder Reibeisenhaut an den Oberarmen? Dann könnte es sich um eine Form der Akne handeln.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Was ist Akne?</h3>
<p>Akne ist eine nicht ansteckende Hautveränderung, die auf einer Überaktivität der Talgdrüsen und einer Verhornungsstörung beruht. Sie kann in jedem Lebensalter auftreten – von der Neugeborenenakne bis zur sogenannten Spätakne im Erwachsenenalter. Häufig betroffen sind Gesicht, Rücken, Brust, Dekolleté sowie Oberarme und Oberschenkel. Je nach Ausprägung zeigt sich Akne in Form von Mitessern (Komedonen), entzündlichen Papeln und Pusteln oder tieferliegenden Knoten. Während Akne in der Pubertät meist hormonell bedingt ist (Akne vulgaris), kann sich im Erwachsenenalter eine sogenannte Spätakne (Akne tarda) entwickeln – deren Ursachen sind vielfältig und individuell verschieden.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Mögliche Einflussfaktoren</h3>
<p>Die Entstehung von Akne kann durch eine Vielzahl von Faktoren begünstigt werden, darunter:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>hormonelle Veränderungen (z.B. Pubertät, Schwangerschaft, Hormonumstellungen)</li>
    <li>genetische Veranlagung</li>
    <li>bestimmte Medikamente</li>
    <li>unausgewogene Ernährung, Stress, Alkohol oder Rauchen</li>
    <li>ungeeignete Hautpflege oder mechanische Reize (z.B. Quetschen von Pickeln)</li>
</ul>
<h3 class="font-bold text-2xl pt-4 font-headline">Wie ich Sie in meiner Praxis unterstütze</h3>
<p>Akne ist eine sehr individuelle Hauterkrankung. Deshalb biete ich keine Standardlösung, sondern eine ganzheitliche, auf Sie oder Ihr Kind abgestimmte Unterstützung an. Ziel ist es, die Haut wieder ins Gleichgewicht zu bringen und das persönliche Wohlbefinden zu stärken. Ich nehme mir Zeit für eine ausführliche Anamnese, eine differenzierte Hautanalyse und kombiniere bei Bedarf naturheilkundliche und kosmetisch-medizinische Ansätze. Mit meinem Wissen und meiner Erfahrung – auch aus der medizinischen Kosmetik – begleite ich Sie gerne auf Ihrem Weg zu einer sichtbar ausgeglicheneren Haut.</p>
`
    },
    {
        slug: "allergien-autoimmunerkrankungen",
        icon: ShieldAlert,
        title: "Allergien & Autoimmunreaktionen",
        shortDescription: "Individuelle naturheilkundliche Unterstützung für Ihr Immunsystem",
        longDescription: `
<p><strong>Individuelle naturheilkundliche Unterstützung für Ihr Immunsystem</strong></p>
<p>Immer mehr Menschen sind von Allergien oder autoimmunen Beschwerden betroffen. In meiner Praxis biete ich naturheilkundliche Verfahren an, die den Körper dabei unterstützen können, besser mit diesen Herausforderungen umzugehen und das Gleichgewicht des Immunsystems zu fördern.</p>

<h3 class="font-bold text-2xl pt-4 font-headline">Was ist eine Allergie?</h3>
<p>Bei einer Allergie reagiert das Immunsystem überempfindlich auf eigentlich harmlose Stoffe wie Pollen, Hausstaubmilben, Tierhaare, bestimmte Nahrungsmittel oder Medikamente. Diese sogenannten Allergene werden fälschlich als Bedrohung eingestuft, was zu einer Vielzahl von Reaktionen führen kann – zum Beispiel:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Juckreiz</li>
    <li>Schwellungen</li>
    <li>Hautausschläge</li>
    <li>Niesen, laufende Nase</li>
    <li>Atembeschwerden</li>
    <li>In seltenen Fällen auch starke allergische Reaktionen (z.B. anaphylaktische Reaktionen)</li>
</ul>

<h3 class="font-bold text-2xl pt-4 font-headline">Was passiert bei Autoimmunprozessen?</h3>
<p>Bei sogenannten Autoimmunreaktionen richtet sich das Immunsystem nicht gegen äußere Eindringlinge, sondern irrtümlich gegen körpereigene Strukturen. Dabei kann es zu chronischen Entzündungsprozessen kommen. Die Ursachen gelten als vielschichtig und sind noch nicht vollständig erforscht.</p>

<h3 class="font-bold text-2xl pt-4 font-headline">Begleitende Behandlungsmöglichkeiten in meiner Praxis</h3>
<p>Neben allgemeinen Empfehlungen (z.B. Vermeidung bekannter Auslöser, Ernährung, Darmgesundheit) biete ich in meiner Praxis auch eine naturheilkundlich orientierte Methode an, die auf eine sanfte Regulation des Immunsystems abzielt:</p>

<h4 class="font-bold text-xl pt-2 font-headline">Allergostop® – eine individuell abgestimmte Eigenblutbehandlung</h4>
<p>Die Methode basiert auf einem von Prof. Dr. E. Theurer (VitOrgan) entwickelten Verfahren, bei dem aus dem eigenen Blut ein homöopathisch aufbereitetes Serum hergestellt wird. Diese Form der Behandlung soll den Körper dabei unterstützen, mit übersteigerten Reaktionen des Immunsystems besser umzugehen.</p>

<h5 class="font-semibold text-lg pt-2 font-headline">Ablauf:</h5>
<ol class="list-decimal list-inside space-y-2 mt-2">
    <li><strong>Blutabnahme:</strong> Ideal in der Hochphase der allergischen Beschwerden</li>
    <li><strong>Aufbereitung:</strong> Das Serum wird individuell und homöopathisch aufbereitet</li>
    <li><strong>Injektionsserie:</strong> In der Regel 7 Injektionen über einen Zeitraum von ca. 2–3 Wochen</li>
</ol>

<h3 class="font-bold text-2xl pt-4 font-headline">Mögliche Einsatzbereiche</h3>
<p>Die Allergostop®-Behandlung kann in meiner Praxis begleitend eingesetzt werden bei:</p>
<p class="pt-2"><strong>Allergischen Reaktionen wie:</strong></p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Pollenallergie (z.B. Heuschnupfen)</li>
    <li>Hausstaubmilben- oder Tierhaarallergie</li>
    <li>allergisch bedingtem Asthma</li>
</ul>
<p class="pt-2"><strong>Autoimmunprozessen (begleitend zur ärztlichen Therapie), z.B.:</strong></p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Hashimoto-Thyreoiditis</li>
    <li>Rheumatoider Arthritis</li>
    <li>Lupus erythematodes</li>
    <li>Morbus Crohn, Colitis ulcerosa</li>
    <li>Sjögren-Syndrom</li>
    <li>Raynaud-Symptomatik u. a.</li>
</ul>

<h3 class="font-bold text-2xl pt-4 font-headline">Vorteile dieser Methode</h3>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Allergene müssen nicht vorher bestimmt werden</li>
    <li>Eine Austestung ist nicht notwendig</li>
    <li>Auch bei mehreren Unverträglichkeiten möglich</li>
    <li>Ein Behandlungsbeginn ist meist auch während akuter Beschwerden möglich</li>
    <li>Gute Verträglichkeit laut Erfahrungsberichten</li>
</ul>

<h3 class="font-bold text-2xl pt-4 font-headline">Ergänzende Maßnahmen</h3>
<p>In vielen Fällen ist es sinnvoll, die Behandlung mit weiteren Maßnahmen zu kombinieren, z.B.:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Vitamin-C-Infusionen zur Unterstützung des Immunsystems</li>
    <li>Darmsanierung zur Stabilisierung der Schleimhäute</li>
    <li>Ernährungsberatung bei Verdacht auf Unverträglichkeiten</li>
</ul>
<p>Ich begleite Sie gern individuell und ganzheitlich – in einem persönlichen Gespräch klären wir gemeinsam, welche Maßnahmen in Ihrem Fall sinnvoll sein können.</p>

<div class="mt-6 p-4 border-l-4 border-primary bg-secondary/50 rounded-r-lg text-sm">
<h4 class="font-bold text-lg font-headline">Rechtlicher Hinweis</h4>
<p class="mt-2">Die hier vorgestellte Behandlungsmethode gehört zur Erfahrungsheilkunde und basiert auf den Erkenntnissen der Komplementärmedizin. Die Wirksamkeit von Allergostop® ist wissenschaftlich nicht abschließend belegt. Sie ersetzt keine schulmedizinisch notwendige Diagnostik oder Therapie. Bitte wenden Sie sich bei schweren oder akuten Beschwerden an Ihre behandelnde Ärztin oder Ihren Arzt.</p>
<h4 class="font-bold text-lg font-headline mt-4">Information zum Transfusionsgesetz (TFG):</h4>
<p class="mt-2">Laut § 28 TFG fällt das Verfahren der Allergostop®- Behandlung unter die Ausnahmeregelungen vom Transfusionsgesetz. Weitere Informationen finden Sie auf der Website des Herstellers: <a href="https://www.vitorgan.de/allergostop" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary">www.vitorgan.de/allergostop</a></p>
</div>
`
    },
    {
        slug: "juckreiz",
        icon: Waves,
        title: "Juckreiz",
        shortDescription: "Begleitung bei Juckreiz durch Ursachenforschung und den Einsatz natürlicher Mittel zur Linderung.",
        longDescription: `
<p><strong>Juckreiz – Wenn die Haut ständig ruft</strong></p>
<p>Ihre Haut juckt ständig, und das Bedürfnis zu kratzen ist Ihr ständiger Begleiter? Ihr Kind kratzt sich vielleicht sogar blutig? Juckreiz kann sehr belastend sein – vor allem, wenn er regelmäßig auftritt oder zu Schlafstörungen führt. Die Ursachen für Juckreiz sind vielfältig: Sie reichen von harmloser trockener Haut bis hin zu Allergien, inneren Erkrankungen oder psychischen Belastungen. Häufig ist der Juckreiz auch Ausdruck eines Ungleichgewichts im Körper. Durch ständiges Kratzen kann die Haut geschädigt werden, was Entzündungen begünstigt.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Was kann hinter dem Juckreiz stecken?</h3>
<p>Juckreiz (medizinisch Pruritus) ist ein häufiges Hautsymptom, dessen Auslöser nicht immer leicht zu erkennen sind. Hier sind einige mögliche Ursachen:</p>
<h4 class="font-bold text-xl pt-2 font-headline">Häufige Auslöser von Juckreiz:</h4>
<div class="space-y-4 mt-4">
    <p><strong>Trockene Haut:</strong> Mit zunehmendem Alter oder durch äußere Einflüsse wie Sonne, Seifen oder Wassermangel verliert die Haut an Feuchtigkeit. Dadurch wird sie anfälliger für Reizungen und beginnt zu jucken.</p>
    <p><strong>Allergien:</strong> Bei allergischen Reaktionen (z.B. auf Pollen, Tierhaare, Nickel, Kosmetika) werden körpereigene Botenstoffe wie Histamin freigesetzt, die starken Juckreiz verursachen können.</p>
    <p><strong>Nahrungsmittelunverträglichkeiten:</strong> Besonders bei Histaminunverträglichkeit oder bestimmten Zusatzstoffen kann es zu Hautreaktionen und Juckreiz kommen – oft begleitet von Verdauungsbeschwerden.</p>
    <p><strong>Medikamente:</strong> Bestimmte Arzneimittel wie Antibiotika, Hormonpräparate oder Schmerzmittel (z.B. Ibuprofen) können als Nebenwirkung Juckreiz verursachen.</p>
    <p><strong>Ekzeme & Neurodermitis:</strong> Ekzeme sind entzündliche Hautveränderungen, die mit Rötung, Bläschen und starkem Juckreiz einhergehen. Kratzen verschlimmert oft den Hautzustand.</p>
    <p><strong>„Sonnenallergie“ & Lichtdermatosen:</strong> Überempfindlichkeiten gegenüber Sonnenlicht treten häufig im Frühjahr auf und äußern sich durch Juckreiz, Rötungen oder Bläschen.</p>
    <p><strong>Akne & Schuppenflechte:</strong> Auch entzündliche Hauterkrankungen wie Akne oder Psoriasis (Schuppenflechte) können mit Juckreiz einhergehen.</p>
    <p><strong>Hormonelle Umstellungen:</strong> Während Schwangerschaft oder Wechseljahren kann es zu hormonell bedingtem Juckreiz kommen.</p>
    <p><strong>Innere Erkrankungen:</strong> Leber-, Nieren- oder Schilddrüsenerkrankungen, Eisenmangel, Diabetes oder Infektionen können Juckreiz als Begleitsymptom verursachen.</p>
    <p><strong>Nährstoffungleichgewicht:</strong> Ein Zinkmangel oder eine Überdosierung von bestimmten Vitaminen kann Juckreiz begünstigen.</p>
    <p><strong>Psychische Faktoren:</strong> Stress, emotionale Belastung oder Erschöpfung können sich auf die Haut auswirken. Gerade bei chronischem Juckreiz ist auch die seelische Komponente zu beachten.</p>
    <p><strong>Parasiten (z.B. Läuse, Milben, Mückenstiche):</strong> Diese Auslöser sind meist eindeutig erkennbar und lokal begrenzt.</p>
</div>
<h3 class="font-bold text-2xl pt-4 font-headline">Wie ich Sie unterstützen kann</h3>
<p>Juckreiz kann das tägliche Leben erheblich beeinträchtigen – körperlich wie seelisch. Um die passende Behandlung zu finden, nehme ich mir Zeit für eine ausführliche Anamnese. Dabei berücksichtige ich sowohl körperliche als auch seelische Ursachen und erstelle gemeinsam mit Ihnen einen ganzheitlichen Therapieansatz. In meiner Praxis kann ich Sie u. a. unterstützen mit:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>naturheilkundlichen Therapiekonzepten</li>
    <li>gezielter Hautpflegeberatung</li>
    <li>Ernährungs- und Darmgesundheitsberatung</li>
    <li>begleitenden Infusionskuren (z.B. Vitamin C)</li>
    <li>ergänzenden Maßnahmen zur Stressregulation</li>
</ul>
<h3 class="font-bold text-2xl pt-4 font-headline">Vereinbaren Sie gern ein persönliches Gespräch</h3>
<p>Wenn Sie oder Ihr Kind unter Juckreiz leiden, zögern Sie nicht, mich anzusprechen. Gemeinsam finden wir einen Weg, Ihre Haut zu beruhigen und Ihr Wohlbefinden zu verbessern.</p>`
    },
    {
        slug: "neurodermitis",
        icon: Layers,
        title: "Neurodermitis",
        shortDescription: "Ganzheitliche Begleitung bei Neurodermitis mit Fokus auf Darmgesundheit, Ernährung und Pflanzenheilkunde.",
        longDescription: `
<p><strong>Neurodermitis – Wenn die Haut einfach nicht zur Ruhe kommt</strong></p>
<p>Leidet Ihre Haut unter quälendem Juckreiz? Müssen Sie sich kratzen, bis die Haut blutet? Besonders an den Beugeseiten der Arme und Beine? Oder zeigt Ihr Kind rote, schuppige Hautstellen und klagt über anhaltenden Juckreiz? Dann könnte es sich um eine Neurodermitis handeln.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Was ist Neurodermitis?</h3>
<p>Neurodermitis, auch atopisches Ekzem genannt, ist eine chronisch-entzündliche Hauterkrankung, die in Schüben verläuft und durch starken Juckreiz gekennzeichnet ist. Der Begriff „Neurodermitis“ stammt noch aus einer Zeit, in der man eine nervlich bedingte Hautentzündung vermutete – das konnte so nicht bestätigt werden. Dennoch zeigen viele Betroffene, dass Stress und psychische Belastung die Symptome verstärken können.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Typische Symptome der Neurodermitis</h3>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Starker, oft unerträglicher Juckreiz</li>
    <li>Trockene, schuppige, gerötete Haut, besonders an den Beugeseiten (Arme, Knie)</li>
    <li>Kratzwunden durch das unstillbare Jucken</li>
    <li>Sichtbare Ekzeme – oft auch im Gesicht oder Halsbereich</li>
    <li>Rissige Haut und Entzündungen durch aufgekratzte Stellen</li>
    <li>In symptomfreien Phasen oft ein eher trockenes Hautbild</li>
</ul>
<p>Das Hautbild kann sich zwischen den Schüben deutlich bessern, dennoch bleibt die Haut meist empfindlich. Die psychische Belastung durch die sichtbaren Symptome darf dabei nicht unterschätzt werden – gerade im Gesicht kann Neurodermitis das Selbstwertgefühl stark beeinträchtigen.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Mögliche Ursachen und Auslöser</h3>
<p>Die genauen Ursachen der Neurodermitis sind noch nicht vollständig geklärt. Vermutet wird ein Zusammenspiel verschiedener Faktoren:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li><strong>Vererbung / genetische Veranlagung (atopische Disposition):</strong> Häufig tritt Neurodermitis gemeinsam mit anderen Erkrankungen wie allergischem Asthma oder Heuschnupfen auf.</li>
    <li><strong>Gestörte Hautbarriere:</strong> Die Haut verliert schneller Feuchtigkeit, reagiert überempfindlich auf äußere Reize und kann sich schlechter gegen Keime wehren.</li>
    <li><strong>Allergien und Nahrungsmittelunverträglichkeiten:</strong> Viele Betroffene reagieren zusätzlich sensibel auf bestimmte Lebensmittel oder Umweltstoffe.</li>
    <li><strong>Naturheilkundliche Sichtweise:</strong> hier gilt eine gestörte Darmflora als möglicher Mitverursacher. Auch ein übermäßiges Hygieneverhalten kann das Immunsystem langfristig aus dem Gleichgewicht bringen.</li>
</ul>
<h4 class="font-bold text-xl pt-2 font-headline">Mögliche Triggerfaktoren</h4>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Häufiges Waschen</li>
    <li>Duft- und Konservierungsstoffe in Kosmetik, Kleidung oder Reinigungsmitteln</li>
    <li>Kälte, Heizungsluft oder starke Hitze</li>
    <li>Stress und seelische Belastung</li>
</ul>
<h3 class="font-bold text-2xl pt-4 font-headline">Wer ist betroffen?</h3>
<p>Neurodermitis tritt vor allem im Kindesalter auf: etwa 10% der Kinder sind betroffen. Bei Erwachsenen liegt die Rate bei rund 1–2%. In vielen Fällen bessert sich die Erkrankung mit dem Älterwerden, bei manchen bleibt sie jedoch bestehen oder flackert immer wieder auf.</p>
<p>Ein erstes Anzeichen bei Säuglingen kann sogenannter Milchschorf sein – eine krustige, juckende Veränderung am Kopf. Ein Hinweis auf eine allergische Veranlagung kann auch der sogenannte weiße Dermographismus sein: Streicht man mit einem Holzspatel über die Haut, zeigt sich bei Allergikern eine weiße Linie – bei Nicht-Allergikern eine rote.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Wie ich Sie bei Neurodermitis unterstützen kann</h3>
<p>Ob Sie selbst betroffen sind oder Ihr Kind – Neurodermitis kann belastend und kraftzehrend sein. Mein Ziel ist es, Ihnen individuell und einfühlsam zur Seite zu stehen.</p>
<p>In meiner Praxis nehme ich mir Zeit für eine ausführliche Anamnese. So lerne ich nicht nur Ihre Haut, sondern auch Ihre Lebensumstände, Sorgen und Bedürfnisse kennen. Auf dieser Basis entwickeln wir gemeinsam einen Behandlungsplan, der genau zu Ihrer Situation passt.</p>
<p>Besonders wichtig ist mir:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Raum für Ihre Gefühle – vor allem pflegende Angehörige wie Mütter erleben große Belastung. In meiner Praxis dürfen Sie offen sprechen, schimpfen, weinen oder auch Ekel äußern – all das ist menschlich und willkommen.</li>
    <li>Individuelle Therapieansätze – naturheilkundlich und ganzheitlich orientiert</li>
    <li>Beratung zur hautverträglichen Pflege und Ernährung</li>
    <li>Stärkung der Darmgesundheit, wenn sinnvoll</li>
    <li>Entspannung und Stressreduktion als unterstützende Maßnahmen</li>
</ul>
<h3 class="font-bold text-2xl pt-4 font-headline">Sie sind nicht allein – ich bin für Sie da</h3>
<p>Haben Sie Fragen zur Neurodermitis oder zu anderen Hauterkrankungen? Vereinbaren Sie gerne einen Termin oder rufen Sie mich an. Ich nehme mir Zeit für Sie – und für Ihre Haut.</p>
`
    },
    {
        slug: "schuppenflechte",
        icon: DiscAlbum,
        title: "Schuppenflechte",
        shortDescription: "Naturheilkundliche Begleitung bei Schuppenflechte mit dem Ziel, das Immunsystem zu beruhigen und Entzündungen zu reduzieren.",
        longDescription: `<p><strong>Schuppenflechte (Psoriasis) – wenn sich die Haut immer wieder schuppt</strong></p>
<p>Stellen Sie an Ellbogen oder Knien immer wieder rundliche, scharf begrenzte Hautstellen fest, die leicht gerötet und mit silbrigen Schuppen bedeckt sind – aber kaum jucken? Dann könnte es sich um Psoriasis, auch Schuppenflechte genannt, handeln. Auch wenn diese Hautveränderungen nicht ansteckend sind, empfinden viele Betroffene sie als belastend – optisch wie emotional.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Was ist Psoriasis?</h3>
<p>Die Schuppenflechte ist eine chronisch-entzündliche, nicht ansteckende Hauterkrankung, die in Schüben verläuft. Die Haut erneuert sich dabei viel zu schnell: Statt der üblichen 28 Tage dauert der Verhornungsprozess bei Psoriasis nur etwa 3–4 Tage. Die Folge: abgestorbene Hautzellen sammeln sich auf der Oberfläche, es entstehen trockene, schuppende Plaques.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Typische Symptome</h3>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Scharf begrenzte, runde, gerötete Hautstellen</li>
    <li>Silbrig glänzende Schuppen, besonders an Ellbogen, Knien, Steißbein oder der Kopfhaut</li>
    <li>Kaum Juckreiz, eher in akuten Phasen</li>
    <li>Feine Blutpunkte beim Entfernen der obersten Schuppenschicht (sog. Auspitz-Phänomen)</li>
    <li>Bläschenbildung an Händen und Füßen (bei bestimmten Psoriasisformen)</li>
    <li>Nagelveränderungen wie Tüpfel- oder Krümelnägel</li>
    <li>Gelenkbeschwerden (bei Psoriasis-Arthritis)</li>
</ul>
<p>Im Unterschied zur Neurodermitis ist der Juckreiz meist weniger ausgeprägt – ein Unterscheidungsmerkmal, auf das ich in meiner Praxis gerne eingehe, wenn eine klare Diagnose noch aussteht.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Was kann die Psoriasis verschlechtern?</h3>
<p>Die Ursachen der Psoriasis sind noch nicht abschließend geklärt. Vermutet wird eine Autoimmunreaktion, bei der das Immunsystem körpereigene Hautzellen angreift. Auch eine genetische Veranlagung kann eine Rolle spielen. Schübe werden oft durch sogenannte Triggerfaktoren ausgelöst:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Infektionen (z.B. mit Streptokokken oder Hefepilzen)</li>
    <li>Hautreizungen durch Sonnenbrand, Tattoos oder Kleidung</li>
    <li>Hormonelle Veränderungen (z.B. in der Schwangerschaft)</li>
    <li>Bestimmte Medikamente (z.B. Betablocker, ACE-Hemmer, NSAR)</li>
    <li>Stress und seelische Belastung</li>
    <li>Rauchen, Alkohol, ungesunde Ernährung</li>
    <li>Übergewicht</li>
    <li>Klima- und Wetterwechsel</li>
</ul>
<p>Diese Auslöser sind sehr individuell – es lohnt sich, sie im Rahmen einer ausführlichen Anamnese gemeinsam zu identifizieren.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Ganzheitliche Unterstützung bei Psoriasis</h3>
<p>Aus schulmedizinischer Sicht gilt Psoriasis als nicht heilbar – viele Patient:innen erhalten kortisonhaltige Cremes oder systemische Medikamente. In der Naturheilkunde verfolgen wir einen ganzheitlichen Ansatz, der Körper, Haut und Lebensumstände mit einbezieht. In meiner Praxis habe ich mich auf Hauterkrankungen spezialisiert und arbeite bei Schuppenflechte unter anderem mit:</p>
<ul class="list-disc list-inside space-y-2 mt-2">
    <li>Phytotherapie (Pflanzenheilkunde)</li>
    <li>Hautpflegeberatung</li>
    <li>Ernährungsoptimierung und Darmsanierung</li>
    <li>Stressbewältigung und Entlastung des Nervensystems</li>
    <li>Begleitende Ausleitungsverfahren (z.B. bei Verdacht auf medikamentöse Belastung)</li>
</ul>
<h3 class="font-bold text-2xl pt-4 font-headline">Raum für Ihre persönliche Geschichte</h3>
<p>Psoriasis ist nicht nur eine Erkrankung der Haut – sie betrifft oft auch das Selbstwertgefühl. Daher ist mir in der Behandlung besonders wichtig, Sie ganzheitlich zu sehen. In einer ausführlichen Anamnese lernen wir Ihre persönliche Krankheitsgeschichte kennen – und finden gemeinsam den passenden Weg für Sie. Ziel meiner Therapie ist immer eine spürbare Verbesserung Ihrer Lebensqualität.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Ich bin für Sie da</h3>
<p>Haben Sie Fragen zur Schuppenflechte oder wünschen Sie sich eine naturheilkundliche Begleitung? Sprechen Sie mich gerne an – ich bin für Sie da und begleite Sie auf Ihrem Weg zu mehr Hautbalance und Wohlbefinden.</p>`
    },
    {
        slug: "warzen",
        icon: Shield,
        title: "Warzen",
        shortDescription: "Unterstützung bei Warzen durch Stärkung der körpereigenen Abwehr mit natürlichen Mitteln.",
        longDescription: "<p>Warzen werden durch Viren verursacht und können ein Zeichen für ein geschwächtes lokales Immunsystem sein. Anstatt nur die Warze selbst zu entfernen, zielt mein Ansatz darauf ab, die körpereigene Abwehr zu unterstützen. Ich nutze pflanzliche Tinkturen und homöopathische Mittel, um den Körper bei der Auseinandersetzung mit dem Virus zu begleiten.</p>"
    }
];

    

    