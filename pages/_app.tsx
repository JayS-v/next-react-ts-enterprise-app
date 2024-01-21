import 'styles/globals.scss';
import 'styles/swiper.scss';
import { SessionProvider } from 'next-auth/react';
import type {AppProps} from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';
import { gothic_A1_font } from 'lib/fonts';
import { Layout } from 'components';

function App({ Component, pageProps }: AppProps) {
    return (
        <SessionProvider session={pageProps.session}>
          <>
              <Head>
                  <title key="title">
                      Monitaet | Enterprise Level Web and Mobile Apps
                  </title>
                  <meta
                      name="description"
                      key="description"
                      content="App development: Web, Mobile, Desktop. No stress, only profit and making money for your business"
                  />

                  <meta property="og:type" content="website" />
                  <meta property="og:url" content="https://www.monitaet.com/" />
                  <meta
                      property="og:image"
                      content={`https://www.monitaet.com/images/homepage/hero-bg-blue.jpg`}
                  />

                  <link rel="icon" href="/favicon.ico" />
              </Head>

              <style jsx global>{`
                html {
                  font-family: ${gothic_A1_font.style.fontFamily};
                }
              `}</style>

              <Layout>
                  <Component {...pageProps} />
              </Layout>
          </>
        </SessionProvider>
  );
}
export default appWithTranslation(App);
