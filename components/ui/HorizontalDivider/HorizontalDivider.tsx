import { CSSProperties } from 'react';
import styles from './HorizontalDivider.module.scss';

interface Props {
  style?: CSSProperties;
  className?: string;
}

function HorizontalDivider({ style, className }: Props) {
  return <hr className={[styles.divider, className].join(' ')} style={style} />;
}

export default HorizontalDivider;
