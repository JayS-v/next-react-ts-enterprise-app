import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import styles from './Heading.module.scss';

function Heading() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h1 className={styles.title}>{t('about:heading_title')}</h1>

          <p className={styles.text}>{t('about:heading_subtitle')}</p>

          <div className={styles.button}>
            <Link href="/contacts">{t('about:heading_link')}</Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Heading;
