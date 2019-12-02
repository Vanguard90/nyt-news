import React from 'react';
// import logoAPI from "../img/nyt-api-data-logo.png";

const logoAPI = require('../img/nyt-api-data-logo.png');

const Footer: React.FC = function () {
	return (
		<footer>
			<div className="footer">
				<div className="disclaimer"><img src={logoAPI} alt="nyt-logo-diclaimer-api" /></div>
				<p className="owner"> Made with love by <span>Enes Kirimi</span></p>
			</div>
		</footer>
	)
}

export default Footer;