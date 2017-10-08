import React from 'react';

//Below is a functional component
function Header(){
	return (
		<header className="header-holder">
		<nav className="header-item">Go to NYTimes</nav>
		<nav className="header-item"> Today's paper</nav>
		<p className="header-item">Date & Time </p>
		</header>
	)
}

export default Header;