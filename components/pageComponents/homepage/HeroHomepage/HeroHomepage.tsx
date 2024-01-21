import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { useScrollYTransform } from 'hooks';
import background from 'public/images/homepage/hero-bg-blue.jpg';
import styles from './HeroHomepage.module.scss';

function HeroHomepage() {
  const { t } = useTranslation();
  const translateYValue = useScrollYTransform();

  return (
    <section className={styles.wrapper}>
      <h2 className={styles.title}>{t('home:hero_title')}</h2>
      <p className={styles.text}>{t('home:hero_subtitle')}</p>

      <div
        className={styles.motion}
        style={{ transform: `translateY(${translateYValue}px)` }}>
        <Image
          className={styles.image}
          src={background}
          alt="City view"
          priority
          sizes="100vw"
        />
      </div>
    </section>
  );
}

export default HeroHomepage;
