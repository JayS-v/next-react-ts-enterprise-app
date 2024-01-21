import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { Container, HorizontalDivider } from 'components';
import { CheckIcon } from 'components/icons';
import { useMediaQuery, useTranslatedData } from 'hooks';
import valuesImg from 'public/images/homepage/values.png';
import { content, contentDE } from './consts';
import variables from 'styles/variables.module.scss';
import styles from './Values.module.scss';

function Values() {
  const { t } = useTranslation();
  const data = useTranslatedData(content, contentDE);
  const widthMdOrLess = useMediaQuery(`(max-width: ${variables.widthMd})`);

  return (
    <>
      <section className={styles.section}>
        <Container>
          {widthMdOrLess && (
            <h2 className={styles.title}>{t('home:values_title')}</h2>
          )}

          <div className={styles.wrapper}>
            <div className={styles.imgWrapper}>
              <Image
                className={styles.image}
                src={valuesImg}
                alt="company values"
              />
            </div>

            <div className={styles.content}>
              {!widthMdOrLess && (
                <h2 className={styles.title}>{t('home:values_title')}</h2>
              )}

              <div className={styles.list}>
                {data.map((item, index) => (
                  <div className={styles.listItem} key={index}>
                    <CheckIcon className={styles.icon} />
                    <span className={styles.text}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <HorizontalDivider />
      </Container>
    </>
  );
}

export default Values;
