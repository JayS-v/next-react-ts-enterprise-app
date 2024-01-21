import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from 'components/ui';
import { dataEn, dataDe } from 'lib/consts';
import styles from './Notification.module.scss';

function Notification() {
  const { locale } = useRouter();

  const linkText = locale === 'de' ? dataDe.imprintData : dataEn.imprintData;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.link} href="/imprint">
            {linkText}
          </Link>
        </div>
      </Container>
    </section>
  );
}

export default Notification;
