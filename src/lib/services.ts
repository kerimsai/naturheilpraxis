
import { Droplets, ShieldCheck, Microscope, Leaf, Ear, Filter, LucideProps } from 'lucide-react';
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
  },
  {
    slug: "ohrakupunktur",
    icon: Ear,
    title: "Ohrakupunktur",
    description: "Diagnose und Therapie durch Stimulation von Reflexzonen am Ohr zur positiven Beeinflussung von Organen, Schmerzen und Psyche.",
    longDescription: "Die französische Ohrakupunktur wurde von dem französichen Arzt Paul Nogier ins Leben gerufen und dient der Diagnosefindung und Therapie.\n\nDas Ohr repräsentiert die Reflexzonen des gesamten menschlichen Körpers. Jeder Punkt im Ohr ist einem bestimmten Organ zugeordnet.\n\nZur Diagnosefindung werden diese Punkte, z.B. über einen Hautwiderstandstest, auf Druckschmerz oder Schwäche geprüft.\n\nDurch das Setzen von kleinen Akupunkturnadeln in die betreffenden Reflexpunkte ist es möglcih auf Organe, Schmerzen und Psyche Einfluss zu nehmen und diese positiv zu beeinflussen.",
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "acupuncture ear"
  },
  {
    slug: "entgiftung-entsaeuerung",
    icon: Filter,
    title: "Entgiftung & Entsäuerung",
    description: "Unterstützung des Körpers bei der Ausleitung von Schadstoffen und der Wiederherstellung des Säure-Basen-Gleichgewichts.",
    longDescription: "Eine Entgiftungskur und Entsäuerung des Körpers kann bei vielen Beschwerden und Erkrankungen sinnvoll sein. Verschiedenste Ursachen können zu einer Übersäuerung des Körpers beitragen:\n\n- zuviel säurebildende Nahrung z.B.: zuviel Fett, Zucker, Weizenprodukte, Fleisch\n- zuckerhaltige Getränke (Säfte), Kaffee/schwarzer Tee, Alkohol\n- Bewegungsmangel\n- Rauchen\n- Medikamente\n- Stress, Sorgen, Ängste\n- …\n\nUnser Körper ist eigentlich in der Lage Stoffe, die im Körper nicht benötigt werden auszuscheiden. Dies geschieht über die Ausscheidungsorgane: Haut, Leber, Niere, Darm, Lymphe und Lunge.\n\nIst die Säurelast im Körper zu hoch, fallen zuviel Abfallprodukte an. Der Körper kann diese nicht schnell genug loswerden und lagert diese im Bindegewebe ab.\n\nDiese Ablagerungen können die Funktionen im Körper stören oder Zellen schädigen. Daher kann sich eine regelmäßige Entgiftung und Entsäuerung positiv auf die Regulationsfähigkeit des Körpers auswirken und zur Behandlung von Erkrankungen beitragen.",
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "detox healthy"
  }
];
