import { createContext } from "react";
import { v4 as uuidv4 } from "uuid";

const data = {
	links: [
		{ id: uuidv4(), link: "games" },
		{ id: uuidv4(), link: "community" },
		{ id: uuidv4(), link: "merch" },
		{ id: uuidv4(), link: "support" },
	],
};

export const GlobalContext = createContext();

export function Provider({ children }) {
	return (
		<GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
	);
}
