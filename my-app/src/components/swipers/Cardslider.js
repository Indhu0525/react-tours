import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; // Core Swiper components
import { Pagination } from "swiper/modules"; 
import "swiper/css"; 
import "swiper/css/pagination"; //
import bgCover3 from '../../assets//images/bgcover5.jpg';
import { HR } from 'flowbite-react';

const Cardslider = () => {
  return (
    <div className="mt-16 mx-3 px-4">
  <h2 className="text-3xl font-bold text-center mb-12">
    Popular destinations
  </h2>
  <h2 className="text-xl font-bold text-center mb-12">
    Explore popular countries
  </h2>
    <Swiper
    modules={[Pagination]} 
    pagination={{ clickable: true }} 
    slidesPerView={5} 
    spaceBetween={10} 
    breakpoints={{
      1920: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }}
  >
    <SwiperSlide>
      <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Diving in sri lanka</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Holong  bay cruises in vietnem</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Temple tours in thailand</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Historical tours in england</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Viweing in japan</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
  </Swiper>
<HR class="mt-20"></HR>
  <h2 className="text-xl font-bold text-center my-12">
    Explore popular Cities
  </h2>
    <Swiper
    modules={[Pagination]} 
    pagination={{ clickable: true }}
    slidesPerView={5} 
    spaceBetween={10} 
    breakpoints={{
      1920: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
      1028: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      320:{
        slidesPerView: 1,
        spaceBetween: 10,
      }
    }}
  >
    <SwiperSlide>
      <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Diving in sri lanka</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Holong  bay cruises in vietnem</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Temple tours in thailand</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Historical tours in england</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Viweing in japan</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
      <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
    <SwiperSlide>
    <div className="rounded-2xl h-96 flex flex-col justify-center items-center">
      <img src={bgCover3} alt="Slide 1" className="object-cover h-80 rounded-sm" />
      <h2 className="text-lg font-semibold my-5">Slide 3</h2>
      </div>
    </SwiperSlide>
  </Swiper>
  </div>
  )
}

export default Cardslider
