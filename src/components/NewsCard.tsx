import React from 'react';

interface INewsCardProps {
	title: string;
	multimediaurl: string | any; // Can be a string or jpg
	abstract: string;
	readurl: string;
	section: string;
	key: number;
}

const NewsCard:React.FC<INewsCardProps> = (props: INewsCardProps) => {
		return (
			<div className="menu-news">
				<div className="NewsCard">
					<div className="photo-thumbnail">
						<img className="thumbnail-image" src={props.multimediaurl} alt="news-thumbnail" />
					</div>
					<div className="text-section">
						<h3>{props.title}</h3>
						<p>{props.abstract}</p>
					</div>
				</div>
				<div className="link-holder">
					<p className="read-at"><a href={props.readurl}><span>Read at NYTimes >></span></a></p>
				</div>
				<div className="tag"><p><b>Section:</b> {props.section}</p></div>
			</div>
		)
}

export default NewsCard;