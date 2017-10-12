import React from 'react';
import { render } from 'react-dom';
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
		//this.timeFormat = this.timeFormat.bind(this);
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
	//this.timeFormat();
	}
/*
	timeFormat() {
		for (var i = 0; i < this.state.news.length; i++) {
			let fullDate = [];
			fullDate[i] = this.state.news[i].updated_date;
			let date = [];
			date[i] = fullDate[i].split("T");
			date[0][i] = this.setState(this.state.news[i].date);
		}
	}
*/
//timeformat not working at the moment.

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
					multimediaurl={(this.state.news[key].multimedia.length > 0) ? (this.state.news[key].multimedia[3].url) : logoNYT}
					publishDate = {this.state.news[key].published_date}
					key={key} details={this.state.news[key]} />)
				}
				</div>
				<Footer/>
			</div>
		)
	}
}

export default App;