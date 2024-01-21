import { NextApiRequest, NextApiResponse } from 'next';
import crypto from 'crypto';

const mockData = [
  {
    id: crypto.randomUUID(),
    title: '(Junior) React Software Developer',
    department: 'Development',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: '(Junior) Java Backend Developer',
    department: 'Development',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: '(Junior) Automation QA',
    department: 'IT Infrastructure',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: '(Junior) Manual QA',
    department: 'IT Infrastructure',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Account Executive, Americas',
    department: 'Sales',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Account Executive (m/f/d) Central Europe',
    department: 'EMEA Direct Sales',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Assistant to the Executive (Chief of Staff) (m/f/d)',
    department: 'C-Level',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'B2B Marketing Manager (m/f/d)',
    department: 'Marketing',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Customer Service Representative (m/f/d)',
    department: 'Customer Experience',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'HR Administrator (m/f/d)',
    department: 'HR',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'HR Business Partner (m/f/d)',
    department: 'HR',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Intern / Working Student HR (m/f/d)',
    department: 'HR',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Junior Customer Success Manager (m/f/d) - Germany',
    department: 'Customer Success',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Junior Customer Success Manager (m/f/d) - Spain',
    department: 'Customer Success',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Junior Database Administrator (m/f/d)',
    department: 'IT Operations',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: '(Junior) NetSuite Software Engineer (m/f/d)',
    department: 'Business Systems',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Key Account Executive (m/f/d) Southern Europe',
    department: 'EMEA Direct Sales',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Integration Engineer (m/f/d)',
    department: 'Research',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Software Developer (m/f/d)',
    department: 'Development',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Lead Software Developer (m/f/d)',
    department: 'Development',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Market Development (m/f/d) EMEA',
    department: 'EMEA Direct Sales',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Operations Engineer / Linux Administrator (m/f/d))',
    department: 'IT Operations',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Product Manager (m/f/d)',
    department: 'Product Management',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Project Manager (m/f/d)',
    department: 'Product Management',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Risk and Compliance Manager (m/f/d)',
    department: 'IT Infrastructure',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Salesforce Administrator (m/f/d)',
    department: 'Business Systems',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Salesforce Software Engineer (m/f/d)',
    department: 'Business Systems',
    type: 'Full-time',
  },
  {
    id: crypto.randomUUID(),
    title: 'Senior Software Engineer (m/f/d)',
    department: 'Business Systems',
    type: 'Full-time',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    return res.status(200).json({ mockData });
  } catch (err) {
    return res.status(500).json({ message: 'Error:', err });
  }
}
