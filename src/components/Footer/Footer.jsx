import {
	FaYoutube,
	FaInstagram,
	FaFacebook,
	FaTwitter,
	FaReddit,
} from "react-icons/fa";
import "./Footer.scss";

export default function Footer() {
	return (
		<div className="Footer">
			<h3 className="Footer-title">FOLLOW MINECRAFT</h3>
			<div className="Footer-social">
				<FaYoutube className="Footer-icon" size={25} />
				<FaInstagram className="Footer-icon" size={25} />
				<FaFacebook className="Footer-icon" size={25} />
				<FaTwitter className="Footer-icon" size={25} />
				<FaReddit className="Footer-icon" size={25} />
			</div>
		</div>
	);
}
