import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslatedData } from 'hooks';
import { Container } from 'components';
import { ReviewCard } from './ReviewCard';
import { content, contentDE } from './consts';
import styles from './Reviews.module.scss';

function Reviews() {
  const data = useTranslatedData(content, contentDE);

  const indentations = [35, 35, 10, 45, 50, 0, 0, 30, 150, 0, 30];

  const cardGroups = Array.from(
    { length: Math.ceil(data.length / 2) },
    (_, index) => data.slice(index * 2, index * 2 + 2)
  );

  // Mobile and Desktop versions of carousel are conditionally displayed with css
  return (
    <section className={styles.section}>
      <Container>
        <div className={styles.carouselMobile}>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              576: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              769: {
                slidesPerView: 2,
              },
              900: {
                slidesPerView: 2.2,
              },
              1050: {
                slidesPerView: 2.6,
              },
            }}
            loop
            grabCursor
            freeMode
            modules={[Pagination]}
            className="reviewCardCarousel">
            {data.map((item) => (
              <SwiperSlide key={item.id}>
                <ReviewCard reviewItem={item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className={styles.carouselDesktop}>
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            pagination={{
              clickable: true,
            }}
            loop
            grabCursor
            autoplay={{
              delay: 7000,
              disableOnInteraction: true,
            }}
            freeMode
            modules={[Autoplay, Pagination]}
            className="reviewCardCarousel">
            <div>
              {cardGroups.map((group, index) => (
                <SwiperSlide key={index}>
                  {group.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        paddingBottom: '20px',
                      }}>
                      <ReviewCard
                        reviewItem={item}
                        style={{
                          marginTop: `${indentations[item.id]}px`,
                        }}
                      />
                    </div>
                  ))}
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </Container>
    </section>
  );
}

export default Reviews;
