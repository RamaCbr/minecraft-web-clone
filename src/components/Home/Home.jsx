import "./Home.scss";

export default function Home() {
	return (
		<section className="Home">
			<div className="Home-container">
				<div className="Home-text-wrapper">
					<h1 className="Home-title">
						WELCOME TO THE OFFICIAL SITE OF MINECRAFT
					</h1>
					<p className="Home-subtitle">
						With new games, new updates, and new ways to play, join one of the
						biggest communities in gaming and start crafting today!
					</p>
					<button className="Home-button">GET MINECRAFT</button>
				</div>
			</div>
		</section>
	);
}
