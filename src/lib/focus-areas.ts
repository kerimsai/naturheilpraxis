
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
<p>Akne – wenn die Haut aus dem Gleichgewicht gerät</p>
<p>Hat Ihr Neugeborenes kleine Pickelchen im Gesicht? Hat Ihre Tochter oder Ihr Sohn mit Mitessern und entzündlicher Haut im Gesicht, am Rücken oder im Brustbereich zu kämpfen? Oder leiden Sie selbst unter unreiner Haut oder Reibeisenhaut an den Oberarmen? Dann könnte es sich um eine Form der Akne handeln.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Was ist Akne?</h3>
<p>Akne ist eine nicht ansteckende Hautveränderung, die auf einer Überaktivität der Talgdrüsen und einer Verhornungsstörung beruht. Sie kann in jedem Lebensalter auftreten – von der Neugeborenenakne bis zur sogenannten Spätakne im Erwachsenenalter. Häufig betroffen sind Gesicht, Rücken, Brust, Dekolleté sowie Oberarme und Oberschenkel. Je nach Ausprägung zeigt sich Akne in Form von Mitessern (Komedonen), entzündlichen Papeln und Pusteln oder tieferliegenden Knoten. Während Akne in der Pubertät meist hormonell bedingt ist (Akne vulgaris), kann sich im Erwachsenenalter eine sogenannte Spätakne (Akne tarda) entwickeln – deren Ursachen sind vielfältig und individuell verschieden.</p>
<h3 class="font-bold text-2xl pt-4 font-headline">Mögliche Einflussfaktoren</h3>
<p>Die Entstehung von Akne kann durch eine Vielzahl von Faktoren begünstigt werden, darunter:</p>
<ul class="list-disc list-inside space-y-2">
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
        longDescription: "<p>Juckreiz (Pruritus) kann viele Ursachen haben, von trockener Haut bis hin zu inneren Erkrankungen. Ich unterstütze Sie dabei, nach der Wurzel des Problems zu suchen. Eine Kombination aus topischen natürlichen Mitteln, pflanzlichen Heilmitteln und Anpassungen des Lebensstils kann dazu beitragen, die Haut zu beruhigen und den Juckreiz zu lindern.</p>"
    },
    {
        slug: "neurodermitis",
        icon: Layers,
        title: "Neurodermitis",
        shortDescription: "Ganzheitliche Begleitung bei Neurodermitis mit Fokus auf Darmgesundheit, Ernährung und Pflanzenheilkunde.",
        longDescription: "<p>Neurodermitis (atopisches Ekzem) ist eine chronisch-entzündliche Hauterkrankung, die eng mit dem Darm und dem Immunsystem verbunden sein kann. Mein Behandlungsansatz kann eine detaillierte Mikrobiom-Analyse, eine entzündungshemmende Ernährungsstrategie und den Einsatz von Pflanzenheilkunde umfassen, um die Hautbarriere zu unterstützen und zur Minimierung von Schüben beizutragen.</p>"
    },
    {
        slug: "schuppenflechte",
        icon: DiscAlbum,
        title: "Schuppenflechte",
        shortDescription: "Naturheilkundliche Begleitung bei Schuppenflechte mit dem Ziel, das Immunsystem zu beruhigen und Entzündungen zu reduzieren.",
        longDescription: "<p>Schuppenflechte (Psoriasis) ist eine Autoimmunerkrankung, die sich auf der Haut manifestieren kann. Mein Ansatz konzentriert sich darauf, das Immunsystem zu beruhigen und zur Reduzierung von Entzündungen im Körper beizutragen. Entgiftungsverfahren, spezielle Diäten und naturheilkundliche Mittel sind zentrale Bestandteile meiner Begleitung, um zur Kontrolle der Symptome beizutragen und das Hautbild zu unterstützen.</p>"
    },
    {
        slug: "warzen",
        icon: Shield,
        title: "Warzen",
        shortDescription: "Unterstützung bei Warzen durch Stärkung der körpereigenen Abwehr mit natürlichen Mitteln.",
        longDescription: "<p>Warzen werden durch Viren verursacht und können ein Zeichen für ein geschwächtes lokales Immunsystem sein. Anstatt nur die Warze selbst zu entfernen, zielt mein Ansatz darauf ab, die körpereigene Abwehr zu unterstützen. Ich nutze pflanzliche Tinkturen und homöopathische Mittel, um den Körper bei der Auseinandersetzung mit dem Virus zu begleiten.</p>"
    }
];
