
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
        longDescription: "Akne kann durch hormonelle Schwankungen, Ernährung und Stress beeinflusst werden. Ich verfolge einen ganzheitlichen Ansatz, der mögliche Ursachen erforscht. Mit natürlichen Methoden wie Kräutertherapie, Ernährungsberatung und Mikronährstofftherapie kann die Hautgesundheit von innen heraus unterstützt werden."
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
