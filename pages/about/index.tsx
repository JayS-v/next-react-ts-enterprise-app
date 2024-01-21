import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { ICaseGalleryItem } from 'types';
import { getCaseGalleryList } from 'lib/cases';
import { Columns, Gallery, Heading, Hero, Solutions, Trial } from 'components';

function About({ cases }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const pageTitle = `${t('about:SEO_title')} | Monitaet`;
  const pageDescription = `${t('about:SEO_description')}`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" key="description" content={pageDescription} />
      </Head>

      <Heading />
      <Hero />
      <Gallery />
      <Columns />

      {cases.length ? <Solutions cases={cases} /> : null}
      <Trial />
    </>
  );
}

export default About;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const cases: ICaseGalleryItem[] = getCaseGalleryList(locale).slice(0, 3);

  if (cases.length) {
    return {
      props: {
        cases,
        ...(await serverSideTranslations(locale as string, ['about'])),
      },
    };
  } else {
    return {
      props: {
        cases: [],
        ...(await serverSideTranslations(locale as string, ['about'])),
      },
    };
  }
};
