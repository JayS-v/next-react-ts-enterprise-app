import { useTranslation } from 'next-i18next';
import { Container } from 'components/ui';
import styles from './Intro.module.scss';

export function Intro() {
  const { t } = useTranslation();

  return (
    <section>
      <Container>
        <div className={styles.content}>
          <p>{t('career:intro_p_1')}</p>
          <p>{t('career:intro_p_2')}</p>
          <p
            className={styles.with_highlight}
            dangerouslySetInnerHTML={{ __html: t('career:intro_p_3') }}></p>
        </div>
      </Container>
    </section>
  );
}
