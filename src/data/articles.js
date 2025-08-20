import React from "react";

function article_1() {
	return {
		date: "July 2023",
		title: "A DEEP LEARNING APPROACH TO IMAGE-TEXT EMBEDDING",
		description:
			"Image-text matching is an important task in computer vision and natural language processing that aims to find the semantic relationship between an image and its corresponding text description",
		keywords: [
			
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of Research Publications</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}



const myArticles = [article_1];

export default myArticles;
