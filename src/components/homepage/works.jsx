import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<h2 className="works-title"><FontAwesomeIcon icon={faBriefcase} className="homepage-social-icon" />
			Work Experience</h2>
			<Card
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://media.licdn.com/dms/image/v2/C560BAQEbcfKb7Otvyg/company-logo_200_200/company-logo_200_200/0/1640099650908?e=2147483647&v=beta&t=8RmzLFXG9bAK9YNzcYJ3g8oBnZRe9BbZVHF3stIv66s"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Career Dream Ltd.</div>
							<div className="work-subtitle">
								Python Development Intern
							</div>
							<div className="work-duration">May 2021 - June 2021</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
