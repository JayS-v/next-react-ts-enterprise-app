import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
  ContactForm,
  ContactInfo,
  LocationMap,
  PageHeading,
  SchedulingPageInvitation,
} from 'components';
import variables from 'styles/variables.module.scss';

function Contacts(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const pageTitle = `${t('contacts:SEO_title')} | Monitaet`;
  const pageDescription = `${t('contacts:SEO_description')}`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" key="description" content={pageDescription} />
      </Head>

      <PageHeading
        title={t('contacts:heading_title')}
        description={t('contacts:heading_subtitle')}
        bgColor={variables.colorBgHighlighted}
        textColor={variables.colorDark}
      />

      <SchedulingPageInvitation />
      <ContactForm />
      <ContactInfo />
      <LocationMap />
    </>
  );
}

export default Contacts;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['contacts'])),
    },
  };
};
