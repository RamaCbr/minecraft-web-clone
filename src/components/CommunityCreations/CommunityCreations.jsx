import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import "./CommunityCreations.scss";

export default function CommunityCreations() {
	const { communityCreations } = useContext(GlobalContext);

	return (
		<>
			<div className="stonesBg">
				<div className="stonesBg-top"></div>
				<div className="stonesBg-middle"></div>
				<div className="stonesBg-bottom"></div>
			</div>
			<section className="CommunityCreations">
				<div className="CommunityCreations-texts">
					<h1 className="CommunityCreations-title">COMMUNITY CREATIONS</h1>
					<p className="CommunityCreations-subtitle">
						Discover the best add-ons, mods, and more being built by the
						incredible Minecraft community!
					</p>
					<a className="CommunityCreations-link" href="#">
						Explore
					</a>
				</div>
				<div className="CommunityCreations-images-wrapper">
					{communityCreations.map(
						({ id, img, category, title, description }) => (
							<picture className="CommunityCreations-picture" key={id}>
								<source media="min-width: 70px" srcSet={img}></source>
								<img
									role="presentation"
									className="CommunityCreations-img"
									src={img}
								/>
								<div className="CommunityCreations-SlidingContent">
									<div className="CommunityCreations-SlidingContent-body">
										<div className="CommunityCreations-SlidingContent-tile-category">
											<span>{category}</span>
										</div>
										<div className="CommunityCreations-SlidingContent-tile-caption">
											<h3 className="CommunityCreations-SlidingContent-title">
												{title}
											</h3>
											<p className="CommunityCreations-SlidingContent-subtitle">
												{description}
											</p>
										</div>
									</div>
								</div>
							</picture>
						)
					)}
				</div>
				<div className="CommunityCreations-bottom">
					<button className="CommunityCreations-bottom-button">
						LOAD MORE
					</button>
					<p className="CommunityCreations-bottom-text">
						Cross-platform play available on Xbox, PlayStation 4, Nintendo
						Switch, iOS, Android, and Windows. Cross-play requires Microsoft
						account. Xbox Live Gold required for online multiplayer on Xbox.
						PlayStation Plus Membership required for online multiplayer on
						PlayStation 4. Nintendo Switch Online membership required for online
						multiplayer on Nintendo Switch.
					</p>
				</div>
			</section>
		</>
	);
}
