import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import { useTranslatedData } from 'hooks';
import { content, contentDE } from './consts';
import styles from './Description.module.scss';

function Description() {
  const { t } = useTranslation();
  const data = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>{t('home:description_title')}</h1>

        <div className={styles.wrapper}>
          {data.map(({ description, title, id, icon }) => (
            <div key={id} className={styles.column}>
              <div className={styles.card}>
                <div className={styles.icon}>{icon}</div>
                <h4 className={styles.cardTitle}>{title}</h4>
                <p className={styles.text}>{description}</p>
                <Link className={styles.link} href="/about">
                  {t('home:description_link')}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Description;
