import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { ICaseDetailsItem, ICaseGalleryItem } from 'types';
import {
  Announcement,
  DetailsSummary,
  Features,
  HeroCaseStudy,
  ImageCarousel,
  TechStack,
} from 'components';
import { getCaseDetailsBySlug, getCases } from 'lib/cases';
import styles from 'styles/pages/CaseDetails.module.scss';

function CaseDetails({
  caseItem,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, summary, tech_stack, images, features }: ICaseDetailsItem =
    caseItem;

  const pageTitle = `${title} | Monitaet`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
      </Head>

      <HeroCaseStudy title={title} imageUrl={images[0]} />

      <div className={styles.overlay}>
        <DetailsSummary summary={summary} />
        <ImageCarousel slides={images} />
        <Features features={features} />
        <TechStack techStack={tech_stack} />
        <Announcement />
      </div>
    </>
  );
}

export default CaseDetails;

export const getStaticPaths: GetStaticPaths = () => {
  const casesEn = getCases('en');
  const casesDe = getCases('de');

  const pathEn = casesEn.map(({ slug }: ICaseGalleryItem) => ({
    params: { slug: slug },
    locale: 'en',
  }));
  const pathDe = casesDe.map(({ slug }: ICaseGalleryItem) => ({
    params: { slug: slug },
    locale: 'de',
  }));

  const paths = pathEn.concat(pathDe);

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({
  params,
  locale,
}: GetStaticPropsContext) => {
  const slug = params?.slug?.toString();

  if (!slug) throw Error('Slug missing');

  const caseItem = JSON.parse(
    JSON.stringify(getCaseDetailsBySlug(slug, locale))
  );
  return {
    props: {
      caseItem,
      ...(await serverSideTranslations(locale as string, ['solution'])),
    },
  };
};
