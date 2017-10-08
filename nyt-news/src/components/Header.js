import React from 'react';

class Header extends React.Component {
	render () {
		return (
			<header className="header-holder">
			<nav className="header-item">Go to NYTimes</nav>
			<nav className="header-item"> Today's paper</nav>
			<p className="header-item">Date & Time </p>
			</header>
		)
	}
}

export default Header;