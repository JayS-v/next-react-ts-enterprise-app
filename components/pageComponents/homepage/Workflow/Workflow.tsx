import { useTranslation } from 'next-i18next';
import { Container, CurvedBackground } from 'components';
import { NestedCircleIcon } from 'components/icons';
import { useTranslatedData } from 'hooks';
import { content, contentDE } from './consts';
import styles from './Workflow.module.scss';

function Workflow() {
  const { t } = useTranslation();
  const data = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <CurvedBackground>
        <Container>
          <h2 className={styles.title}>{t('home:workflow_title')}</h2>

          <div>
            {data.map(({ description, title, id, icon }) => (
              <div key={id} className={styles.step}>
                <NestedCircleIcon className={styles.circleIcon} />

                <div className={styles.icon}>{icon}</div>
                <div className={styles.description}>
                  <p className={styles.stepTitle}>{title}</p>
                  <p className={styles.stepText}>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </CurvedBackground>
    </section>
  );
}

export default Workflow;
