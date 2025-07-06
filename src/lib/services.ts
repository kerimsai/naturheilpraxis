
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
    title: "Vitamin C Infusion",
    description: "Vitamin-C-Infusionen können zur Unterstützung körpereigener Abwehrkräfte beitragen.",
    longDescription: `<h3>Was ist Vitamin C?</h3><p>Vitamin C ist ein wasserlösliches Vitamin. Der Mensch kann Vitamin C nicht selbst herstellen sondern muss es über die Ernährung aufnehmen. Eine gesunde Ernährung muss also genügend Vitamin C enthalten. Bei Krankheit oder vermehrter Stressbelastung steigt der Bedarf an Vitamin C an.</p><p>Vitamin C kann nicht vom Körper gespeichert werden. Auch der Darm kann nur eine begrenzte Menge an Vitamin C aufnehmen (ca. 200mg). Deshalb können orale Einnahmen keine hohen Vitamin-C-Spiegel erreichen.</p><h3>Vitamin C ist an vielen Prozessen im Körper beteiligt:</h3><ul><li>Schützt Gewebe vor oxidativen Stress</li><li>Unterstützt das Immunsystem und kardiovaskuläre System</li><li>Entgiftende Abläufe in der Leber</li><li>Wundheilung und Knochenstoffwechsel</li><li>Energiestoffwechsel</li><li>Eisenstoffwechsel</li></ul><h3>Wofür kann eine Vitamin-C-Infusion eingesetzt werden?</h3><ul><li>Vitamin-C-Mangelzustände</li><li>Erhöhter Verbrauch von Vitamin C durch:</li></ul><ul class="ml-6"><li>Stressbelastung (Long-Covid)</li><li>Entzündliche Erkrankungen</li><li>Allergien</li><li>chronische Darmerkrankungen</li><li>Blasenentzündungen</li><li>Infektanfälligkeit</li><li>Wundheilungsstörungen</li><li>Unterstützt die Eisenaufnahme</li><li>Erhöhte Leberwerte / Fettleber</li></ul><h3>Wie häufig sollte eine Vitamin-C-Infusion durchgeführt werden?</h3><p>Die Vitamin-C-Infusion sollte 4-6x im Abstand von 1-3x pro Woche durchgeführt werden.</p><p>Eine Vitamin-C-Infusion lässt sich sehr gut mit kosmetischen Behandlungen kombinieren oder mit homöopathischen Mitteln erweitern. Lassen Sie sich von mir beraten!</p>`,
    price: 'Beratung & Aufklärung (ca. 30 Min): 32€\nPro Infusion (ca. 45 Min): 49€',
    image: "https://images.unsplash.com/photo-1611073061835-e77b1b16d3f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxWaXRhbWluJTIwQ3xlbnwwfHx8fDE3NTE3NTkwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    imageHint: "iv drip"
  },
  {
    slug: "aderlass-blutreinigung",
    icon: ShieldCheck,
    title: "Aderlass",
    description: "Traditionelles Ausleitverfahren zur Unterstützung der körpereigenen Regeneration.",
    longDescription: "<p>Der Aderlass nach Hildegard von Bingen ist ein bewährtes Ausleitungsverfahren zur Reinigung des Blutes und zur Entlastung des Körpers. Es dient der Entgiftung, der Verbesserung der Blutzirkulation und der Harmonisierung der Körpersäfte. Diese Behandlung kann bei einer Vielzahl von chronischen Beschwerden und zur allgemeinen Prävention eingesetzt werden.</p>",
    price: "Sitzung: ab 95€",
    image: "https://placehold.co/800x600.png",
    imageHint: "blood donation"
  },
  {
    slug: "mikrobiom-analyse",
    icon: Microscope,
    title: "Mikrobiom-Analyse",
    description: "Detaillierte Analyse Ihrer Darmflora zur gezielten Begleitung Ihrer Verdauungsgesundheit",
    longDescription: "<p>Ihr Darmmikrobiom spielt eine entscheidende Rolle für Ihre Gesundheit. Mit einer modernen Mikrobiom-Analyse untersuche ich die Zusammensetzung Ihrer Darmbakterien und leite daraus individuelle Therapieempfehlungen ab. Verbessern Sie Ihre Verdauung, stärken Sie Ihr Immunsystem und steigern Sie Ihr Wohlbefinden durch einen gesunden Darm.</p>",
    price: "Analyse & Beratung: 250€",
    image: "https://placehold.co/800x600.png",
    imageHint: "microscope laboratory"
  },
  {
    slug: "pflanzenheilkunde",
    icon: Leaf,
    title: "Pflanzenheilkunde",
    description: "Die Pflanzenheilkunde nutzt Heilpflanzen, um die natürlichen Selbstheilungskräfte des Körpers zu unterstützen",
    longDescription: "<p>Die Phytotherapie oder Heilpflanzenkunde hat eine lange Geschichte und lange Tradition. Sie begleitet die Menschheit schon seit Jahrhunderten und wird bis heute erfolgreich eingesetzt. In der Heilpflanzenkunde werden Heilpflanzen und Kräuter zur Linderung von Beschwerden und zur Vorbeugung von Krankheiten genutzt. Sie eignen sich als begleitende Maßnahmen und sind in verschiedensten Darreichungsformen wie z.B.: Tees, Tinkturen, Badezusätze, Tabletten, Salben verfügbar.</p>",
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "herbs medicine"
  },
  {
    slug: "ohrakupunktur",
    icon: Ear,
    title: "Ohrakupunktur",
    description: "Diagnose und Therapie durch Stimulation von Reflexzonen am Ohr zur ganzheitlichen Begleitung von Körper und Psyche",
    longDescription: `<p>Die französische Ohrakupunktur wurde von dem französichen Arzt Paul Nogier ins Leben gerufen und dient der Diagnosefindung und Therapie.</p><p>Das Ohr repräsentiert die Reflexzonen des gesamten menschlichen Körpers. Jeder Punkt im Ohr ist einem bestimmten Organ zugeordnet.</p><p>Zur Diagnosefindung werden diese Punkte, z.B. über einen Hautwiderstandstest, auf Druckschmerz oder Schwäche geprüft.</p><p>Durch das Setzen von kleinen Akupunkturnadeln in die betreffenden Reflexpunkte ist es möglcih auf Organe, Schmerzen und Psyche Einfluss zu nehmen und diese positiv zu beeinflussen.</p>`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "acupuncture ear"
  },
  {
    slug: "entgiftung-entsaeuerung",
    icon: Filter,
    title: "Entgiftung & Entsäuerung",
    description: "Begleitende naturheilkundliche Maßnahmen zur Unterstützung des Stoffwechsels und des inneren Gleichgewichts",
    longDescription: `<p>Eine Entgiftungskur und Entsäuerung des Körpers kann bei vielen Beschwerden und Erkrankungen sinnvoll sein. Verschiedenste Ursachen können zu einer Übersäuerung des Körpers beitragen:</p><ul><li>zuviel säurebildende Nahrung z.B.: zuviel Fett, Zucker, Weizenprodukte, Fleisch</li><li>zuckerhaltige Getränke (Säfte), Kaffee/schwarzer Tee, Alkohol</li><li>Bewegungsmangel</li><li>Rauchen</li><li>Medikamente</li><li>Stress, Sorgen, Ängste</li><li>…</li></ul><p>Mein Körper ist eigentlich in der Lage Stoffe, die im Körper nicht benötigt werden auszuscheiden. Dies geschieht über die Ausscheidungsorgane: Haut, Leber, Niere, Darm, Lymphe und Lunge.</p><p>Ist die Säurelast im Körper zu hoch, fallen zuviel Abfallprodukte an. Der Körper kann diese nicht schnell genug loswerden und lagert diese im Bindegewebe ab.</p><p>Diese Ablagerungen können die Funktionen im Körper stören oder Zellen schädigen. Daher kann sich eine regelmäßige Entgiftung und Entsäuerung positiv auf die Regulationsfähigkeit des Körpers auswirken und zur Behandlung von Erkrankungen beitragen.</p>`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "detox healthy"
  },
  {
    slug: "milchsaeureinfusion",
    icon: FlaskConical,
    title: "Milchsäureinfusion",
    description: "Infusion mit rechtsdrehender Milchsäure zur Unterstützung des Stoffwechsels und der Regeneration.",
    longDescription: `<p>Rechtsdrehende Milchsäure ist eine natürliche Substanz im Körper, die eine wichtige Rolle im Energiestoffwechsel spielt. Eine Milchsäureinfusion kann helfen, den Säure-Basen-Haushalt zu regulieren, die Zellatmung zu verbessern und die körperliche Regeneration zu fördern. Diese Behandlung ist besonders empfehlenswert bei Erschöpfungszuständen, zur Unterstützung nach sportlicher Betätigung oder als begleitende Maßnahme bei chronischen Erkrankungen, um die Vitalität zu steigern.</p>`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "infusion therapy"
  },
  {
    slug: "manuelle-neuro-therapie",
    icon: Spline,
    title: "MNT (Manuelle-Neuro-Therapie)",
    description: "Kombinierte Behandlung aus Massage, Reflextherapie und Mobilisation bei diversen Beschwerden.",
    longDescription: `<h3>MNT ( Manuelle-Neuro-Therapie nach Walter Froneberg )</h3><p>Das Besondere an der Manuellen-Neuro-Therapie ist die Kombination aus drei Einzeltechniken:</p><ol><li>Die Behandlung beginnt mit einer spezifischen Muskel- und Nervenmassage.</li><li>Darauf folgt eine Nervenreflextherapie am Fuß. Mit ihr ist es möglich, direkt am und über das Nervensystem den Körper in allen Ebenen zu erfassen.</li><li>Dann erfolgt eine modifizierte Gelenkmobilisation.</li></ol><p>Durch diese bestmöglich aufeinander abgestimmten Einzeltechniken ist ein schneller Zugriff auf Muskel, Bänder, Gelenke, Nerven und Organe weitgehend möglich.</p><p>Die Manuelle Neurotherapie kann vielfache Beschwerden erfassen und schließt somit eine ganzheitliche Betrachtung des Menschen mit ein.</p><h3>Einige Beispiele für Krankheitsbilder:</h3><ul><li>Hexenschuss</li><li>Ischialgie</li><li>Kopfschmerzen</li><li>Magen-Darmprobleme</li><li>Verstopfung (auch nach Schwangerschaft)</li><li>Rückenschmerzen</li><li>uvm.</li></ul>`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "manual therapy"
  },
  {
    slug: "schuessler-salze",
    icon: Gem,
    title: "Schüssler Salze",
    description: "Biochemische Anwendung nach Dr. Schüßler zur Unterstützung körpereigener Prozesse mit ausgewählten Mineralsalzen",
    longDescription: `<p>Dr. Schüßler war der Begründer der “Biochemischen Heilweise”. Er hat bei seinen Untersuchungen festgestellt, dass man durch bestimmte Salze, Informationen in den Zellen erneuern und aktivieren kann. Diesen Impuls in der Zelle unterstützte er durch die von ihm entwickelten Mineral-Salze.</p>`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "minerals salt"
  },
  {
    slug: "homoeopathie",
    icon: Sparkles,
    title: "Homöopathie",
    description: "Naturheilkundliche Methode nach dem Ähnlichkeitsprinzip – zur sanften Unterstützung der körpereigenen Regulation.",
    longDescription: `<p>Samuel Hahnemann prägte den Ausdruck “Gleiches mit gleichem Heilen”.</p><p>Homöopathie bildet heute einen eigenständige Therapieform in der Naturheilkunde. Die Einzelsubstanzen, wurden am gesunden Menschen geprüft und nach der Ähnlichkeitsregel in potenzierter Form verabreicht.</p>`,
    price: "Individuell nach Anamnese",
    image: "https://placehold.co/800x600.png",
    imageHint: "homeopathy medicine"
  }
];
