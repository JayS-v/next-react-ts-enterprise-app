import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import image from 'public/images/about/about-1.jpg';
import variables from 'styles/variables.module.scss';
import styles from './Hero.module.scss';

function Hero() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.col}>
            <Image
              src={image}
              alt="Man working"
              className={styles.image}
              priority
              sizes={`(max-width: ${variables.widthMd}) 95vw, 47vw`}
            />
          </div>

          <div className={styles.col}>
            <span className={styles.badge}>{t('about:hero_badge')}</span>
            <h2 className={styles.title}>{t('about:hero_title')}</h2>
            <p className={styles.paragraph}>{t('about:hero_p_1')}</p>
            <p className={styles.paragraph}>{t('about:hero_p_2')}</p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Hero;
