import * as React from 'react';
import Masthead from "./Masthead";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import Header from "./Header";
// import logoNYT from "../img/nyt-white-logo.jpg";
import * as nytRepositoryService from '../service/nyt-repository';
import { ITopStory } from '../service/service-interface';
// import transparentNYTLogo from '../img/nyt-logo-png-500x500.png';
import LogRocket from 'logrocket';


const logoNYT = require('../img/nyt-white-logo.jpg');
const transparentNYTLogo = require('../img/nyt-logo-png-500x500.png');
interface IAppState {
	news: ITopStory[];
	filteredNews: ITopStory[];
	sections: any;
	componentIsLoading: boolean;
	loadingScreenInDOM: boolean;
}
class App extends React.Component<{}, IAppState> {

	constructor(props: {}) {
		super(props);
		this.state = {
			news: [],
			filteredNews: [],
			sections: {},
			componentIsLoading: true,
			loadingScreenInDOM: true
		};

		// Don't initiate Logrocket in testing scenarios
		if (process.env.NODE_ENV !== 'test') {
			LogRocket.init('girfqq/nyt-app-prod');
		}

		this.renderNewsCard = this.renderNewsCard.bind(this);
		this.renderLoadingScreen = this.renderLoadingScreen.bind(this);
		this.renderMasthead = this.renderMasthead.bind(this);
		this.handleFilterChange = this.handleFilterChange.bind(this);
	}

	componentDidMount() {

		nytRepositoryService.getTopStories().then(topStories => {
			this.setState({ news: topStories.results, filteredNews: topStories.results, componentIsLoading: false });
			setTimeout(() => { this.setState({ loadingScreenInDOM: false }) }, 1500); // Remove the loading screen status since we have the data
		}).catch((err) => {
            console.error('Error at getting top stories: ', err);
        });
	}

	renderNewsCard(): JSX.Element[] | null {
		if (this.state && this.state.news || this.state.filteredNews) {
			return this.state.filteredNews.map((key, index) => {
				return <NewsCard
					title={key.title}
					abstract={key.abstract}
					readurl={key.url}
					multimediaurl={(key.multimedia && key.multimedia.length > 3) ? (key.multimedia[3].url) : logoNYT}
					section={key.section}
					key={index + key.title} />
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

	renderMasthead(): JSX.Element | null {
		if (this.state && this.state.news !== []) {
			return <Masthead handleFilterChange={this.handleFilterChange} key={'masthead' + this.state.news.toString()}/>;
			// Why use a key instead of some lifecycle method like componentWill ReceiveProps at the children?
			// componentWillReceiveProps will be depreciated at React 17 and key is a quick way of re-rendering the child component on change
		} else {
			return null;
		}
	}

	handleFilterChange(event: React.ChangeEvent<HTMLInputElement>): void {
		const filteredResult: ITopStory[] = this.state.news.filter( (singleStory) => {
			if (singleStory.title.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1 ||
			singleStory.abstract.toUpperCase().indexOf(event.target.value.toUpperCase()) > -1 ) {
				return singleStory;
			}
		});
		this.setState({ filteredNews: filteredResult});
	  }

	render() {
		return (
			<div>
				{
					this.renderLoadingScreen()
				}
				<Header />
				{ this.renderMasthead() }
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