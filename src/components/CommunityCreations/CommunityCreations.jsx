import { useContext } from "react";
import { GlobalContext } from "../../provider/Provider";
import CommunityBottom from "./CommunityBottom";
import CommunityItem from "./CommunityItem";
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
					{communityCreations.map((item) => (
						<CommunityItem {...item} />
					))}
				</div>
				<CommunityBottom />
			</section>
		</>
	);
}
