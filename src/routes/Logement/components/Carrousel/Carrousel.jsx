/* eslint-disable react/prop-types */
import { useState } from 'react';
import './Carrousel.scss';

const Carousel = (props) => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const goToNextSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === props.images.length - 1 ? 0 : prevSlide + 1));
	};

	const goToPrevSlide = () => {
		setCurrentSlide((prevSlide) => (prevSlide === 0 ? props.images.length - 1 : prevSlide - 1));
		console.log('next');
	};

	return (
		<div className="carrousel">
			<span
				className="material-symbols-outlined arrow-back"
				onClick={() => {
					goToPrevSlide();
				}}
			>
				chevron_left
			</span>

			<div className='imageContainer'>
			<img src={props.images[currentSlide]}></img>
			</div>

			<span
				className="material-symbols-outlined arrow-forward"
				onClick={() => {
					goToNextSlide();
				}}
			>
				chevron_right
			</span>
		</div>
	);
};

export default Carousel;
