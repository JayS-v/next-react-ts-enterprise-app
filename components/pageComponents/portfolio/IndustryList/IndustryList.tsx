import { CSSProperties } from 'react';
import { useTranslatedData } from 'hooks';
import { content, contentDE } from './consts';
import styles from './IndustryList.module.scss';

interface Props {
  title?: string | null;
  style?: CSSProperties;
}

function IndustryList({ style, title }: Props) {
  const data = useTranslatedData(content, contentDE);

  return (
    <div className={styles.wrapper}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {data.map((item, index) => (
        <span className={styles.item} style={{ ...style }} key={index}>
          {item}
        </span>
      ))}
    </div>
  );
}

export default IndustryList;
