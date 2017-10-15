import React from 'react';
import logoAPI from "../img/nyt-api-data-logo.png";

let Footer = function() {
	return (
		<footer>
		<div className="footer">
		<p className="owner"> Made with love by <span>Enes Kirimi</span></p>
		<div className="disclaimer"><img src={logoAPI} alt="nyt-logo-diclaimer-api"/></div>
		</div>
		</footer>
	)
}

export default Footer;