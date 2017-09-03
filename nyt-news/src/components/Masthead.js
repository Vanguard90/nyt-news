import React from 'react';
import { render } from 'react-dom';

class Masthead extends React.Component {
	render () {
		return (
			<div className="masthead">
				<div className="textarea">
					<h1>NYT App</h1>
					<h2>See top stories</h2>
				</div>
			</div>
		)
	}
}

export default Masthead;