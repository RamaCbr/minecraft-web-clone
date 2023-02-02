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
	newsCarousel: [
		{
			id: 0,
			img: "https://www.minecraft.net/content/dam/games/badger/key-art/MinecraftLegends_DeluxeEdition_NetBlogEditorial_440x250_final.jpg",
			title: "Minecraft Legends official release date",
			subtitle: "Coming to multiple platforms on April 18",
		},
		{
			id: 1,
			img: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/Minecraft_Camp%20Enderwood_.net_440x250.jpg",
			title: "Welcome to Camp Enderwood",
			subtitle:
				"Sign up for a free DLC adventure and a new Creator Series collection!",
		},
		{
			id: 2,
			img: "https://www.minecraft.net/content/dam/games/minecraft/realms/java_realms_january23_440x250.jpg",
			title: "New on Java Realms: Fighting Words",
			subtitle: "8 maps to write home about!",
		},
		{
			id: 3,
			img: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/beta19U7-car.jpg",
			title: "Minecraft Preview 1.19.70.20",
			subtitle: "A Minecraft Preview Changelog!",
		},
	],
	communityCreations: [
		{
			id: uuidv4(),
			img: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/23w05a_1x1.jpg",
			category: "NEWS",
			title: "Minecraft Snapshot 23w05a",
			description: "A Minecraft Java Snapshot",
		},
		{
			id: uuidv4(),
			img: "https://www.minecraft.net/content/dam/games/minecraft/screenshots/Minecraft_Camp%20Enderwood_.net_277x277.jpg",
			category: "MERCH",
			title: "Welcome to Camp Enderwood",
			description:
				"Sign up for a free DLC adventure and a new Creator Series collection!",
		},
		{
			id: uuidv4(),
			img: "https://www.minecraft.net/content/dam/games/minecraft/realms/java_realms_january23_277x277.jpg",
			category: "NEWS",
			title: "New on Java Realms: Fighting Words",
			description: "8 maps to write home about!",
		},
	],
};

export const GlobalContext = createContext();

export function Provider({ children }) {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
}
