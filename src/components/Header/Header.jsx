import { useContext } from "react";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";
import { GlobalContext } from "../../provider/Provider";
import "./Header.scss";

export default function Header() {
	const { links } = useContext(GlobalContext);

	return (
		<header className="Header">
			<HeaderTop />
			<HeaderBottom links={links} />
		</header>
	);
}
