import { ReactNode } from 'react';
import styles from './Container.module.scss';

interface Props {
  maxWidth?: string | number;
  children?: ReactNode;
}

function Container({ children, maxWidth }: Props) {
  return (
    <div className={styles.container} style={{ maxWidth }}>
      {children}
    </div>
  );
}

export default Container;
