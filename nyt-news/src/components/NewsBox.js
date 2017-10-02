import React from 'react';
import { render } from 'react-dom';

class NewsBox extends React.Component {
	render () {
		return (

			<li className="menu-news">
			<div className="newsbox">
				<div className="photo-thumbnail">
  					<img src={this.props.multimediaurl} alt="news-thumbnail"/>
				</div>
				<div className="text-section">
					<h2>{this.props.title}</h2>
				<p>{this.props.abstract}</p>
				<p><a href={this.props.readurl}>Read at NYTimes</a></p>
				</div>
			</div>
			</li>
		)
	}
}

export default NewsBox;