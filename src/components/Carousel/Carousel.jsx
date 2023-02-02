import "./Carousel.scss";

export default function Carousel({
	data,
	selectedIndex,
	increaseIndexHandler,
	decreaseIndexHandler,
}) {
	return (
		<div className="Carousel">
			<div className="Carousel-arrow" onClick={decreaseIndexHandler}>
				<i class="fa-solid fa-arrow-left"></i>
			</div>
			{data.map(({ id, img, title, subtitle }) => {
				if (selectedIndex === id) {
					return (
						<div className="Carousel-item--loaded" key={id}>
							<img className="Carousel-img" src={img} />
							<h3 className="Carousel-item-title">{title}</h3>
							<p className="Carousel-item-subtitle">{subtitle}</p>
						</div>
					);
				} else {
					return (
						<div className="Carousel-item" key={id}>
							<img className="Carousel-img" src={img} />
							<h3 className="Carousel-item-title">{title}</h3>
							<p className="Carousel-item-subtitle">{subtitle}</p>
						</div>
					);
				}
			})}
			<div className="Carousel-arrow" onClick={increaseIndexHandler}>
				<i class="fa-sharp fa-solid fa-arrow-right"></i>
			</div>
		</div>
	);
}
