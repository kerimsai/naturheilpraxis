
import { Droplets, ShieldCheck, Microscope, Leaf, LucideProps } from 'lucide-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type Service = {
  slug: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  title: string;
  description: string;
  longDescription: string;
  price: string;
  image: string;
  imageHint: string;
};

export const services: Service[] = [
  {
    slug: "vitamin-c-infusion",
    icon: Droplets,
    title: "Vitamin-C-Infusion",
    description: "Hochdosierte Vitamin-C-Infusionen zur Stärkung des Immunsystems und zur Steigerung der Vitalität.",
    longDescription: "Unsere hochdosierten Vitamin-C-Infusionen sind eine effektive Methode, um das Immunsystem zu stärken, die Kollagenproduktion anzuregen und den Körper vor oxidativem Stress zu schützen. Ideal bei erhöhter Infektanfälligkeit, chronischer Müdigkeit oder zur Unterstützung der Hautgesundheit. Erleben Sie einen sofortigen Vitalitätsschub.",
    price: "Sitzung: 120€",
    image: "https://placehold.co/800x600.png",
    imageHint: "iv drip"
  },
  {
    slug: "aderlass-blutreinigung",
    icon: ShieldCheck,
    title: "Aderlass & Blutreinigung",
    description: "Traditionelles Ausleitverfahren zur Entgiftung und Blutreinigung.",
    longDescription: "Der Aderlass nach Hildegard von Bingen ist ein bewährtes Ausleitungsverfahren zur Reinigung des Blutes und zur Entlastung des Körpers. Es dient der Entgiftung, der Verbesserung der Blutzirkulation und der Harmonisierung der Körpersäfte. Diese Behandlung kann bei einer Vielzahl von chronischen Beschwerden und zur allgemeinen Prävention eingesetzt werden.",
    price: "Sitzung: ab 95€",
    image: "https://placehold.co/800x600.png",
    imageHint: "blood donation"
  },
  {
    slug: "mikrobiom-analyse",
    icon: Microscope,
    title: "Mikrobiom-Analyse",
    description: "Detaillierte Analyse Ihrer Darmflora zur Optimierung der Verdauung und zur Stärkung der Gesundheit.",
    longDescription: "Ihr Darmmikrobiom spielt eine entscheidende Rolle für Ihre Gesundheit. Mit einer modernen Mikrobiom-Analyse untersuchen wir die Zusammensetzung Ihrer Darmbakterien und leiten daraus individuelle Therapieempfehlungen ab. Verbessern Sie Ihre Verdauung, stärken Sie Ihr Immunsystem und steigern Sie Ihr Wohlbefinden durch einen gesunden Darm.",
    price: "Analyse & Beratung: 250€",
    image: "https://placehold.co/800x600.png",
    imageHint: "microscope laboratory"
  },
  {
    slug: "pflanzenheilkunde",
    icon: Leaf,
    title: "Pflanzenheilkunde",
    description: "Traditionelle Heilpflanzenkunde zur Linderung von Beschwerden und Vorbeugung von Krankheiten.",
    longDescription: "Die Phytotherapie oder Heilpflanzenkunde hat eine lange Geschichte und lange Tradition. Sie begleitet die Menschheit schon seit Jahrhunderten und wird bis heute erfolgreich eingesetzt. In der Heilpflanzenkunde werden Heilpflanzen und Kräuter zur Linderung von Beschwerden und zur Vorbeugung von Krankheiten genutzt. Sie eignen sich als begleitende Maßnahmen und sind in verschiedensten Darreichungsformen wie z.B.: Tees, Tinkturen, Badezusätze, Tabletten, Salben verfügbar.",
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "herbs medicine"
  }
];
