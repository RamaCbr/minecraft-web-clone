import "./CommunityItem.scss";

export default function CommunityItem({ img, category, title, description }) {
	return (
		<picture className="CommunityItem">
			<source media="min-width: 70px" srcSet={img}></source>
			<img role="presentation" className="CommunityItem-img" src={img} />
			<div className="CommunityItem-SlidingContent">
				<div className="CommunityItem-SlidingContent-body">
					<div className="CommunityItem-SlidingContent-tile-category">
						<span>{category}</span>
					</div>
					<div className="CommunityItem-SlidingContent-tile-caption">
						<h3 className="CommunityItem-SlidingContent-title">{title}</h3>
						<p className="CommunityItem-SlidingContent-subtitle">
							{description}
						</p>
					</div>
				</div>
			</div>
		</picture>
	);
}
