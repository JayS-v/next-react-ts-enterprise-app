import { useTranslation } from 'next-i18next';
import { BasicCard, Container, IndustryList } from 'components';
import { ICaseGalleryItem } from 'types';
import styles from './Portfolio.module.scss';

interface Props {
  cases: ICaseGalleryItem[];
}

function Portfolio({ cases }: Props) {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.badge}>{t('home:portfolio_badge')}</div>

        <h2 className={styles.title}>{t('home:portfolio_title_2')}</h2>
        <p className={styles.description}>{t('home:portfolio_subtitle')}</p>

        <IndustryList
          style={{ fontSize: '1rem' }}
          title={t('home:portfolio_industries_title')}
        />

        <div className={styles.portfolio}>
          {cases.map(
            ({ slug, thumbnail, title, id, noindex }: ICaseGalleryItem) => (
              <div className={styles.column} key={id}>
                <BasicCard
                  url={`/portfolio/${slug}`}
                  title={title}
                  thumbnail={thumbnail}
                  invitation={t('home:portfolio_link')}
                  nofollow={noindex}
                />
              </div>
            )
          )}
        </div>
      </Container>
    </section>
  );
}

export default Portfolio;
