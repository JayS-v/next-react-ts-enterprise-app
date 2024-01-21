import { ReactNode } from 'react';
import { Footer, Header, Notification } from 'components';

interface Props {
  children?: ReactNode;
}

function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>
        <Notification />
        {children}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
