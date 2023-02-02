import { useContext } from "react";
import Carousel from "../Carousel/Carousel";
import { useCarousel } from "../../hooks/useCarousel";
import { GlobalContext } from "../../provider/Provider";
import "./NewsCarousel.scss";

export default function NewsCarousel() {
	const { selectedIndex, increaseIndexHandler, decreaseIndexHandler } =
		useCarousel({
			initialValue: 0,
			maxValue: 3,
		});
	const { newsCarousel } = useContext(GlobalContext);

	return (
		<section className="NewsCarousel">
			<h1 className="NewsCarousel-title">NEWEST NEWS</h1>
			<div className="NewsCarousel-wrapper">
				<Carousel
					data={newsCarousel}
					selectedIndex={selectedIndex}
					increaseIndexHandler={increaseIndexHandler}
					decreaseIndexHandler={decreaseIndexHandler}
				/>
			</div>
		</section>
	);
}
