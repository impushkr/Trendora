// OfferCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


  

  export default function OfferCarousel () {

    const slides = [
    {
      alt: 1,
      src: 'https://assets.dochipo.com/media/companies/dochipo/templates/6453adcfd36e051ed8241c41/screenshot.png',
    },
    {
      alt: 2,
      src: './src/assets/carauser-img/Carauser-2.png',
    },
    {
      alt: 3,
      src: 'https://cdn.create.vista.com/downloads/367a4f96-2652-4931-97db-d27173aa8736_1024.jpeg',
    },
  ];
  return (
    <div className='flex justify-center'>
    <div className="mt-6 rounded-2xl overflow-hidden shadow-lg h-50 md:h-90" style={{width:"95%"}} >
      <Swiper
        modules={[ Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop={true}
        className='md:h-90'
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img src={slide.src} alt={`offer ${slide.alt}`} className="w-full h-full md:object-cover " />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};


