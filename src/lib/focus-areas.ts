
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
        shortDescription: "Ganzheitliche Behandlung von Akne durch Erforschung von Ursachen und natürliche Heilmethoden.",
        longDescription: "Akne wird oft durch hormonelle Schwankungen, Ernährung und Stress beeinflusst. Wir verfolgen einen ganzheitlichen Ansatz, der die Ursachen erforscht und durch natürliche Heilmethoden wie Kräutertherapie, Ernährungsberatung und Mikronährstofftherapie die Hautgesundheit von innen heraus verbessert."
    },
    {
        slug: "allergien-autoimmunerkrankungen",
        icon: ShieldAlert,
        title: "Allergien & Autoimmunerkrankungen",
        shortDescription: "Modulation des Immunsystems bei Allergien und Autoimmunerkrankungen durch Darmsanierung und Nährstofftherapie.",
        longDescription: "Bei Allergien und Autoimmunerkrankungen ist das Immunsystem fehlgeleitet. Unser Ziel ist es, das Immunsystem zu modulieren und zu beruhigen. Durch Darmsanierung, Ausleitungsverfahren und gezielte Nährstofftherapie unterstützen wir den Körper dabei, wieder ins Gleichgewicht zu finden und Überreaktionen zu reduzieren."
    },
    {
        slug: "juckreiz",
        icon: Waves,
        title: "Juckreiz",
        shortDescription: "Ursachenforschung und Linderung von Juckreiz mit natürlichen Mitteln und Anpassungen des Lebensstils.",
        longDescription: "Juckreiz (Pruritus) kann viele Ursachen haben, von trockener Haut bis hin zu inneren Erkrankungen. Wir suchen nach der Wurzel des Problems und behandeln es mit einer Kombination aus topischen natürlichen Mitteln, pflanzlichen Heilmitteln und Anpassungen des Lebensstils, um die Haut zu beruhigen und den Juckreiz nachhaltig zu lindern."
    },
    {
        slug: "neurodermitis",
        icon: Layers,
        title: "Neurodermitis",
        shortDescription: "Behandlung von Neurodermitis mit Fokus auf Darmgesundheit, Ernährung und Pflanzenheilkunde.",
        longDescription: "Neurodermitis (atopisches Ekzem) ist eine chronisch-entzündliche Hauterkrankung, die eng mit dem Darm und dem Immunsystem verbunden ist. Unser Behandlungsansatz umfasst eine detaillierte Mikrobiom-Analyse, eine entzündungshemmende Ernährungsstrategie und den Einsatz von Pflanzenheilkunde, um die Hautbarriere zu stärken und Schübe zu minimieren."
    },
    {
        slug: "schuppenflechte",
        icon: DiscAlbum,
        title: "Schuppenflechte",
        shortDescription: "Kontrolle von Psoriasis-Symptomen durch Beruhigung des Immunsystems und Entzündungsreduktion.",
        longDescription: "Schuppenflechte (Psoriasis) ist eine Autoimmunerkrankung, die sich auf der Haut manifestiert. Wir konzentrieren uns auf die Beruhigung des Immunsystems und die Reduzierung von Entzündungen im Körper. Entgiftungsverfahren, spezielle Diäten und naturheilkundliche Mittel sind zentrale Bestandteile unserer Therapie, um die Symptome zu kontrollieren und das Hautbild zu verbessern."
    },
    {
        slug: "warzen",
        icon: Shield,
        title: "Warzen",
        shortDescription: "Stärkung der körpereigenen Abwehr zur Bekämpfung von Warzenviren mit natürlichen Mitteln.",
        longDescription: "Warzen werden durch Viren verursacht und sind ein Zeichen für ein geschwächtes lokales Immunsystem. Anstatt nur die Warze selbst zu entfernen, zielt unser Ansatz darauf ab, die körpereigene Abwehr zu stärken. Wir nutzen pflanzliche Tinkturen und homöopathische Mittel, um den Körper bei der Bekämpfung des Virus zu unterstützen."
    }
];
