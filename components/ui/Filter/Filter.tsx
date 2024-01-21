import styles from './Filter.module.scss';

interface Props {
  params: string[];
  provideParam: (param: string) => void;
}

export const Filter: React.FC<Props> = ({ params, provideParam }) => {
  const handleParamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedParam = event.target.value;
    provideParam(selectedParam);
  };

  return (
    <select onChange={handleParamChange} className={styles.select}>
      {params.map((param) => (
        <option key={param}>{param}</option>
      ))}
    </select>
  );
};
