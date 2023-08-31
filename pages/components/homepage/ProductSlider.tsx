import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const ProductSlider = () => {


	return (
		<Swiper
    modules={[Navigation, Pagination, Scrollbar, A11y]}
    spaceBetween={0}
    slidesPerView={1}
    pagination={{ clickable: true }}
    scrollbar={{ draggable: true }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide key='1'>
				<div className=" h-96 w-full bg-slate-600">s hey</div>
			</SwiperSlide>

			<SwiperSlide key='2'>
      <div className=" h-96 w-full bg-slate-600">s hey</div>
			</SwiperSlide>

			<SwiperSlide key='3'>
      <div className=" h-96 w-full bg-slate-600">s hey</div>
			</SwiperSlide>
		</Swiper>
	);
};

export default ProductSlider;
