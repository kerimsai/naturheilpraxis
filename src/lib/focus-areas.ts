
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
        longDescription: `Akne – wenn die Haut aus dem Gleichgewicht gerät

Hat Ihr Neugeborenes kleine Pickelchen im Gesicht? Hat Ihre Tochter oder Ihr Sohn mit Mitessern und entzündlicher Haut im Gesicht, am Rücken oder im Brustbereich zu kämpfen? Oder leiden Sie selbst unter unreiner Haut oder Reibeisenhaut an den Oberarmen? Dann könnte es sich um eine Form der Akne handeln.

Was ist Akne?
Akne ist eine nicht ansteckende Hautveränderung, die auf einer Überaktivität der Talgdrüsen und einer Verhornungsstörung beruht. Sie kann in jedem Lebensalter auftreten – von der Neugeborenenakne bis zur sogenannten Spätakne im Erwachsenenalter. Häufig betroffen sind Gesicht, Rücken, Brust, Dekolleté sowie Oberarme und Oberschenkel. Je nach Ausprägung zeigt sich Akne in Form von Mitessern (Komedonen), entzündlichen Papeln und Pusteln oder tieferliegenden Knoten. Während Akne in der Pubertät meist hormonell bedingt ist (Akne vulgaris), kann sich im Erwachsenenalter eine sogenannte Spätakne (Akne tarda) entwickeln – deren Ursachen sind vielfältig und individuell verschieden.

Mögliche Einflussfaktoren
Die Entstehung von Akne kann durch eine Vielzahl von Faktoren begünstigt werden, darunter:
- hormonelle Veränderungen (z.B. Pubertät, Schwangerschaft, Hormonumstellungen)
- genetische Veranlagung
- bestimmte Medikamente
- unausgewogene Ernährung, Stress, Alkohol oder Rauchen
- ungeeignete Hautpflege oder mechanische Reize (z.B. Quetschen von Pickeln)

Wie ich Sie in meiner Praxis unterstütze
Akne ist eine sehr individuelle Hauterkrankung. Deshalb biete ich keine Standardlösung, sondern eine ganzheitliche, auf Sie oder Ihr Kind abgestimmte Unterstützung an. Ziel ist es, die Haut wieder ins Gleichgewicht zu bringen und das persönliche Wohlbefinden zu stärken. Ich nehme mir Zeit für eine ausführliche Anamnese, eine differenzierte Hautanalyse und kombiniere bei Bedarf naturheilkundliche und kosmetisch-medizinische Ansätze. Mit meinem Wissen und meiner Erfahrung – auch aus der medizinischen Kosmetik – begleite ich Sie gerne auf Ihrem Weg zu einer sichtbar ausgeglicheneren Haut.`
    },
    {
        slug: "allergien-autoimmunerkrankungen",
        icon: ShieldAlert,
        title: "Allergien & Autoimmunerkrankungen",
        shortDescription: "Naturheilkundliche Begleitung bei Allergien und Autoimmunerkrankungen mit dem Ziel, das Immunsystem zu modulieren.",
        longDescription: "Bei Allergien und Autoimmunerkrankungen kann das Immunsystem fehlgeleitet sein. Mein Ziel ist es, das Immunsystem zu modulieren und zu beruhigen. Durch Darmsanierung, Ausleitungsverfahren und gezielte Nährstofftherapie kann der Körper dabei unterstützt werden, wieder ins Gleichgewicht zu finden und Überreaktionen zu reduzieren."
    },
    {
        slug: "juckreiz",
        icon: Waves,
        title: "Juckreiz",
        shortDescription: "Begleitung bei Juckreiz durch Ursachenforschung und den Einsatz natürlicher Mittel zur Linderung.",
        longDescription: "Juckreiz (Pruritus) kann viele Ursachen haben, von trockener Haut bis hin zu inneren Erkrankungen. Ich unterstütze Sie dabei, nach der Wurzel des Problems zu suchen. Eine Kombination aus topischen natürlichen Mitteln, pflanzlichen Heilmitteln und Anpassungen des Lebensstils kann dazu beitragen, die Haut zu beruhigen und den Juckreiz zu lindern."
    },
    {
        slug: "neurodermitis",
        icon: Layers,
        title: "Neurodermitis",
        shortDescription: "Ganzheitliche Begleitung bei Neurodermitis mit Fokus auf Darmgesundheit, Ernährung und Pflanzenheilkunde.",
        longDescription: "Neurodermitis (atopisches Ekzem) ist eine chronisch-entzündliche Hauterkrankung, die eng mit dem Darm und dem Immunsystem verbunden sein kann. Mein Behandlungsansatz kann eine detaillierte Mikrobiom-Analyse, eine entzündungshemmende Ernährungsstrategie und den Einsatz von Pflanzenheilkunde umfassen, um die Hautbarriere zu unterstützen und zur Minimierung von Schüben beizutragen."
    },
    {
        slug: "schuppenflechte",
        icon: DiscAlbum,
        title: "Schuppenflechte",
        shortDescription: "Naturheilkundliche Begleitung bei Schuppenflechte mit dem Ziel, das Immunsystem zu beruhigen und Entzündungen zu reduzieren.",
        longDescription: "Schuppenflechte (Psoriasis) ist eine Autoimmunerkrankung, die sich auf der Haut manifestieren kann. Mein Ansatz konzentriert sich darauf, das Immunsystem zu beruhigen und zur Reduzierung von Entzündungen im Körper beizutragen. Entgiftungsverfahren, spezielle Diäten und naturheilkundliche Mittel sind zentrale Bestandteile meiner Begleitung, um zur Kontrolle der Symptome beizutragen und das Hautbild zu unterstützen."
    },
    {
        slug: "warzen",
        icon: Shield,
        title: "Warzen",
        shortDescription: "Unterstützung bei Warzen durch Stärkung der körpereigenen Abwehr mit natürlichen Mitteln.",
        longDescription: "Warzen werden durch Viren verursacht und können ein Zeichen für ein geschwächtes lokales Immunsystem sein. Anstatt nur die Warze selbst zu entfernen, zielt mein Ansatz darauf ab, die körpereigene Abwehr zu unterstützen. Ich nutze pflanzliche Tinkturen und homöopathische Mittel, um den Körper bei der Auseinandersetzung mit dem Virus zu begleiten."
    }
];
