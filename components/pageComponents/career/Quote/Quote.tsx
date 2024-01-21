import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './Quote.module.scss';
import image from 'public/images/career/marina-koltmann-quote-5d9957.jpg';

export const Quote = () => {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        <div className={styles.image_container}>
          <Image src={image} alt="Team Lead" className={styles.image} />
        </div>
        <div className={styles.content}>
          <h3>{t('career:quote')}</h3>
          <h4 className={styles.author}>
            {'Alex S, Team Lead Talent Acquisition'}
          </h4>
        </div>
      </div>
    </section>
  );
};
