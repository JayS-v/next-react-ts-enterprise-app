import styles from './Button.module.scss';
import Link from 'next/link';
import { HTMLAttributes, ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  handle?: () => void;
} & (ButtonProps | LinkProps) &
  HTMLAttributes<any>;

type ButtonProps = {
  type: 'button';
  btnType?: 'button' | 'submit' | 'reset' | undefined;
};

type LinkProps = {
  type: 'link';
  href: string;
};

const Button = (props: Props) => {
  const handleClick = props.handle;
  return (
    <>
      {props.type === 'button' && (
        <button
          type={props.btnType}
          onClick={handleClick}
          className={styles.button}>
          {props.children}
        </button>
      )}
      {props.type === 'link' && (
        <Link href={props.href} onClick={handleClick} className={styles.button}>
          {props.children}
        </Link>
      )}
    </>
  );
};

export default Button;
