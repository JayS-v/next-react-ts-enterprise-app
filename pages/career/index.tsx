import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Container, PageHeading } from 'components';
import {
  Intro,
  Quote,
  Positions,
  ApplyNow,
  MarkdownRenderer,
} from 'components/pageComponents/career';
import { getPositionContent } from 'lib/positions';
import variables from 'styles/variables.module.scss';
import {useSession} from "next-auth/react";
import {Button} from "../../components/ui";
import { handleKeycloackSignIn } from '../api/auth/[...nextauth]';

function Career(props: InferGetStaticPropsType<typeof getStaticProps>) {
  const { status } = useSession()

  const { positionContent } = props;
  const { fileContents } = positionContent;

  const router = useRouter();
  const { query } = router;
  const positionId = query.position as string;

  const { t } = useTranslation();
  const pageTitle = `${t('career:SEO_title')} | Monitaet`;
  const pageDescription = `${t('career:SEO_description')}`;

  const isAuthBtn = status === 'unauthenticated'
      ? <Button type={'button'} handle={() => handleKeycloackSignIn(router.asPath)}>{t('career:apply')}</Button>
      : <Button type={'button'}>{t('career:apply')}</Button>

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta name="description" key="description" content={pageDescription} />
      </Head>

      <PageHeading
        sectionStyles={{ display: 'flex', flexDirection: 'row' }}
        title={positionId ? 'PositionID:' : t('career:heading_title')}
        description={positionId || t('career:heading_subtitle')}
        bgColor={variables.colorBgHighlighted}
        textColor={variables.colorDark}>
        {positionId && <ApplyNow applyButtonText={t('career:apply')} />}
      </PageHeading>

      {positionId && (
        <Container>
          <MarkdownRenderer>{fileContents}</MarkdownRenderer>
          <ApplyNow applyButtonText={t('career:apply')} />
        </Container>
      )}

      {!positionId && (
        <>
          <Intro />
          <Quote />
          <Positions />
        </>
      )}
    </>
  );
}

export default Career;

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const positionContent = getPositionContent();
  return {
    props: {
      positionContent,
      ...(await serverSideTranslations(locale as string, [
        'career',
        'contacts',
      ])),
    },
  };
};
