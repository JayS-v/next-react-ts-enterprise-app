import Image from 'next/image';
import Link from 'next/link';
import { Container, HorizontalDivider } from 'components';
import image from 'public/images/contacts/contacts-1.png';
import styles from './SchedulingPageInvitation.module.scss';
import { useTranslation } from 'next-i18next';

function SchedulingPageInvitation() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            <Image
              src={image}
              alt="Schedule online meeting"
              className={styles.image}
              priority
              width={450}
            />
          </div>

          <div className={styles.col}>
            <h2 className={styles.title}>{t('contacts:scheduling_title')}</h2>
            <p className={styles.paragraph}>{t('contacts:scheduling_p_1')}</p>
            <p className={styles.paragraph}>{t('contacts:scheduling_p_2')}</p>

            <div className={styles.button}>
              <Link
                href="https://calendly.com/rtuesday2222/15-minute-chat"
                target="_blank">
                {t('contacts:scheduling_link')} →
              </Link>{' '}
            </div>
          </div>
        </div>

        <HorizontalDivider className={styles.divider} />
      </Container>
    </section>
  );
}

export default SchedulingPageInvitation;
