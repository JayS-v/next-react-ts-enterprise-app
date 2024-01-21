import { useTranslation } from 'next-i18next';
import { Container, HorizontalDivider } from 'components';
import { PuzzleIcon } from 'components/icons';
import styles from './Features.module.scss';

interface Props {
  features?: string[];
}

function Features({ features }: Props) {
  const { t } = useTranslation();

  return (
    <>
      {features ? (
        <>
          <section className={styles.section}>
            <Container>
              <h2 className={styles.title}>{t('solution:features_title')}</h2>
              <div className={styles.wrapper}>
                {features.map((item, index) => (
                  <div key={index} className={styles.item}>
                    <div className={styles.icon}>
                      <PuzzleIcon />
                    </div>
                    <p className={styles.text}>{item}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
          <HorizontalDivider />
        </>
      ) : null}
    </>
  );
}

export default Features;
