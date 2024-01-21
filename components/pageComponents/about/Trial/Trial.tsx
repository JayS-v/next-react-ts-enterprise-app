import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import variables from 'styles/variables.module.scss';
import styles from './Trial.module.scss';

function Trial() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <svg
        style={{ marginBottom: '-5px' }}
        viewBox="0 0 500 30"
        preserveAspectRatio="none">
        <path
          d="M-1.56,24.09 C98.43,-5.89 132.19,1.11 504.68,28.09 L500.00,150.00 L0.00,150.00 Z"
          fill={variables.colorBgHighlighted}
        />
      </svg>
      <div style={{ backgroundColor: variables.colorBgHighlighted }}>
        <Container>
          <div className={styles.wrapper}>
            <h1 className={styles.title}>{t('about:trial_title')}</h1>

            <p className={styles.text}>{t('about:trial_subtitle')}</p>
            <div className={styles.button}>
              <Link href="/contacts">{t('about:trial_link')}</Link>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Trial;
