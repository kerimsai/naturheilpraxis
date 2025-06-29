import { Leaf, Stethoscope, HeartPulse, Brain, Zap, Dna, LucideProps } from 'lucide-react';
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
    slug: "pflanzenheilkunde",
    icon: Leaf,
    title: "Pflanzenheilkunde",
    description: "Personalisierte pflanzliche Heilmittel zur Unterstützung der natürlichen Heilungsprozesse Ihres Körpers.",
    longDescription: "Die Pflanzenheilkunde, auch Phytotherapie genannt, ist eine der ältesten Heilmethoden der Welt. Wir nutzen die Kraft von Heilpflanzen, um individuelle Rezepturen zu erstellen, die auf Ihre spezifischen Bedürfnisse zugeschnitten sind. Diese natürlichen Heilmittel können helfen, das Gleichgewicht im Körper wiederherzustellen, das Immunsystem zu stärken und eine Vielzahl von Beschwerden sanft und effektiv zu behandeln.",
    price: "Erstberatung (60 Min): 90€",
    image: "https://placehold.co/800x600.png",
    imageHint: "herbs medicine"
  },
  {
    slug: "ernaehrungsberatung",
    icon: Stethoscope,
    title: "Ernährungsberatung",
    description: "Beratung zu Diät und Ernährung zur Optimierung Ihrer Gesundheit, Bewältigung von Krankheiten und Steigerung der Vitalität.",
    longDescription: "Eine ausgewogene Ernährung ist die Grundlage für Gesundheit und Wohlbefinden. In unserer Ernährungsberatung analysieren wir Ihre aktuellen Essgewohnheiten und erstellen einen personalisierten Ernährungsplan, der Ihnen hilft, Ihre Gesundheitsziele zu erreichen. Egal ob Sie abnehmen, Ihre Energie steigern oder eine chronische Erkrankung ernährungstechnisch begleiten möchten – wir unterstützen Sie mit fundiertem Wissen und praktischen Tipps.",
    price: "Analyse & Plan (90 Min): 120€",
    image: "https://placehold.co/800x600.png",
    imageHint: "healthy food"
  },
  {
    slug: "homoeopathie",
    icon: HeartPulse,
    title: "Homöopathie",
    description: "Sanfte und doch kraftvolle Behandlungen mit hochverdünnten natürlichen Substanzen zur Anregung der Selbstheilung.",
    longDescription: "Die Homöopathie ist eine Regulationstherapie, die die Selbstheilungskräfte des Körpers anregt. Basierend auf dem Ähnlichkeitsprinzip – „Ähnliches wird durch Ähnliches geheilt“ – wählen wir ein homöopathisches Mittel, das genau zu Ihren individuellen Symptomen auf körperlicher, geistiger und emotionaler Ebene passt. Diese sanfte Methode eignet sich zur Behandlung akuter und chronischer Erkrankungen bei Menschen jeden Alters.",
    price: "Erstanamnese (90 Min): 150€",
    image: "https://placehold.co/800x600.png",
    imageHint: "homeopathy drops"
  },
  {
    slug: "mind-body-medizin",
    icon: Brain,
    title: "Mind-Body-Medizin",
    description: "Techniken zur Harmonisierung Ihrer geistigen und körperlichen Gesundheit, zur Stressreduktion und zur Verbesserung des Wohlbefindens.",
    longDescription: "Die Verbindung zwischen Geist und Körper ist entscheidend für unsere Gesundheit. Die Mind-Body-Medizin nutzt Techniken wie Meditation, Achtsamkeit, Atemübungen und Entspannungsverfahren, um Stress abzubauen, das emotionale Gleichgewicht zu fördern und die körperliche Gesundheit zu verbessern. Lernen Sie, wie Sie die Kraft Ihrer Gedanken nutzen können, um Heilungsprozesse zu unterstützen und ein Leben in Balance zu führen.",
    price: "Sitzung (60 Min): 80€",
    image: "https://placehold.co/800x600.png",
    imageHint: "meditation yoga"
  },
  {
    slug: "akupunktur",
    icon: Zap,
    title: "Akupunktur",
    description: "Traditionelle chinesische Medizintechnik zum Ausgleich des Energieflusses, zur Schmerzlinderung und zur Behandlung verschiedener Beschwerden.",
    longDescription: "Die Akupunktur ist ein zentraler Bestandteil der Traditionellen Chinesischen Medizin (TCM). Durch das Setzen feiner Nadeln an spezifischen Punkten des Körpers wird der Fluss der Lebensenergie (Qi) reguliert, Blockaden gelöst und das energetische Gleichgewicht wiederhergestellt. Akupunktur ist besonders wirksam bei der Behandlung von Schmerzen, kann aber auch bei einer Vielzahl anderer funktioneller und organischer Störungen helfen.",
    price: "Sitzung (45 Min): 70€",
    image: "https://placehold.co/800x600.png",
    imageHint: "acupuncture needles"
  },
  {
    slug: "lebensstil-coaching",
    icon: Dna,
    title: "Lebensstil-Coaching",
    description: "Ganzheitliche Unterstützung, um Ihnen zu helfen, nachhaltige Veränderungen für ein gesünderes, ausgeglicheneres Leben vorzunehmen.",
    longDescription: "Nachhaltige Gesundheit erfordert mehr als nur die Behandlung von Symptomen. Unser Lebensstil-Coaching ist ein ganzheitlicher Prozess, der Sie dabei unterstützt, gesunde Gewohnheiten in allen Lebensbereichen zu etablieren – von Bewegung und Schlaf über Stressmanagement bis hin zu sozialen Beziehungen. Gemeinsam entwickeln wir eine Strategie, die zu Ihnen passt und Sie befähigt, langfristig Verantwortung für Ihr Wohlbefinden zu übernehmen.",
    price: "Coaching Paket (4x60 Min): 280€",
    image: "https://placehold.co/800x600.png",
    imageHint: "healthy lifestyle"
  }
];
