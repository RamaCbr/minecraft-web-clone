export default function HeaderBottom({ links }) {
	return (
		<div className="Header-bottom">
			<nav className="Header-bottom-nav">
				<ul className="Header-bottom-ul">
					{links.map(({ id, link }) => (
						<li className="Header-bottom-li" key={id}>
							<a href="#" className="Header-bottom-a">
								{link.toUpperCase()}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<img
				className="Header-bottom-img"
				src="https://www.minecraft.net/content/dam/games/minecraft/logos/logo-minecraft.svg"
			/>
			<button className="Header-bottom-button">GET MINECRAFT</button>
		</div>
	);
}
