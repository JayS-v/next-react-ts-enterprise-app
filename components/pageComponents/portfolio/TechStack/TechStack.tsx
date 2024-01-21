import { useTranslation } from 'next-i18next';
import { Container } from 'components';
import { ICaseTechStack } from 'types';
import styles from './TechStack.module.scss';

interface Props {
  techStack: ICaseTechStack;
}

function TechStack({ techStack }: Props) {
  const { t } = useTranslation();
  const {
    api,
    db,
    backend,
    frontend,
    libraries_used,
    devops,
    qa,
    project_management,
  } = techStack;

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>{t('solution:tech_stack_title')}</h2>

          <table>
            <tbody>
              {backend && (
                <tr>
                  <th>Backend</th>
                  <td>{backend}</td>
                </tr>
              )}

              {frontend && (
                <tr>
                  <th>Frontend</th>
                  <td>{frontend}</td>
                </tr>
              )}

              {db && (
                <tr>
                  <th>DB</th>
                  <td>{db}</td>
                </tr>
              )}

              {api && (
                <tr>
                  <th>API integrations</th>
                  <td>{api}</td>
                </tr>
              )}

              {devops && (
                <tr>
                  <th>DevOps</th>
                  <td>{devops}</td>
                </tr>
              )}

              {libraries_used && (
                <tr>
                  <th>Libraries</th>
                  <td>{libraries_used}</td>
                </tr>
              )}

              {qa && (
                <tr>
                  <th>QA</th>
                  <td>{qa}</td>
                </tr>
              )}

              {project_management && (
                <tr>
                  <th>Project management</th>
                  <td>{project_management}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  );
}

export default TechStack;
