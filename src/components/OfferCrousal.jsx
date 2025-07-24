// OfferCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


  

  export default function OfferCarousel () {

    const slides = [
    {
      alt: 1,
      src: '/Carauser-1.png',
    },
    {
      alt: 2,
      src: '/Carauser-2.png',
    },
    {
      alt: 3,
      src: '/Carauser-3.png',
    },
  ];
  return (
    <div className='flex justify-center'>
    <div className="mt-5 rounded-2xl w-[95%] overflow-hidden shadow-lg h-50 md:h-100 md:mt-25 md:w-[90%]" >
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


