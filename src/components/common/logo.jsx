import React from "react";
import { Link } from "react-router-dom";

import INFO from "../../data/user";

import "./styles/logo.css";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<img src="https://media.licdn.com/dms/image/v2/D4D03AQFCkqozsbWHWA/profile-displayphoto-shrink_400_400/B4DZYQ5nRvG8Ak-/0/1744040262789?e=2147483647&v=beta&t=2rN7FlItPnfIGI16Uce0gQvfQndNDGz4sxMp60uOgeI" alt="logo" className="logo" width={width} />
	);

	return (
		<React.Fragment>
			{link ? <Link to="/">{imageElement}</Link> : imageElement}
		</React.Fragment>
	);
};

export default Logo;
