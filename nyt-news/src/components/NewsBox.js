import React from 'react';
import { render } from 'react-dom';

class NewsBox extends React.Component {
	render () {
		return (
			<div className="newsbox">
				<div className="photo-thumbnail">
  					<img src="xxx.jpg" alt="news-thumbnail"/>
				</div>
				<div className="text-section">
					<h2> News title</h2>
					<p>News description</p>
				</div>
			</div>
		)
	}
}

export default NewsBox;