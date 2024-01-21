import { SessionContextValue, useSession } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const AuthorizedWrapper = ({ children }: Props) => {
  const { status }: SessionContextValue = useSession();

  if (status === 'unauthenticated') return;

  return <>{children}</>;
};

export default AuthorizedWrapper;
