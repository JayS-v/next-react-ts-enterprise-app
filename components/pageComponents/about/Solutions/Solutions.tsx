import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import TextTruncate from 'react-text-truncate';
import { Container } from 'components';
import { ICaseGalleryItem } from 'types';
import variables from 'styles/variables.module.scss';
import styles from './Solutions.module.scss';

interface Props {
  cases: ICaseGalleryItem[];
}

function Solutions({ cases }: Props) {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>{t('about:solutions_title')}</h1>

        <div className={styles.wrapper}>
          {cases.map(({ id, title, thumbnail, slug, summary, noindex }) => (
            <div key={id} className={styles.column}>
              <div className={styles.card}>
                <div className={styles.imgWrapper}>
                  <Image
                    className={styles.image}
                    src={thumbnail}
                    alt={title}
                    fill
                    sizes={`(max-width: ${variables.widthSm}) 100vw, (max-width: ${variables.widthMd}) 50vw, 30vw`}
                  />
                </div>

                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.paragraph}>
                  <TextTruncate
                    line={3}
                    element="span"
                    truncateText={'...'}
                    text={summary?.description}
                  />
                </p>

                <div className={styles.bottom}>
                  <Link
                    className={styles.link}
                    href={`/portfolio/${slug}`}
                    rel={noindex ? 'nofollow' : undefined}>
                    {t('about:solutions_card_link')}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.button}>
          <Link href="/portfolio">{t('about:solutions_link')}</Link>
        </div>
      </Container>
    </section>
  );
}

export default Solutions;
