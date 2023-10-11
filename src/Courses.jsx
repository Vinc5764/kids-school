/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar1 from './assets/Avatar1.png';
import Avatar2 from './assets/Avatar2.png';
import Avatar3 from './assets/Avatar3.png';
import Avatar4 from './assets/quote.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    category: 'Expert Instruction',
    comment:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
    Avatar: Avatar1,
  },
  {
    id: 2,
    category: 'Training Courses',
    comment:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
    Avatar: Avatar2,
  },
  {
    id: 3,
    category: 'Lifetime access',
    comment:
      'The gradual accumulation of information about atomic and small-scale behaviour...',
    Avatar: Avatar3,
  },
];

const ReviewCard = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        className="mySwiper -z-0 rounded-[2rem] lg:z-[999] lg:mt-[-7rem] lg:w-[60rem]"
      >
        {reviews.map((review) => (
          <SwiperSlide
            key={review.id}
            className="bg-light-background-color shadow-accentued-drop   lg: h-[18.8rem] w-[20rem] rounded-[2rem] border py-4  pl-4"
          >
            <div>
              <div className="flex items-center gap-4">
                <img src={review.Avatar} alt="" className="" />
              </div>
              <h1 className="pt-4 font-['Montserrat'] text-[1.5rem] font-bold">
                {review.category}
              </h1>
              <img src={Avatar4} alt="" className="h-2 w-12" />
              <p className="my-5 w-[13rem] text-[#737373]">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ReviewCard;
