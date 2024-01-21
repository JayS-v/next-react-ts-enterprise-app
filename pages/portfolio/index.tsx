import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { BasicCard, Container, IndustryList, PageHeading } from 'components';
import { ICaseGalleryItem } from 'types';
import { getCaseGalleryList } from 'lib/cases';
import styles from 'styles/pages/Cases.module.scss';

function Cases({ cases }: InferGetStaticPropsType<typeof getStaticProps>) {
  const { t } = useTranslation();
  const pageTitle = `${t('solutions:SEO_title')} | Monitaet`;
  const pageDescription = `${t('solutions:SEO_description')}`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" key="description" content={pageDescription} />
      </Head>

      <PageHeading
        title={t('solutions:heading_title')}
        description={t('solutions:heading_subtitle')}
      />

      <section>
        <Container>
          <IndustryList title={t('solutions:industries_title')} />

          {cases.length ? (
            <div className={styles.portfolio}>
              {cases.map(
                (
                  { slug, thumbnail, title, id, noindex }: ICaseGalleryItem,
                  index: number
                ) => (
                  <div className={styles.column} key={id}>
                    <BasicCard
                      url={`/portfolio/${slug}`}
                      title={title}
                      thumbnail={thumbnail}
                      invitation={t('solutions:card_link')}
                      imgPriority={index === 0}
                      nofollow={noindex}
                    />
                  </div>
                )
              )}
            </div>
          ) : (
            <div style={{ height: '60px' }} />
          )}
        </Container>
      </section>
    </>
  );
}

export default Cases;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const cases: ICaseGalleryItem[] = getCaseGalleryList(locale);

  if (cases.length) {
    return {
      props: {
        cases,
        ...(await serverSideTranslations(locale as string, ['solutions'])),
      },
    };
  } else {
    return {
      props: {
        cases: [],
        ...(await serverSideTranslations(locale as string, ['solutions'])),
      },
    };
  }
};
