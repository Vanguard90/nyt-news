import React from 'react';

interface INewsCardProps {
	title: string;
	multimediaurl: string | any; // Can be a string or jpg
	abstract: string;
	readurl: string;
	section: string;
	key: number;
}

class NewsCard extends React.Component<INewsCardProps> {
	render() {
		return (
			<div className="menu-news">
				<div className="NewsCard">
					<div className="photo-thumbnail">
						<img className="thumbnail-image" src={this.props.multimediaurl} alt="news-thumbnail" />
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

export default NewsCard;