import {
	Header,
	Home,
	GamesCarousel,
	NewsCarousel,
	Games,
	CommunityCreations,
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
		</>
	);
}

export default App;
