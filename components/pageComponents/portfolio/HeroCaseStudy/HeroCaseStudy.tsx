import Image from 'next/image';
import { useScrollYTransform } from 'hooks';
import styles from './HeroCaseStudy.module.scss';

interface Props {
  imageUrl: string;
  title: string;
}

function HeroCaseStudy({ imageUrl, title }: Props) {
  const translateYValue = useScrollYTransform();

  return (
    <section className={styles.wrapper}>
      <div
        className={styles.motion}
        style={{ transform: `translateY(${translateYValue}px)` }}>
        <Image
          className={styles.image}
          src={imageUrl}
          alt={title}
          priority
          fill
          sizes="100vw"
        />
      </div>
    </section>
  );
}

export default HeroCaseStudy;
