import { useState, useEffect } from 'react';

import { getPositions } from 'lib/apiRequests';
import { IPosition } from './interfaces';

export const useApiData = () => {
  const [positions, setPositions] = useState<IPosition[] | null>(null);
  const [departments, setDepartments] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { mockData } = (await getPositions()) as { mockData: IPosition[] };

      if (mockData?.length) {
        const departments = new Set(
          mockData.map((position: IPosition) => position.department)
        );
        setPositions(mockData);
        setDepartments(['All deparments', ...Array.from(departments)]);
      }
    };

    fetchData();
  }, []);

  return { positions, departments };
};
