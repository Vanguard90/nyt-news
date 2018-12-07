import * as React from 'react';
import Masthead from "./Masthead";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import Header from "./Header";
import logoNYT from "../img/nyt-white-logo.jpg";
import * as nytRepositoryService from '../service/nyt-repository';
import { ITopStory } from '../service/service-interface';

interface IAppState {
	news: ITopStory[];
	sections: any;
}

class App extends React.Component<{}, IAppState> {

	constructor(p: {}) {
		super(p);
		this.state = {
			news: [] as ITopStory[],
			sections: {}
		};
		this.renderNewsCard = this.renderNewsCard.bind(this);
	}

	componentDidMount() {

		nytRepositoryService.getTopStories().subscribe(topStories => {
			this.setState({ news: topStories.results })
		}, err => {
			console.log('Error getting top stories! Err: ' + err);
		})
	}

	sectionFilter() {

		let holder = Object.keys(this.state.news).map(key => this.state.news[key].section); //This gives me an array of all sections.

		//Reduce the holder to find the number of spesific sections.
		//Update state with spesific section data so that app knows what type of sections we have and how many. Naturally reduce to an object.
		//Use this data to populate a dynamic filter section with input tags and checkboxes. Seperate component. 
		//Listen to these checkboxes. Call function onclick. 
		//Look for these sections at the NewsCard components. Possible use of reference.
		//Display:none on ones that are not selected.
		//Refresh steps 3/4/5 to update.

	}

	renderNewsCard() {
		if (this.state && this.state.news) {
		return	this.state.news.map((key, index) => {
				return	<NewsCard
						title={key.title}
						abstract={key.abstract}
						readurl={key.url}
						multimediaurl={(key.multimedia.length > 3) ? (key.multimedia[3].url) : logoNYT}
						section={key.section}
						key={index} />
				}) 
		} else {
			return null;
		}
	}

	render() {
		
		return (
			<div>
				<Header />
				<Masthead />
				<div className="list-of-news">
					{
						this.renderNewsCard()
					}
				</div>
				<Footer />
			</div>
		)
	}
}

export default App;