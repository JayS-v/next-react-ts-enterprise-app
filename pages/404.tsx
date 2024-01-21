import { Container } from 'components';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import styles from 'styles/pages/Page404.module.scss';

export default function Page404() {
  const router = useRouter();

  useEffect(() => {
    router.push('/', undefined, { shallow: true });
  }, [router]);

  return (
    <Container>
      <div className={styles.pageBox}>
        <p className={styles.title}>404 | The page was not found </p>
        <p className={styles.title}>Redirecting to homepage...</p>
      </div>
    </Container>
  );
}
