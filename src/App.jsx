import { Header, Home, GamesCarousel, NewsCarousel } from "./components";

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<GamesCarousel />
				<NewsCarousel />
			</main>
		</>
	);
}

export default App;
