import React from 'react';
import { render } from 'react-dom';
import Masthead from "./Masthead";
import NewsBox from "./NewsBox";

class App extends React.Component {
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