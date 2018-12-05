import * as React from 'react';
import Masthead from "./Masthead";
import NewsBox from "./NewsBox";
import Footer from "./Footer";
import Header from "./Header";
import logoNYT from "../img/nyt-white-logo.jpg";

interface IAppState {
	news: any;
	sections: any;
}

class App extends React.Component<{}, IAppState> {
	constructor() {
		super({});
		this.state = {
			news: {},
			sections: {}
		};
	}

	componentDidMount() {

	this.apiCall();

	}


sectionFilter() {

let holder = Object.keys(this.state.news).map(key => this.state.news[key].section); //This gives me an array of all sections.

//Reduce the holder to find the number of spesific sections.
//Update state with spesific section data so that app knows what type of sections we have and how many. Naturally reduce to an object.
//Use this data to populate a dynamic filter section with input tags and checkboxes. Seperate component. 
//Listen to these checkboxes. Call function onclick. 
//Look for these sections at the Newsbox components. Possible use of reference.
//Display:none on ones that are not selected.
//Refresh steps 3/4/5 to update.

}

	apiCall() {

	let news = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3b6e4cf6acee482fb77482cfd4416c0b');

	news
	.then(data => data.json())
	.then(data => {this.setState({ news: data.results })})
	.catch((err) => { console.log(err)});

	this.sectionFilter();
	}

	render() {
		return (
			<div>
				<Header/>
				<Masthead/>
				<div className="list-of-news">
				{
				Object
				.keys(this.state.news)
				.map( key => <NewsBox 
					title={this.state.news[key].title} 
					abstract={this.state.news[key].abstract} 
					readurl={this.state.news[key].url}
					multimediaurl={(this.state.news[key].multimedia.length > 3) ? (this.state.news[key].multimedia[3].url) : logoNYT}
					section = {this.state.news[key].section}
					key={key} 
					details={this.state.news[key]} />)
				}
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;