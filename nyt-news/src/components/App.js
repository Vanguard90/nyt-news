import React from 'react';
import { render } from 'react-dom';
import Masthead from "./Masthead";
import NewsBox from "./NewsBox";

class App extends React.Component {
	constructor() {
		super();
		this.addNews = this.addNews.bind(this);
		this.state = {

			news: {}
			
		};
	}

	addNews(newsdata) {

		const news = {...this.state.news};
		const timestamp = Date.now();
		news[`newsdata-${timestamp}`] = news;
		this.setState({ news });
	}

	componentDidMount() {

		let news = fetch('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=3b6e4cf6acee482fb77482cfd4416c0b');

		news
		.then(data => data.json())
		.then(data => {console.log(data)})
		.catch((err) => { console.log(err)});

		news = news.results;
	}

	render () {
		return (
			<div>
				<Masthead/>
				<NewsBox/>
			</div>
		)
	}
}

export default App;