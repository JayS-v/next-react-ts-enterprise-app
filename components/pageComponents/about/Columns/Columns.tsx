import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import { useTranslatedData } from '../../../../hooks';
import { content, contentDE, IContent } from './consts';
import styles from './Columns.module.scss';

function Columns() {
  const { t } = useTranslation();
  const data: IContent[] = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <Container>
        <h1 className={styles.title}>{t('about:columns_title')}</h1>

        <div className={styles.wrapper}>
          {data.map(({ description, title, id, icon }) => (
            <div key={id} className={styles.column}>
              <div className={styles.card}>
                <div className={styles.icon}>{icon}</div>
                <div className={styles.info}>
                  <h4 className={styles.cardTitle}>{title}</h4>

                  {description.map((item, index) => (
                    <p key={index} className={styles.paragraph}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Columns;
