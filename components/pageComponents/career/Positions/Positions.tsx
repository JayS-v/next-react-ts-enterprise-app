import { Container } from 'components/ui';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import { Filter } from 'components/ui';
import { TableRowProps, useApiData } from '.';
import styles from './Positions.module.scss';

const mockTypes = ['All job types', 'Full-time', 'Part-time'];

export const Positions = () => {
  const { t } = useTranslation();
  const { positions, departments } = useApiData();

  const provideDepartmentParam = (param: string) => {
    console.log(param);
  };

  const provideTypeParam = (param: string) => {
    console.log(param);
  };

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.h1}>{t('career:positions')}</h1>
        <div className={styles.filters_container}>
          <Filter
            params={departments || ['No Open Positions']}
            provideParam={provideDepartmentParam}
          />
          <Filter params={mockTypes} provideParam={provideTypeParam} />
        </div>
        <table width="100%" className={styles.table}>
          <thead className={styles.row_head}>
            <tr>
              <th className={styles.thead_title}>job title</th>
              <th className={styles.thead_department}>department</th>
              <th>job type</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {positions &&
              positions.map((position) => (
                <TableRow key={position.id} position={position} />
              ))}
          </tbody>
        </table>
      </Container>
    </section>
  );
};

const TableRow: React.FC<TableRowProps> = ({ position }) => {
  const { id, title, department, type } = position;

  return (
    <tr className={styles.row_data}>
      <td className={styles.column_title}>
        <Link href={`/career?position=${id}`}>{title}</Link>
      </td>
      <td className={styles.column_department}>{department}</td>
      <td className={styles.column_type}>{type}</td>
    </tr>
  );
};
