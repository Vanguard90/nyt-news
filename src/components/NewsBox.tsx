import React from 'react';

class NewsBox extends React.Component<{title: any; multimediaurl: any; abstract: any; readurl: any; section: any; details: any;}> {
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
				</div>
			</div>
			<div className="link-holder">
				<p className="read-at"><a href={this.props.readurl}><span>Read at NYTimes >></span></a></p>
			</div>
			<div className="tag"><p><b>Section:</b> {this.props.section}</p></div>
			</div>
		)
	}
}

export default NewsBox;