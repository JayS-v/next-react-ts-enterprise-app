import { Container } from 'components';
import { useTranslatedData } from 'hooks';
import { content, contentDE } from './consts';
import styles from './Achievements.module.scss';

function Achievements() {
  const data = useTranslatedData(content, contentDE);

  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.wrapper}>
          {data.map(({ id, title, description, amount }) => (
            <div className={styles.item} key={id}>
              <p className={styles.amount}>{amount}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Achievements;
