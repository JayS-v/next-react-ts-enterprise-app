import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import { DotIcon } from 'components/icons';
import { useTranslatedData } from 'hooks';
import { content, contentDE, IContent } from './consts';
import variables from 'styles/variables.module.scss';
import styles from './Gallery.module.scss';

function Gallery() {
  const { t } = useTranslation();
  const data: IContent[] = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <Container>
        <h2 className={styles.title}>{t('about:gallery_title')}</h2>
        <span className={styles.badge}>{t('about:gallery_badge')}</span>

        <div className={styles.wrapper}>
          {data.map(({ id, paragraphs, image }) => (
            <div key={id} className={styles.item}>
              <div className={styles.column}>
                {paragraphs.map((item, index) => (
                  <p key={index} className={styles.paragraph}>
                    <DotIcon className={styles.icon} />

                    {item}
                  </p>
                ))}
              </div>

              <div className={styles.column}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={image}
                    alt="Team photo"
                    className={styles.image}
                    sizes={`(max-width: ${variables.widthMd}) 95vw, 47vw`}
                    fill
                  />{' '}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Gallery;
