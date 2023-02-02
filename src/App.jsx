import { Header, Home, GamesCarousel, NewsCarousel, Games } from "./components";

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<GamesCarousel />
				<NewsCarousel />
				<Games />
			</main>
		</>
	);
}

export default App;
