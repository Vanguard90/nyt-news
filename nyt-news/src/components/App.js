import React from 'react';
import { render } from 'react-dom';
import Masthead from "./Masthead";
import NewsBox from "./NewsBox";

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
				<NewsBox/>
			</div>
		)
	}
}

export default App;