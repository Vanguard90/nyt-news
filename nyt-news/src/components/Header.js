import React from 'react';

//Below is a functional component
class Header extends React.Component {

	constructor(props) {
		super(props);
		this.dateCall = this.dateCall.bind(this);
		this.state = {day: 0, month: "", year: 0, weekDay:""};
	}


	componentDidMount() {

	this.dateCall();

	}

	dateCall() {

	let currentDate = new Date();
	let day = this.setState({day: currentDate.getDate()});
	let year = this.setState({year: currentDate.getFullYear()});
	let month = currentDate.getMonth();
	let weekDay = currentDate.getDay();
	switch (month) {
    case 1:
        month = "January";
        break;
    case 2:
        month = "February";
        break;
    case 3:
        month = "March";
        break;
    case 4:
        month = "April";
        break;
    case 5:
        month = "May";
        break;
    case 6:
        month = "June";
        break;
    case 7:
        month = "July";
        break;
	case 8:
        month = "August";
        break;
	case 9:
        month = "September";
        break;
	case 10:
        month = "October";
        break;
	case 9:
        month = "November";
        break;
	case 9:
        month = "December";
        break;
    }
    	switch (weekDay) {
    case 0:
        weekDay = "Monday";
        break;
    case 1:
        weekDay = "Tuesday";
        break;
    case 2:
        weekDay = "Wednesday";
        break;
    case 3:
        weekDay = "Thursday";
        break;
    case 4:
        weekDay = "Friday";
        break;
    case 5:
        weekDay = "Saturday";
        break;
    case 6:
        weekDay = "Sunday";
        break;
    }
    this.setState({month: month});
    this.setState({weekDay: weekDay});
	}


	render() {
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
		<nav className="header-item"><p className="date-time">{this.state.weekDay}, {this.state.day} {this.state.month }, {this.state.year}</p></nav>
		</header>
	)
}
}

export default Header;