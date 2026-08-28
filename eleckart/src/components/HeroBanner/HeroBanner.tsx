import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export interface HeroSlide {
  id: number;
  desktopImage: string;
  mobileImage: string;
  alt: string;
}

interface HeroBannerProps {
  slides: HeroSlide[];
}

const HeroBanner = ({ slides }: HeroBannerProps) => {
  return (
    <section className="w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{
          clickable: true,
        }}
        speed={700}
        className="hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={slide.mobileImage}
              />

              <img
                src={slide.desktopImage}
                alt={slide.alt}
                className="block h-auto w-full"
              />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;