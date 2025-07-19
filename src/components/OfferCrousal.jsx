// OfferCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


  

  export default function OfferCarousel () {

    const slides = [
    {
      alt: 1,
      src: './src/assets/carauser-img/Carauser-1.png',
    },
    {
      alt: 2,
      src: './src/assets/carauser-img/Carauser-2.png',
    },
    {
      alt: 3,
      src: './src/assets/carauser-img/Carauser-3.png',
    },
  ];
  return (
    <div className='flex justify-center'>
    <div className="mt-6 rounded-2xl overflow-hidden shadow-lg h-50 md:h-100 md:mt-25" style={{width:"95%"}} >
      <Swiper
        modules={[ Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className='md:h-100'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} alt={`offer ${slide.alt}`} className="w-full h-full lg:h-140" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};


