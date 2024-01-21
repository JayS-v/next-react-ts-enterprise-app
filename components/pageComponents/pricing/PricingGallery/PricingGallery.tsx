import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container, HorizontalDivider } from 'components';
import { CheckCircledIcon } from 'components/icons';
import { useTranslatedData } from 'hooks';
import { content, contentDE, IContent } from './consts';
import styles from './PricingGallery.module.scss';

function PricingGallery() {
  const { t } = useTranslation();
  const data: IContent[] = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {data.map(({ id, badge, description, title, icon }) => (
            <div key={id} className={styles.column}>
              <div className={styles.card}>
                {badge && <div className={styles.badge}>{badge}</div>}
                <div className={styles.mainIcon}>{icon}</div>
                <h3 className={styles.cardTitle}>{title}</h3>

                <div className={styles.description}>
                  {description.map((item, index) => (
                    <div className={styles.descriptionItem} key={index}>
                      <div className={styles.paragraph}>
                        <div className={styles.textIcon}>
                          <CheckCircledIcon />
                        </div>
                        <p className={styles.text}>{item}</p>
                      </div>

                      {!(index === description.length - 1) && (
                        <HorizontalDivider />
                      )}
                    </div>
                  ))}
                </div>

                <div className={styles.button}>
                  <Link href="/contacts">{t('pricing:card_link')}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className={styles.invitation}>
          {t('pricing:bottom_text')}
          <Link className={styles.link} href="/contacts">
            {t('pricing:bottom_link')}
          </Link>
        </p>
      </Container>
    </section>
  );
}

export default PricingGallery;
