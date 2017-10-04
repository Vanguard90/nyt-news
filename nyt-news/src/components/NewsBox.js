import React from 'react';

class NewsBox extends React.Component {
	render () {
		return (

			<li className="menu-news">
			<div className="newsbox">
				<div className="photo-thumbnail">
  					<img className="thumbnail-image" src={this.props.multimediaurl} alt="news-thumbnail"/>
				</div>
				<div className="text-section">
					<h3>{this.props.title}</h3>
				<p>{this.props.abstract}</p>
				</div>
			</div>
			<p><a href={this.props.readurl}>Read at NYTimes >></a></p>
			</li>
		)
	}
}

export default NewsBox;