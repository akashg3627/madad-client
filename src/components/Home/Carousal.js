import { lp4, lp3, lp1, lp2 } from "../../Images";

// import lp5 from './images/5.png';

import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators } from "reactstrap";

const items = [
	{
		src: lp2,
		altText: "Slide 2",
		caption: "Slide 2",
	},
	{
		src: lp3,
		altText: "Slide 2",
		caption: "Slide 2",
	},
	{
		src: lp4,
		altText: "Slide 2",
		caption: "Slide 2",
	},
	{
		src: lp1,
		altText: "Slide 1",
		caption: "Slide 1",
	},
];

const Example = (props) => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [animating, setAnimating] = useState(false);

	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};

	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};

	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem
				onExiting={() => setAnimating(true)}
				onExited={() => setAnimating(false)}
				key={item.src}
			>
				<img className="carouselImg" src={item.src} alt={item.altText} />
			</CarouselItem>
		);
	});

	return (
		<Carousel
			activeIndex={activeIndex}
			next={next}
			previous={previous}
			slide={false}
			interval={3000}
		>
			<CarouselIndicators
				items={items}
				activeIndex={activeIndex}
				onClickHandler={goToIndex}
			/>
			{slides}
			<CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
			<CarouselControl direction="next" directionText="Next" onClickHandler={next} />
		</Carousel>
	);
};

export default Example;
