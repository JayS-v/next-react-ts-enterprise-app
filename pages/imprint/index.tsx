import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ImprintContent } from 'components';

function Imprint(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const pageTitle = `${t('imprint:SEO_title')} | Monitaet`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
      </Head>

      <ImprintContent />
    </>
  );
}

export default Imprint;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['imprint'])),
    },
  };
};
