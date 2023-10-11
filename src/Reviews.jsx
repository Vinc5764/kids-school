/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Avatar11 from './assets/Avatar11.svg';
import Avatar12 from './assets/Avatar12.svg';
import Avatar13 from './assets/Avatar13.svg';
import Avatar4 from './assets/loot.png';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const reviews = [
  {
    id: 1,
    name: 'Regina Miles',
    occupation: 'Designer',
    comment:
      'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
    Avatar: Avatar11,
  },
  {
    id: 2,
    name: 'Regina Miles',
    occupation: 'Designer',
    comment:
      'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
    Avatar: Avatar12,
  },
  {
    id: 3,
    name: 'Regina Miles',
    occupation: 'Designer',
    comment:
      'Slate helps you see how many more days you need to work to reach your financial goal for the month and year.',
    Avatar: Avatar13,
  },
];

const Reviews = () => {
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
        className="mySwiper -z-0"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id} className=" border border-white p-8">
            <div>
              <img src={Avatar4} alt="" className="h-4" />
              <p className="my-5 ml-[-0.1rem] w-6/12 text-justify  text-sm text-[#737373]">
                {review.comment}
              </p>
              <div className="flex items-center gap-4">
                <img src={review.Avatar} alt="" className="h-10" />
                <div>
                  <p className="font-bold text-primary">{review.name}</p>
                  <p className="text-sm">{review.occupation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Reviews;
