import { SessionContextValue, useSession } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const UnauthorizedWrapper = ({ children }: Props) => {
  const { status }: SessionContextValue = useSession();

  if (status === 'authenticated') return;

  return <>{children}</>;
};

export default UnauthorizedWrapper;
