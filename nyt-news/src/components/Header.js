import React from 'react';
import TodaysPaperSVG from '../img/svg/todayspaper.svg';

//Below is a functional component
function Header(){
	return (
		<header className="header-holder">
		<nav className="header-item"><a className="todayspaper-link" href="https://www.nytimes.com/" target="_blank">Go to NYTimes</a></nav>
		<nav className="header-item"><a className="todayspaper-link" href="https://www.nytimes.com/pages/todayspaper/index.html" target="_blank"><i className="todays-paper-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
<path d="M15,1H4C3.4,1,3,1.5,3,2v2.5H1c-0.5,0-1,0.4-1,1v6v1.8c0,1,0.9,1.8,2,1.8h2l0,0h8.5H15c0.5,0,1-0.5,1-1V2
	C16,1.5,15.5,1,15,1 M15,14H4V2h11V14z"/>
<path d="M13,5V4h-0.5H6v1"/>
<path d="M6,6h7v1H6V6z"/>
<path d="M6,8h7v1H6V8z"/>
</svg>
</i>Today's paper
</a>
</nav>
		<p className="header-item">Date & Time </p>
		</header>
	)
}

export default Header;