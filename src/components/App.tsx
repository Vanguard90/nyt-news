import * as React from 'react';
import Masthead from "./Masthead";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import Header from "./Header";
// import logoNYT from "../img/nyt-white-logo.jpg";
import * as nytRepositoryService from '../service/nyt-repository';
import { ITopStory } from '../service/service-interface';
// import transparentNYTLogo from '../img/nyt-logo-png-500x500.png';

const logoNYT = require('../img/nyt-white-logo.jpg');
const transparentNYTLogo = require('../img/nyt-logo-png-500x500.png');
interface IAppState {
	news: ITopStory[];
	sections: any;
	componentIsLoading: boolean;
	loadingScreenInDOM: boolean;
}

class App extends React.Component<{}, IAppState> {

	constructor(props: {}) {
		super(props);
		this.state = {
			news: [],
			sections: {},
			componentIsLoading: true,
			loadingScreenInDOM: true
		};
		this.renderNewsCard = this.renderNewsCard.bind(this);
		this.renderLoadingScreen = this.renderLoadingScreen.bind(this);
	}

	componentDidMount() {

		nytRepositoryService.getTopStories().subscribe(topStories => {
			this.setState({ news: topStories.results, componentIsLoading: false });
			setTimeout(() => { this.setState({ loadingScreenInDOM: false }) }, 3000); // Remove the loading screen status since we have the data
		}, err => {
			console.log('Error getting top stories! Err: ' + err);
		});
	}

	// sectionFilter() {

	// 	let holder = Object.keys(this.state.news).map(key => this.state.news[key].section); //This gives me an array of all sections.

	// 	//Reduce the holder to find the number of spesific sections.
	// 	//Update state with spesific section data so that app knows what type of sections we have and how many. Naturally reduce to an object.
	// 	//Use this data to populate a dynamic filter section with input tags and checkboxes. Seperate component. 
	// 	//Listen to these checkboxes. Call function onclick. 
	// 	//Look for these sections at the NewsCard components. Possible use of reference.
	// 	//Display:none on ones that are not selected.
	// 	//Refresh steps 3/4/5 to update.

	// }

	renderNewsCard(): JSX.Element[] | null {
		if (this.state && this.state.news) {
			return this.state.news.map((key, index) => {
				return <NewsCard
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

	renderLoadingScreen(): JSX.Element | null {
		// Handler function that removes the redundant loading screen after loadingScreenInDOM turns false.
		const componentIsLoading = this.state.componentIsLoading;
		if (this.state && this.state.loadingScreenInDOM) {
			return <div className={componentIsLoading ? "foreground-in" : "foreground-out"}><img id="nyt-foreground-icon" src={transparentNYTLogo} /></div>
		} else {
			return null;
		}
	}

	render() {
		return (
			<div>
				{
					this.renderLoadingScreen()
				}
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