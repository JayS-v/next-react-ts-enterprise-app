import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import { ICaseSummary } from 'types';
import styles from './DetailsSummary.module.scss';

interface Props {
  summary: ICaseSummary;
}

function DetailsSummary({ summary }: Props) {
  const { t } = useTranslation();

  const { description, goal, result, industry } = summary;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <div className={styles.left}>
            <p className={styles.description}>{description}</p>

            {goal && (
              <>
                <h3 className={styles.title}>
                  {t('solution:details_title_goal')}
                </h3>
                <p>{goal}</p>
              </>
            )}

            {result && (
              <>
                <h3 className={styles.title}>
                  {t('solution:details_title_result')}
                </h3>
                <p>{result}</p>
              </>
            )}
          </div>

          <div className={styles.right}>
            <table>
              <tbody>
                <tr>
                  <th>{t('solution:details_title_industry')}</th>
                  <td>{industry}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default DetailsSummary;
