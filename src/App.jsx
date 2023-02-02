import {
	Header,
	Home,
	GamesCarousel,
	NewsCarousel,
	Games,
	CommunityCreations,
	Footer,
} from "./components";

function App() {
	return (
		<>
			<Header />
			<main>
				<Home />
				<GamesCarousel />
				<NewsCarousel />
				<Games />
				<CommunityCreations />
			</main>
			<footer>
				<Footer />
			</footer>
		</>
	);
}

export default App;
