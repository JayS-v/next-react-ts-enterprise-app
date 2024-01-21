import { ReactNode } from 'react';
import {
  AllsetIcon,
  EmpoweringIcon,
  WeareconsiderateIcon,
} from 'components/icons';

export interface IContent {
  id: number;
  icon: ReactNode;
  title: string;
  description: string[];
}

export const content = [
  {
    id: 1,
    icon: <WeareconsiderateIcon />,
    title: 'We are considerate',
    description: [
      'Monitaet helps your teams reach new levels of excellence. We will build a new team specifically designed to meet your needs. An Monitaet team takes over product engineering as a service.',
    ],
  },
  {
    id: 2,
    icon: <EmpoweringIcon />,
    title: 'Empowering',
    description: [
      'Our streamlined processes facilitate day-to-day performance without bureaucratic obstacles. Add experts as needed with ease. Our team includes top developers, designers, business analysts, DevOps, and QA automation engineers. ',
    ],
  },
  {
    id: 3,
    icon: <AllsetIcon />,
    title: 'All set',
    description: [
      'We keep a pool of candidates that have successfully passed three stages of the interview. They all are ready to start working on your project.',
    ],
  },
];

export const contentDE = [
  {
    id: 1,
    icon: <WeareconsiderateIcon />,
    title: 'Wir sind rücksichtsvoll',
    description: [
      'Monitaet hilft Ihren Teams, neue Spitzenleistungen zu erzielen. Wir stellen ein neues Team zusammen, das speziell auf Ihre Bedürfnisse zugeschnitten ist. Ein Monitaet-Team übernimmt die Produktentwicklung als Dienstleistung.',
    ],
  },
  {
    id: 2,
    icon: <EmpoweringIcon />,
    title: 'Befähigung',
    description: [
      'Unsere rationalisierten Prozesse erleichtern die tägliche Arbeit ohne bürokratische Hindernisse. Fügen Sie bei Bedarf mühelos Experten hinzu. Unser Team besteht aus Top-Entwicklern, Designern, Business-Analysten, DevOps- und QA-Automatisierungsingenieuren.',
    ],
  },
  {
    id: 3,
    icon: <AllsetIcon />,
    title: 'Alles eingestellt',
    description: [
      'Wir verfügen über einen Pool von Bewerbern, die drei Phasen des Vorstellungsgesprächs erfolgreich durchlaufen haben. Sie alle sind bereit, mit der Arbeit an Ihrem Projekt zu beginnen.',
    ],
  },
];
