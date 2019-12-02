import React from 'react';

const Masthead: React.FC<any> = function (props) {

	return (
		<div className="masthead">
			<div className="textarea">
				<svg xmlns="http://www.w3.org/2000/svg" width="379" height="64" viewBox="0 0 379 64"><path d="M30.8 15.7c0-4.1-3.9-5.4-7.2-5.3v0.4c2 0.2 3.5 1 3.5 2.3 0 0.9-0.7 2.1-2.6 2.1 -1.6 0-4.1-0.9-6.6-1.7 -2.7-0.9-5.2-1.8-7.3-1.8 -4.1 0-7.3 3.1-7.3 6.9 0 3.1 2.4 4.1 3.3 4.5l0.1-0.2c-0.6-0.4-1-0.9-1-2.2 0-1.1 0.8-2.6 2.9-2.6 1.9 0 4.4 0.9 7.8 1.8 2.9 0.8 6 1.6 7.7 1.8v6.7l-3.2 2.7 3.2 2.8v9.2c-1.7 1-3.6 1.3-5.3 1.3 -3.1 0-5.9-0.9-8.2-3.4l8.7-4.2V22.1L8.7 26.9c1.1-2.8 3.2-4.9 5.5-6.3l-0.1-0.2C7.8 22.1 2 27.9 2 35.1 2 43.7 8.9 50 16.8 50c8.6 0 13.6-6.7 13.5-13.8h-0.2c-1.3 2.7-3.3 5.3-5.7 6.7v-9l3.4-2.7 -3.4-2.7v-6.7C27.6 21.7 30.8 19.6 30.8 15.7L30.8 15.7zM12.9 39.3l-2.5 1.3c-1.5-2-2.5-4.7-2.5-8.3 0-1.5 0.2-3.5 0.7-4.9l4.4-2L12.9 39.3 12.9 39.3zM52.8 27.5l-1.7 1.3 -5-4.5 -5.9 4.5V11.4l-8 5.5c0.9 0.3 2 0.8 2 2.9V44l-2.7 2.1 0.3 0.3 1.4-1 4.7 4.3 6.4-4.2L44 45.1l-1.6 1.1L40.2 44V29.4l1.5-1.1 3.5 3V44c0 8-1.8 9.7-5.4 11v0.2c6 0.3 11.4-1.8 11.4-12.1V29.3l1.8-1.5L52.8 27.5 52.8 27.5zM63.5 49.6l9.2-7.4 -0.3-0.4 -4.8 3.8L62 41.3v-2.7l9.6-6.8 -4.8-7.5 -10.7 5.9v13.9l-2.1 1.6 0.3 0.3 2-1.6L63.5 49.6 63.5 49.6zM62 38V27.5l4.6 7.3L62 38 62 38zM110.9 13.7c0-0.7-0.2-1.2-0.4-2h-0.2c-0.7 1.8-1.4 2.7-3.4 2.7 -1.8 0-3.2-1.1-4-1.9 0 0.1-6.1 7-6.1 7l0.3 0.3 1.7-2c1.3 1 2.5 2.2 5.4 2.2v17.7L91.9 16.2c-1-1.6-2.6-4-5.5-4 -3.3 0-5.9 2.9-5.5 7.7h0.2c0.3-1.2 1-2.7 2.4-2.7 1.2 0 2.1 1.1 2.7 2.1v6.9c-3.8 0-6 1.8-6 4.8 0 1.3 0.9 4 3.5 4.4v-0.2c-0.4-0.4-0.7-0.7-0.7-1.4 0-1.2 0.9-1.8 2.4-1.8 0.3 0 0.6 0.1 0.8 0.1v9c-4.5 0.1-8 2.5-8 6.8 0 4 3.5 5.9 7.1 5.7v-0.2c-2.3-0.3-3.4-1.4-3.4-3.1 0-1.8 1.3-2.8 3-2.8 1.7 0 2.9 1.1 4 2.3l6.1-6.8 -0.3-0.3 -1.6 1.8c-2.3-2.1-3.8-3-6.5-3.4V19.9l17.1 29.8h0.9V20C108 19.8 110.9 17.4 110.9 13.7L110.9 13.7zM116.7 49.6l9.2-7.4 -0.3-0.4 -4.8 3.8 -5.6-4.4v-2.7l9.6-6.8 -4.8-7.5 -10.7 5.9v13.9l-2.1 1.6 0.3 0.3 2-1.6L116.7 49.6 116.7 49.6zM115.3 38V27.5l4.6 7.3L115.3 38 115.3 38zM158.7 26.7l-1.4 1.1 -4-3.4 -4.7 4.2 1.9 1.8v15.8l-4.8-3.3V30.1l1.7-1.2 -4.9-4.6 -4.6 4.2 1.9 1.8v15.3l-0.3 0.2 -4.5-3.3V30c0-2.9-1.5-3.8-3.3-4.9 -1.6-1-2.4-1.9-2.4-3.3 0-1.6 1.4-2.3 1.9-2.5 -1.6-0.1-6.1 1.6-6.2 5.7 -0.1 2.1 1 3 2 4 1.1 1 2.1 2 2.1 3.7V45l-2.2 1.7 0.3 0.3 2.1-1.6 5.4 4.4 5.2-3.6 5.7 3.6 11.1-6.6V28.9l2.5-1.9L158.7 26.7 158.7 26.7zM195.9 14.7l-2.1 1.9 -4.7-4.1 -6.4 5.2v-4.8h-0.4v34.7c-0.7-0.1-2.2-0.5-3.8-0.8v-29c0-2.1-1.5-5-5.3-5 -3.9 0-6.2 3.2-6.2 6h0.2c0.2-1.3 1.1-2.4 2.3-2.4 1.3 0 2.4 0.8 2.4 3.6v8.3c-3.6 0.2-5.8 2.4-5.8 4.8 0 1.4 0.9 3.9 3.6 4v-0.2c-0.9-0.4-1.1-0.9-1.1-1.4 0-1.2 1.2-1.6 2.8-1.6h0.4v13.3c-3.1 1.1-4.5 3.1-4.5 5.7 0 3.5 2.8 6.3 7 6.3 2.9 0 5-0.5 7.7-1.1 2.2-0.5 4.5-1 5.8-1 1.6 0 2.3 0.7 2.3 1.9 0 1.5-0.6 2.2-1.4 2.5v0.2c3.5-0.7 5.5-2.7 5.5-5.8 0-3.2-3.1-5.2-6.5-5.2 -1.8 0-5 0.6-7.6 1.2 -2.9 0.7-5.5 1-6.4 1 -1.5 0-3.3-0.7-3.3-2.6 0-1.8 1.5-3.2 5.1-3.2 2 0 3.9 0.3 6.3 0.9 2.6 0.6 4.3 1.3 6.6 1.3 3.1 0 5.6-1.1 5.6-5.6V17.1l2.3-2.1L195.9 14.7 195.9 14.7zM187.2 28.6c-0.6 0.6-1.2 1.1-2.3 1.1 -1.2 0-1.8-0.6-2.3-1.1V18.2l1.5-1.2 3.1 2.6V28.6L187.2 28.6zM187.2 33.6c-0.5-0.5-1.2-1-2.3-1 -1.1 0-1.9 0.6-2.3 1v-4.4c0.5 0.4 1.2 1 2.3 1 1.1 0 1.8-0.5 2.3-1V33.6L187.2 33.6zM187.2 44c0 1.7-0.9 3.6-3.1 3.6 -0.4 0-1.2-0.1-1.5-0.1V34.1c0.5-0.5 1.2-1.1 2.3-1.1 1.1 0 1.7 0.5 2.3 1.1V44L187.2 44zM205.2 49.6l10.3-6.4v-14l-6.7-4.9 -10.3 5.9v13.9l-2 1.6 0.2 0.3 1.7-1.4L205.2 49.6 205.2 49.6zM204.5 42.4V27.4l5.2 3.8v14.9L204.5 42.4 204.5 42.4zM235.2 24.6c-0.8 0.6-1.5 0.9-2.3 0.9 -0.8 0-1.8-0.5-2.3-1.2 0 0.1-3.8 4.1-3.8 4.1l-3.8-4.1 -6.3 4.3 0.2 0.4 1.7-1.1 2.3 2.5V44l-2.7 2.1 0.3 0.3 1.4-1 5.1 4.3 6.5-4.3 -0.2-0.3 -1.7 1 -2.6-2.4V28.8c1.1 1.2 2.3 2.2 3.7 2.2C233.1 31 234.9 27.9 235.2 24.6L235.2 24.6zM259.6 44.7l-1.9 1.2L247 30l0.6-0.8c1.2 0.7 2.2 1.7 4.4 1.7 2.2 0 5-2.3 5.3-6.6 -0.6 0.8-1.7 1.7-3.5 1.7 -1.3 0-2.6-0.9-3.4-1.7L243.1 35l9.6 14.7 7-4.6L259.6 44.7 259.6 44.7zM246.6 45.1l-1.6 1.1 -2.2-2.2V11.4l-8 5.5c0.9 0.3 2 0.8 2 2.9V44l-2.7 2.1 0.3 0.3 1.4-1 4.7 4.3 6.4-4.2L246.6 45.1 246.6 45.1zM293.5 15.7c0-4.1-3.9-5.4-7.2-5.3v0.4c2 0.2 3.5 1 3.5 2.3 0 0.9-0.7 2.1-2.6 2.1 -1.6 0-4.1-0.9-6.6-1.7 -2.7-0.9-5.2-1.8-7.3-1.8 -4.1 0-7.3 3.1-7.3 6.9 0 3.1 2.4 4.1 3.3 4.5l0.1-0.2c-0.6-0.4-1-0.9-1-2.2 0-1.1 0.8-2.6 2.9-2.6 1.9 0 4.4 0.9 7.8 1.8 2.9 0.8 6 1.6 7.7 1.8v6.7l-3.2 2.7 3.2 2.8v9.2c-1.7 1-3.6 1.3-5.3 1.3 -3.1 0-5.9-0.9-8.2-3.4l8.7-4.2V22.1l-10.7 4.7c1.1-2.8 3.2-4.9 5.5-6.3l-0.1-0.2c-6.3 1.7-12.1 7.5-12.1 14.7 0 8.6 6.9 14.9 14.8 14.9 8.6 0 13.6-6.7 13.5-13.8h-0.2c-1.3 2.7-3.3 5.3-5.7 6.7v-9l3.4-2.7 -3.4-2.7v-6.7C290.3 21.7 293.5 19.6 293.5 15.7L293.5 15.7zM275.5 39.3l-2.5 1.3c-1.5-2-2.5-4.7-2.5-8.3 0-1.5 0.2-3.5 0.7-4.9l4.4-2L275.5 39.3 275.5 39.3zM300 14.1l-4.4 3.7 3.8 4.3 4.4-3.7L300 14.1 300 14.1zM306.8 45.1l-1.6 1.1 -2.2-2.2V29.3l1.9-1.5 -0.3-0.3 -1.6 1.2 -3.7-4.4 -6.1 4.2 0.2 0.4 1.5-1 2 2.5V44l-2.7 2.1 0.3 0.3 1.4-1 4.7 4.3 6.4-4.2L306.8 45.1 306.8 45.1zM340.8 44.9l-1.5 1 -2.4-2.3V29.3l1.9-1.5 -0.3-0.3 -1.7 1.3 -5-4.5 -5.7 4.4 -5-4.4 -5.6 4.4 -3.8-4.4 -6.1 4.2 0.2 0.4 1.5-1 2.2 2.5v13.5l-1.7 1.7 4.8 4.1 4.7-4.2 -1.9-1.8V29.2l1.3-0.9 3.5 3v12.6l-1.6 1.7 4.9 4.1 4.6-4.2 -1.9-1.8V29.2l1.2-1 3.5 3.1v12.4l-1.4 1.5 4.9 4.5 6.5-4.4L340.8 44.9 340.8 44.9zM358.5 41.9l-4.8 3.8 -5.6-4.4v-2.7l9.6-6.8 -4.8-7.5 -10.7 5.9v14.2l7.3 5.3 9.2-7.4L358.5 41.9 358.5 41.9zM348.1 38V27.5l4.6 7.3L348.1 38 348.1 38zM377 36l-4.1-3.1c2.7-2.4 3.7-5.4 3.7-7.6 0-0.3-0.1-0.9-0.1-1.4h-0.2c-0.4 1.1-1.5 2.1-3.1 2.1 -1.6 0-2.6-0.9-3.6-2l-9.4 5.2v7.6l3.6 2.8c-3.6 3.2-4.3 5.2-4.3 7 0 1.9 1.1 3.4 2.9 4.1l0.2-0.3c-0.5-0.4-0.9-0.7-0.9-1.6 0-0.7 0.7-1.8 2.3-1.8 2.1 0 3.3 1.4 4 2.2 0-0.1 9-5.5 9-5.5V36L377 36zM374.9 29.8c-1.4 2.5-4.5 5-6.4 6.4l-2.3-1.9v-7.4c0.9 2 2.8 3.7 5.2 3.7C372.9 30.6 373.8 30.3 374.9 29.8L374.9 29.8zM371 46.4c-1.1-2.4-3.3-4.1-5.9-4.1 -0.6 0-2.5-0.1-4.1 1 1-1.6 3.8-4.5 7.5-6.7l2.5 2.1V46.4L371 46.4z" fill="#1A1A1A" /></svg>
				<h1>The New York Times</h1>
				<h2>Top stories</h2>
				<div className="input-holder">
					<input className="align-input" type="text" placeholder="Filter title or description" onChange={props.handleFilterChange} />
				</div>
			</div>
		</div>
	)
}

export default Masthead;