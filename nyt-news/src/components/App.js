import React from 'react';
import Masthead from "./Masthead";
import NewsBox from "./NewsBox";
import Footer from "./Footer";
import Header from "./Header";
import logoNYT from "../img/nyt-white-logo.jpg";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			news: {}
		};
	}

	componentDidMount() {

	this.apiCall();

	}

	apiCall() {

	let news = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3b6e4cf6acee482fb77482cfd4416c0b');

	news
	.then(data => data.json())
	.then(data => {this.setState({ news: data.results })})
	.catch((err) => { console.log(err)});
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
					//publishDate = {this.state.news[key].published_date}
					key={key} details={this.state.news[key]} />)
				}
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;