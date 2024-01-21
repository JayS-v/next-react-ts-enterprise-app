import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import {
  Achievements,
  Description,
  HeroHomepage,
  Portfolio,
  Summary,
  Values,
  Workflow,
} from 'components';
import { ICaseGalleryItem } from 'types';
import { getCaseGalleryList } from 'lib/cases';
import styles from 'styles/pages/Home.module.scss';

const DynamicReviewSection = dynamic(
  () => import('components/pageComponents/homepage/Reviews/Reviews'),
  { ssr: false }
);

function Home({ cases }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const pageTitle = `Monitaet | ${t('home:SEO_title')}`;
  const pageDescription = `${t('home:SEO_description')}`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" key="description" content={pageDescription} />
      </Head>

      <HeroHomepage />

      <div className={styles.overlay}>
        <Summary />
        <Description />
        <Achievements />

        {cases.length ? (
          <Portfolio cases={cases} />
        ) : (
          <div style={{ height: '60px' }} />
        )}

        <Workflow />
        <Values />
        <DynamicReviewSection />
      </div>
    </>
  );
}

export default Home;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const cases: ICaseGalleryItem[] = getCaseGalleryList(locale).slice(0, 6);

  if (cases.length) {
    return {
      props: {
        cases,
        ...(await serverSideTranslations(locale as string, ['home'])),
      },
    };
  } else {
    return {
      props: {
        cases: [],
        ...(await serverSideTranslations(locale as string, ['home'])),
      },
    };
  }
};
