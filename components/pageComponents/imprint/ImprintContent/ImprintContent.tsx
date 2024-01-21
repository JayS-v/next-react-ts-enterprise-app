import { useRouter } from 'next/router';
import { Container } from 'components';
import ContentDE from './ContentDE';
import Content from './Content';
import styles from './ImprintContent.module.scss';

function ImprintContent() {
  const { locale } = useRouter();

  return (
    <section className={styles.section}>
      <Container>{locale === 'de' ? <ContentDE /> : <Content />}</Container>
    </section>
  );
}

export default ImprintContent;
