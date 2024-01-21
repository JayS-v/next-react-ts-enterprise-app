import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import styles from './Announcement.module.scss';

function Announcement() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <p className={styles.title}>{t('solution:announcement_title')}</p>
          <Link className={styles.link} href="/contacts">
            {t('solution:announcement_link')}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Announcement;
