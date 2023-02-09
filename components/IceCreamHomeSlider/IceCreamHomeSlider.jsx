import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import IceCreamHomeItem from '../IceCreamHomeItem/IceCreamHomeItem';
import 'swiper/scss';
import styles from './IceCreamHomeSlider.module.scss';
//=========================================================================================================================

const IceCreamHomeSlider = () => {
	const slides = [IceCreamHomeItem, IceCreamHomeItem, IceCreamHomeItem, IceCreamHomeItem, IceCreamHomeItem];
	const swiperRef = React.useRef();


	return (
		<>
			<Swiper
				spaceBetween={20}
				slidesPerView={4}
				onSwiper={(swiper) => swiperRef.current = swiper}
			>
				{slides.map((obj, index) => (
					<SwiperSlide key={index}>
						{obj}
					</SwiperSlide>
				))}
			</Swiper>
			<button className={styles.buttonPrev} onClick={() => swiperRef.current.slidePrev()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
					<path d="M4.221 11.271.536 14.995a1.758 1.758 0 0 0-.001 2.488 1.758 1.758 0 0 0 2.488 0l3.686-3.725-2.488-2.489zM15.563.13S3.236 5.058 3.062 5.135c-1.097.527-1.346 1.978-.485 2.831l7.437 7.441a1.762 1.762 0 0 0 2.831-.489c.066-.147 4.945-12.351 5.005-12.501.575-1.436-.852-2.861-2.287-2.287zm-3.144 12.704L5.147 5.561l3.156-1.263a1.741 1.741 0 0 0 .481 1.58 1.755 1.755 0 0 0 2.487 0l1.662-1.658a.605.605 0 0 1 .829 0 .584.584 0 0 1 0 .829l-.829.829a1.76 1.76 0 0 0 0 2.49 1.728 1.728 0 0 0 1.075.5l-1.588 3.965z" />
				</svg>
			</button>
			<button className={styles.buttonNext} onClick={() => swiperRef.current.slideNext()}>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18">
					<path d="M4.221 11.271.536 14.995a1.758 1.758 0 0 0-.001 2.488 1.758 1.758 0 0 0 2.488 0l3.686-3.725-2.488-2.489zM15.563.13S3.236 5.058 3.062 5.135c-1.097.527-1.346 1.978-.485 2.831l7.437 7.441a1.762 1.762 0 0 0 2.831-.489c.066-.147 4.945-12.351 5.005-12.501.575-1.436-.852-2.861-2.287-2.287zm-3.144 12.704L5.147 5.561l3.156-1.263a1.741 1.741 0 0 0 .481 1.58 1.755 1.755 0 0 0 2.487 0l1.662-1.658a.605.605 0 0 1 .829 0 .584.584 0 0 1 0 .829l-.829.829a1.76 1.76 0 0 0 0 2.49 1.728 1.728 0 0 0 1.075.5l-1.588 3.965z" />
				</svg>
			</button>
		</>

	);
};

export default IceCreamHomeSlider;