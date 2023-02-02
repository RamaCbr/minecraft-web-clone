import "./Games.scss";

export default function Games() {
	return (
		<>
			<div className="stoneBg"></div>
			<section className="Games">
				<article className="Games-card">
					<img
						className="Games-img"
						src="https://www.minecraft.net/content/dam/games/badger/key-art/MC-Homepage_Media-Block-0_MC-Legends_600x360.jpg"
					/>
					<div className="Games-texts">
						<h2 className="Games-title">UNITE THE OVERWORLD</h2>
						<p className="Games-subtitle">
							Raise your banner high and inspire your allies to defeat the
							ravenous piglins and save the Overworld. Coming April 18, 2023.
						</p>
						<a className="Games-link" href="#">
							PRE-ORDER NOW
						</a>
					</div>
				</article>
				<article className="Games-card Games-card--second">
					<img
						className="Games-img"
						src="https://www.minecraft.net/content/dam/games/minecraft/key-art/MC-Homepage_Media-Block-0_S3-Fauna-Faire_600x360.jpg"
					/>
					<div className="Games-texts">
						<h2 className="Games-title">COME TOGETHER AT THE FAIRE!</h2>
						<p className="Games-subtitle">
							Fauna Faire is setting up camp, bringing with it both blazing
							activities and fun festivities. Unite with friends and take on new
							challenges together.
						</p>
						<a className="Games-link" href="#">
							PRE-ORDER NOW
						</a>
					</div>
				</article>
			</section>
		</>
	);
}
