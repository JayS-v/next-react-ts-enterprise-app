import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useMediaQuery } from 'hooks';
import { CurvedBackground } from 'components';
import variables from 'styles/variables.module.scss';
import styles from './ImageCarousel.module.scss';

interface Props {
  slides: string[];
}

function ImageCarousel({ slides }: Props) {
  const widthMdOrLess = useMediaQuery(`(max-width: ${variables.widthMd})`);

  return (
    <section>
      <CurvedBackground>
        <div className={styles.wrapper}>
          <div className={styles.carousel}>
            <Swiper
              initialSlide={1}
              slidesPerView={'auto'}
              centeredSlides
              loop
              grabCursor
              spaceBetween={30}
              speed={800}
              navigation={!widthMdOrLess}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Navigation]}
              className="imageCarousel">
              {slides.map((item, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={item}
                    alt="product presentation"
                    width={1200}
                    height={540}
                    sizes={`(max-width: ${variables.widthXs}) 90vw,
                    (max-width: ${variables.widthLg}) 80vw`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </CurvedBackground>
    </section>
  );
}

export default ImageCarousel;
