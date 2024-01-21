import Link from 'next/link';
import styles from './Pagination.module.scss';

interface Props {
  totalPages: number;
  currentPage: number;
  route?: string;
}

function Pagination({ route, totalPages, currentPage }: Props) {
  return (
    <div className={styles.wrapper}>
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          className={
            index + 1 === currentPage
              ? [styles.button, styles._active].join(' ')
              : styles.button
          }
          key={index}>
          <Link href={`${route}/${(index + 1).toString()}`}>{index + 1}</Link>
        </div>
      ))}
    </div>
  );
}

export default Pagination;
