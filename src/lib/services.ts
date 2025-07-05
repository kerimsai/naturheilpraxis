
import { Droplets, ShieldCheck, Microscope, Leaf, Ear, Filter, Spline, Gem, Sparkles, LucideProps, FlaskConical } from 'lucide-react';
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
    description: "Vitamin-C-Infusionen können zur Unterstützung körpereigener Abwehrkräfte beitragen.",
    longDescription: "Meine hochdosierten Vitamin-C-Infusionen sind eine effektive Methode, um das Immunsystem zu stärken, die Kollagenproduktion anzuregen und den Körper vor oxidativem Stress zu schützen. Ideal bei erhöhter Infektanfälligkeit, chronischer Müdigkeit oder zur Unterstützung der Hautgesundheit. Erleben Sie einen sofortigen Vitalitätsschub.",
    price: "Sitzung: 120€",
    image: "https://placehold.co/800x600.png",
    imageHint: "iv drip"
  },
  {
    slug: "aderlass-blutreinigung",
    icon: ShieldCheck,
    title: "Aderlass",
    description: "Traditionelles Ausleitverfahren zur Unterstützung der körpereigenen Regeneration.",
    longDescription: "Der Aderlass nach Hildegard von Bingen ist ein bewährtes Ausleitungsverfahren zur Reinigung des Blutes und zur Entlastung des Körpers. Es dient der Entgiftung, der Verbesserung der Blutzirkulation und der Harmonisierung der Körpersäfte. Diese Behandlung kann bei einer Vielzahl von chronischen Beschwerden und zur allgemeinen Prävention eingesetzt werden.",
    price: "Sitzung: ab 95€",
    image: "https://placehold.co/800x600.png",
    imageHint: "blood donation"
  },
  {
    slug: "mikrobiom-analyse",
    icon: Microscope,
    title: "Mikrobiom-Analyse",
    description: "Detaillierte Analyse Ihrer Darmflora zur gezielten Begleitung Ihrer Verdauungsgesundheit",
    longDescription: "Ihr Darmmikrobiom spielt eine entscheidende Rolle für Ihre Gesundheit. Mit einer modernen Mikrobiom-Analyse untersuche ich die Zusammensetzung Ihrer Darmbakterien und leite daraus individuelle Therapieempfehlungen ab. Verbessern Sie Ihre Verdauung, stärken Sie Ihr Immunsystem und steigern Sie Ihr Wohlbefinden durch einen gesunden Darm.",
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
    longDescription: `Die französische Ohrakupunktur wurde von dem französichen Arzt Paul Nogier ins Leben gerufen und dient der Diagnosefindung und Therapie.

Das Ohr repräsentiert die Reflexzonen des gesamten menschlichen Körpers. Jeder Punkt im Ohr ist einem bestimmten Organ zugeordnet.

Zur Diagnosefindung werden diese Punkte, z.B. über einen Hautwiderstandstest, auf Druckschmerz oder Schwäche geprüft.

Durch das Setzen von kleinen Akupunkturnadeln in die betreffenden Reflexpunkte ist es möglcih auf Organe, Schmerzen und Psyche Einfluss zu nehmen und diese positiv zu beeinflussen.`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "acupuncture ear"
  },
  {
    slug: "entgiftung-entsaeuerung",
    icon: Filter,
    title: "Entgiftung & Entsäuerung",
    description: "Unterstützung des Körpers bei der Ausleitung von Schadstoffen und der Wiederherstellung des Säure-Basen-Gleichgewichts.",
    longDescription: `Eine Entgiftungskur und Entsäuerung des Körpers kann bei vielen Beschwerden und Erkrankungen sinnvoll sein. Verschiedenste Ursachen können zu einer Übersäuerung des Körpers beitragen:

- zuviel säurebildende Nahrung z.B.: zuviel Fett, Zucker, Weizenprodukte, Fleisch
- zuckerhaltige Getränke (Säfte), Kaffee/schwarzer Tee, Alkohol
- Bewegungsmangel
- Rauchen
- Medikamente
- Stress, Sorgen, Ängste
- …

Mein Körper ist eigentlich in der Lage Stoffe, die im Körper nicht benötigt werden auszuscheiden. Dies geschieht über die Ausscheidungsorgane: Haut, Leber, Niere, Darm, Lymphe und Lunge.

Ist die Säurelast im Körper zu hoch, fallen zuviel Abfallprodukte an. Der Körper kann diese nicht schnell genug loswerden und lagert diese im Bindegewebe ab.

Diese Ablagerungen können die Funktionen im Körper stören oder Zellen schädigen. Daher kann sich eine regelmäßige Entgiftung und Entsäuerung positiv auf die Regulationsfähigkeit des Körpers auswirken und zur Behandlung von Erkrankungen beitragen.`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "detox healthy"
  },
  {
    slug: "milchsaeureinfusion",
    icon: FlaskConical,
    title: "Milchsäureinfusion",
    description: "Infusion mit rechtsdrehender Milchsäure zur Unterstützung des Stoffwechsels und der Regeneration.",
    longDescription: `Rechtsdrehende Milchsäure ist eine natürliche Substanz im Körper, die eine wichtige Rolle im Energiestoffwechsel spielt. Eine Milchsäureinfusion kann helfen, den Säure-Basen-Haushalt zu regulieren, die Zellatmung zu verbessern und die körperliche Regeneration zu fördern. Diese Behandlung ist besonders empfehlenswert bei Erschöpfungszuständen, zur Unterstützung nach sportlicher Betätigung oder als begleitende Maßnahme bei chronischen Erkrankungen, um die Vitalität zu steigern.`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "infusion therapy"
  },
  {
    slug: "manuelle-neuro-therapie",
    icon: Spline,
    title: "MNT (Manuelle-Neuro-Therapie)",
    description: "Kombinierte Behandlung aus Massage, Reflextherapie und Mobilisation bei diversen Beschwerden.",
    longDescription: `Die Manuelle-Neuro-Therapie nach Walter Froneberg kombiniert drei Einzeltechniken:

1.  Die Behandlung beginnt mit einer spezifischen Muskel- und Nervenmassage.
2.  Darauf folgt eine Nervenreflextherapie am Fuß, um direkt über das Nervensystem den Körper in allen Ebenen zu erfassen.
3.  Anschließend erfolgt eine modifizierte Gelenkmobilisation.

Durch diese aufeinander abgestimmten Techniken ist ein schneller Zugriff auf Muskel, Bänder, Gelenke, Nerven und Organe möglich. Die Manuelle Neurotherapie erfasst vielfältige Beschwerden und ermöglicht eine ganzheitliche Betrachtung des Menschen.

Anwendungsbeispiele:
- Hexenschuss
- Ischialgie
- Kopfschmerzen
- Magen-Darmprobleme
- Verstopfung (auch nach Schwangerschaft)
- Rückenschmerzen
- uvm.`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "manual therapy"
  },
  {
    slug: "schuessler-salze",
    icon: Gem,
    title: "Schüssler Salze",
    description: "Biochemische Heilweise zur Erneuerung und Aktivierung von Zellinformationen durch Mineralsalze.",
    longDescription: `Dr. Schüßler war der Begründer der “Biochemischen Heilweise”. Er hat bei seinen Untersuchungen festgestellt, dass man durch bestimmte Salze, Informationen in den Zellen erneuern und aktivieren kann. Diesen Impuls in der Zelle unterstützte er durch die von ihm entwickelten Mineral-Salze.`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "minerals salt"
  },
  {
    slug: "homoeopathie",
    icon: Sparkles,
    title: "Homöopathie",
    description: "Heilmethode nach dem Ähnlichkeitsprinzip zur Aktivierung der Selbstheilungskräfte.",
    longDescription: `Samuel Hahnemann prägte den Ausdruck “Gleiches mit gleichem Heilen”.

Homöopathie bildet heute einen eigenständige Therapieform in der Naturheilkunde. Die Einzelsubstanzen, wurden am gesunden Menschen geprüft und nach der Ähnlichkeitsregel in potenzierter Form verabreicht.`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "homeopathy medicine"
  }
];
