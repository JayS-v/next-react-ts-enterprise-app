import Link from 'next/link';
import { useRouter } from 'next/router';
import { Container } from 'components';
import { useTranslatedData } from 'hooks';
import { routes, routesDE, strings } from './consts';
import styles from './Footer.module.scss';

function Footer() {
  const { locale } = useRouter();
  const data = useTranslatedData(routes, routesDE);
  const navStr = locale
    ? strings[locale]['navigate']
    : strings['en']['navigate'];
  const copyStr = locale
    ? strings[locale]['copyright']
    : strings['en']['copyright'];

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.wrapper}>
          <div>
            <p className={styles.title}>{navStr}</p>
            <nav>
              {data.map(({ path, name, id }) => (
                <Link key={id} href={path} className={styles.route}>
                  {name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className={styles.version}>
              v{process.env.APP_VERSION}.{process.env.NEXT_PUBLIC_COMMIT_HASH}.
              {process.env.BUILD_DATE}
            </p>

            <p className={styles.copyright}>
              © 2020 - {new Date().getFullYear()} {copyStr}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
