import { ReactNode } from 'react';
import { DeveloperIcon, FixedIcon, TeamIcon } from 'components/icons';

export interface IContent {
  id: number;
  badge: string;
  icon: ReactNode;
  title: string;
  description: string[];
}

export const content = [
  {
    id: 1,
    badge: '',
    icon: <TeamIcon />,
    title: 'Dedicated team',
    description: [
      'Our typical dedicated team consists of a Project Manager, a Tech Lead, a Manual QA and Developers. It can be seamlessly scaled at your request as we have at our disposal a pool of talented specialists.',
      'We have successfully fine-tuned recruiting and onboarding procedures. As a result, we form and scale up teams faster and easier.',
      'Our HR department will care about your dedicated team members during the whole project period. They will enjoy a friendly working atmosphere with regular one-on-one meetings and team buildings.',
      'Our experience has shown that the project delivery can be accelerated by 40-50% if a team is working under the charge of a tech lead.',
      'We have to prepare not more than one-page annex to scale up the team or change the terms in the contract.',
      'You know the exact price per month or even per whole project. We commonly use a monthly billing approach.',
    ],
  },
  {
    id: 2,
    badge: 'Most popular',
    icon: <DeveloperIcon />,
    title: 'Software engineer',
    description: [
      'You can forget about additional expenses on interviewing.',
      'We have a pool of candidates that have successfully passed 3 stages of the interview. We tested their hard and soft skills as well as checked their ability to communicate in English.',
      'You are welcome to choose the IT professionals with the technological stack you need.',
      'You shouldn’t worry about onboarding as we are handling it.',
      'If such a need arises, we are ready to expand the team without excessive bureaucracy.',
      'You know the exact price per month. We commonly use a monthly billing approach.',
    ],
  },
  {
    id: 3,
    badge: '',
    icon: <FixedIcon />,
    title: 'Fixed price',
    description: [
      'We constantly improve our tech level to deliver the best customer experience on fixed price. The Holacracy management system helps us to secure smooth and detailed implementation.',
      'You know exact features of the product so it helps you to build marketing strategy from the beginning of the development process.',
      'You get a fixed price and fixed time per the fixed scope of work.',
      'Single point of contact.',
      'You delegate project management and product quality control to us.',
      'You have access to our tech base and market expertise.',
    ],
  },
];

export const contentDE = [
  {
    id: 1,
    badge: '',
    icon: <TeamIcon />,
    title: 'Engagiertes Team',
    description: [
      'Unser typisches Team besteht aus einem Projektmanager, einem technischen Leiter, einem manuellen QA und Entwicklern. Es kann auf Ihren Wunsch hin nahtlos skaliert werden, da wir über einen Pool von talentierten Spezialisten verfügen.',

      'Wir haben die Verfahren für die Einstellung und das Onboarding erfolgreich verfeinert. Dadurch können wir Teams schneller und einfacher bilden und vergrößern.',

      'Unsere Personalabteilung kümmert sich während der gesamten Projektlaufzeit um Ihre engagierten Teammitglieder. Sie werden eine freundliche Arbeitsatmosphäre mit regelmäßigen Einzelgesprächen und Teambuildings genießen.',

      'Unsere Erfahrung hat gezeigt, dass die Projektabwicklung um 40-50% beschleunigt werden kann, wenn ein Team unter der Leitung eines technischen Leiters arbeitet.',

      'Wir müssen nicht mehr als eine Seite Anhang vorbereiten, um das Team zu vergrößern oder die Bedingungen im Vertrag zu ändern.',

      'Sie kennen den genauen Preis pro Monat oder sogar für das gesamte Projekt. Wir verwenden in der Regel eine monatliche Abrechnung.',
    ],
  },
  {
    id: 2,
    badge: 'Am beliebtesten',
    icon: <DeveloperIcon />,
    title: 'Software-Ingenieur',
    description: [
      'Zusätzliche Ausgaben für Vorstellungsgespräche können Sie vergessen.',

      'Wir haben einen Pool von Bewerbern, die 3 Stufen des Vorstellungsgesprächs erfolgreich durchlaufen haben. Wir haben ihre Hard- und Soft Skills getestet und ihre Kommunikationsfähigkeit in Englisch überprüft.',

      'Sie können die IT-Fachleute mit dem von Ihnen benötigten technologischen Know-how auswählen.',

      'Sie brauchen sich keine Sorgen um das Onboarding zu machen, denn das übernehmen wir.',

      'Sollte sich ein solcher Bedarf ergeben, sind wir bereit, das Team unbürokratisch zu erweitern.',

      'Sie kennen den genauen Preis pro Monat. Wir verwenden in der Regel eine monatliche Abrechnung.',
    ],
  },
  {
    id: 3,
    badge: '',
    icon: <FixedIcon />,
    title: 'Festpreis',
    description: [
      'Wir verbessern ständig unser technisches Niveau, um die beste Kundenerfahrung zum Festpreis zu liefern. Das Holacracy-Managementsystem hilft uns, eine reibungslose und detaillierte Umsetzung zu gewährleisten.',

      'Sie kennen die genauen Merkmale des Produkts und können so schon zu Beginn des Entwicklungsprozesses eine Marketingstrategie entwickeln.',

      'Sie erhalten einen Festpreis und eine feste Zeit für den festgelegten Arbeitsumfang.',

      'Eine einzige Anlaufstelle.',

      'Sie delegieren das Projektmanagement und die Kontrolle der Produktqualität an uns.',

      'Sie haben Zugang zu unserer technischen Basis und Marktkenntnis.',
    ],
  },
];
