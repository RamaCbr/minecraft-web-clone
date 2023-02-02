import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const data = {
	links: [
		{ id: uuidv4(), link: "games" },
		{ id: uuidv4(), link: "community" },
		{ id: uuidv4(), link: "merch" },
		{ id: uuidv4(), link: "support" },
	],
	gamesCarousel: [
		{
			id: 0,
			img: "https://www.minecraft.net/content/dam/games/minecraft/key-art/Games_Subnav_Minecraft-300x465.jpg",
			title: "MINECRAFT",
			subtitle:
				"Explore your own unique world, survive the night, and create anything you can imagine!",
		},
		{
			id: 1,
			img: "https://www.minecraft.net/content/dam/games/dungeons/key-art/games_subnav_dungeona-300x465.jpg",
			title: "MINECRAFT DUNGEONS",
			subtitle:
				"Discover an all-new action adventure game, inspired by classic dungeon crawlers!",
		},
		{
			id: 2,
			img: "https://www.minecraft.net/content/dam/games/minecraft/key-art/MCL_Games_Subnav_Legends_300x465.jpg",
			title: "MINECRAFT LEGENDS",
			subtitle:
				"Uncover the mysteries of Minecraft Legends, a new action strategy game.",
		},
		{
			id: 3,
			img: "https://www.minecraft.net/content/dam/games/minecraft/key-art/MC_Games_Subnav_Realms_300x465.jpg",
			title: "MINECRAFT: REALMS",
			subtitle:
				"Play with your friends on your own personal Minecraft server on Windows, Linux, and Mac.",
		},
		{
			id: 4,
			img: "https://www.minecraft.net/content/dam/games/education-edition/key-art/games_subnav_educationedition-300x465.jpg",
			title: "MINECRAFT EDUCATION",
			subtitle:
				"A game-based learning platform supporting thousands of educators in over 100 countries!",
		},
	],
};

export const GlobalContext = createContext();

export function Provider({ children }) {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
}
