import React from 'react';

class NewsBox extends React.Component {
	render () {
		return (

			<div className="menu-news">
			<div className="newsbox">
				<div className="photo-thumbnail">
  					<img className="thumbnail-image" src={this.props.multimediaurl} alt="news-thumbnail"/>
				</div>
				<div className="text-section">
					<h3>{this.props.title}</h3>
				<p>{this.props.abstract}</p>
				<p>Published at: {this.props.publishDate} </p>
				</div>
			</div>
			<div className="link-holder">
				<p className="read-at"><a href={this.props.readurl}>Read at NYTimes >></a></p>
			</div>
			</div>
		)
	}
}

export default NewsBox;