import { useContext } from "react";
import Carousel from "../Carousel/Carousel";
import { useCarousel } from "../../hooks/useCarousel";
import { GlobalContext } from "../../provider/Provider";
import "./GamesCarousel.scss";

export default function GamesCarousel() {
	const { selectedIndex, increaseIndexHandler, decreaseIndexHandler } =
		useCarousel({ initialValue: 0, maxValue: 4 });
	const { gamesCarousel } = useContext(GlobalContext);

	return (
		<section className="GamesCarousel">
			<div className="GamesCarousel-wrapper">
				<h2 className="GamesCarousel-title">
					EXPLORE MINECRAFT GAMES & ADD ONS
				</h2>
				<Carousel
					data={gamesCarousel}
					selectedIndex={selectedIndex}
					increaseIndexHandler={increaseIndexHandler}
					decreaseIndexHandler={decreaseIndexHandler}
				/>
			</div>
		</section>
	);
}
