import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import { useTranslatedData } from 'hooks';
import { content, contentDE } from './consts';
import styles from './Summary.module.scss';

function Summary() {
  const { t } = useTranslation();
  const data = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t('home:summary_title')}</h2>

        <div className={styles.wrapper}>
          {data.map(({ id, icon, title }) => (
            <div className={styles.item} key={id}>
              <div className={styles.icon}>{icon}</div>
              <p className={styles.text}>{title}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Summary;
