import { IContactRequestBody } from 'types/IContactData';

export const sendContactData = async (data: IContactRequestBody) => {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error('Failed to send message');

  return res.json();
};

export const getPositions = async () => {
  try {
    const res = await fetch('/api/position-list');

    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading topics: ', error);
  }
};

interface IPosition {
  id: string;
  title: string;
  department: string;
  type: string;
}

export const getPositionContent = async () => {
  try {
    const res = await fetch('/api/position-content');

    if (!res.ok) {
      throw new Error('Failed to fetch topics');
    }

    return res.json();
  } catch (error) {
    console.log('Error loading topics: ', error);
  }
};
