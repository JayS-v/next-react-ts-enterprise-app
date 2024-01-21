import { CSSProperties } from 'react';
import Image from 'next/image';
import styles from './ReviewCard.module.scss';

interface Props {
  reviewItem: {
    name: string;
    profession: string;
    avatar: string;
    text: string;
  };
  style?: CSSProperties;
}

function ReviewCard({ reviewItem, style }: Props) {
  const { name, profession, avatar, text } = reviewItem;

  return (
    <div className={styles.card} style={style}>
      <p className={styles.text}>{text}</p>

      <div className={styles.bottom}>
        <div className={styles.avatarWrapper}>
          <Image src={avatar} alt={avatar} fill sizes="70px" />
        </div>

        <div>
          <p className={styles.name}>{name}</p>
          <p>{profession}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
