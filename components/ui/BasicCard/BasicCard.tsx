import Image from 'next/image';
import Link from 'next/link';
import variables from 'styles/variables.module.scss';
import styles from './BasicCard.module.scss';

interface Props {
  url: string;
  thumbnail: string;
  date?: string;
  title: string;
  category?: string;
  invitation: string;
  imgPriority?: boolean;
  nofollow?: boolean;
}

function BasicCard({
  title,
  date,
  thumbnail,
  url,
  category,
  invitation,
  imgPriority,
  nofollow,
}: Props) {
  const relAttribute = nofollow ? 'nofollow' : undefined;

  return (
    <Link className={styles.link} href={url} rel={relAttribute}>
      <div className={styles.wrapper}>
        <div className={styles.imgWrapper}>
          <Image
            className={styles.image}
            src={thumbnail}
            alt={title}
            fill
            priority={imgPriority}
            sizes={`(max-width: ${variables.widthXs}) 95vw, (max-width: ${variables.widthMd}) 50vw, 30vw`}
          />
        </div>

        <h2 className={styles.title}>{title}</h2>
        {category && <p className={styles.category}>{category}</p>}

        <div className={styles.bottom}>
          <p className={styles.readMore}>{invitation}</p>
          {date && <p className={styles.date}>{date}</p>}
        </div>
      </div>
    </Link>
  );
}

export default BasicCard;
