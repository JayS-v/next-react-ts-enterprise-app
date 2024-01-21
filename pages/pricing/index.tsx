import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { PageHeading, PricingGallery } from 'components';
import variables from 'styles/variables.module.scss';

function Pricing(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const pageTitle = `${t('pricing:SEO_title')} | Monitaet`;
  const pageDescription = `${t('pricing:SEO_description')}`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" key="description" content={pageDescription} />
      </Head>

      <PageHeading
        title={t('pricing:heading_title')}
        description={t('pricing:heading_subtitle')}
        bgColor={variables.colorBgHighlighted}
        textColor={variables.colorDark}
      />

      <PricingGallery />
    </>
  );
}

export default Pricing;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['pricing'])),
    },
  };
};
