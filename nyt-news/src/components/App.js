import React from 'react';
import { render } from 'react-dom';
import Masthead from "./Masthead";
import NewsBox from "./NewsBox";
import Footer from "./Footer";

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

	render () {
		return (
			<div>
				<Masthead/>
				<ul className="list-of-news">
				{
				Object
				.keys(this.state.news)
				.map( key => <NewsBox 
					title={this.state.news[key].title} 
					abstract={this.state.news[key].abstract} 
					readurl={this.state.news[key].url}
					multimediaurl={(this.state.news[key].multimedia.length > 0) ? (this.state.news[key].multimedia[3].url) : "abc.jpg" }
					key={key} details={this.state.news[key]} />)
				}
				</ul>
				<Footer/>
			</div>
		)
	}
}

export default App;

//{App.state.news.map(data => <NewsBox/>)}