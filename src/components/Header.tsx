import React from 'react';

interface IHeaderState {
    weekDay: string;
    day: number;
    month: string;
    year: number;
}
class Header extends React.Component<{}, IHeaderState> {

	constructor(props) {
		super(props);
		this.dateCall = this.dateCall.bind(this);
		this.state = {day: 0, month: "", year: 0, weekDay:""};
	}

	componentDidMount() {

	this.dateCall();

	}

	dateCall() {

	const currentDate = new Date();
	this.setState({day: currentDate.getDate()});
	this.setState({year: currentDate.getFullYear()});
	const month = currentDate.getMonth();
    const weekDay = currentDate.getDay();
    let monthString: string;
    let weekDayString: string;

	switch (month) {
    case 0:
        monthString = "January";
        break;
    case 1:
        monthString = "February";
        break;
    case 2:
        monthString = "March";
        break;
    case 3:
        monthString = "April";
        break;
    case 4:
        monthString = "May";
        break;
    case 5:
        monthString = "June";
        break;
    case 6:
        monthString = "July";
        break;
	case 7:
        monthString = "August";
        break;
	case 8:
        monthString = "September";
        break;
	case 9:
        monthString = "October";
        break;
	case 10:
        monthString = "November";
        break;
	case 11:
        monthString = "December";
        break;
    default:
    	monthString = "";
    	break;
    }
    	switch (weekDay) {
    case 0:
        weekDayString = "Sunday";
        break;
    case 1:
        weekDayString = "Monday";
        break;
    case 2:
        weekDayString = "Tuesday";
        break;
    case 3:
        weekDayString = "Wednesday";
        break;
    case 4:
        weekDayString = "Thursday";
        break;
    case 5:
        weekDayString = "Friday";
        break;
    case 6:
        weekDayString = "Saturday";
        break;
    default:
   		weekDayString = "";
    	break;
    }
    this.setState({month: monthString});
    this.setState({weekDay: weekDayString});
	}


	render() {
	return (
		<header className="header-holder">
		<nav className="header-item"><a className="todayspaper-link" href="https://www.nytimes.com/" target="_blank" rel="noopener noreferrer">Go to NYTimes</a></nav>
		<nav className="header-item"><a className="todayspaper-link" href="https://www.nytimes.com/pages/todayspaper/index.html" target="_blank" rel="noopener noreferrer"><i className="todays-paper-icon"><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 16 16">
<path d="M15,1H4C3.4,1,3,1.5,3,2v2.5H1c-0.5,0-1,0.4-1,1v6v1.8c0,1,0.9,1.8,2,1.8h2l0,0h8.5H15c0.5,0,1-0.5,1-1V2
	C16,1.5,15.5,1,15,1 M15,14H4V2h11V14z"/>
<path d="M13,5V4h-0.5H6v1"/>
<path d="M6,6h7v1H6V6z"/>
<path d="M6,8h7v1H6V8z"/>
</svg>
</i>Today's paper
</a>
</nav>
		<nav className="header-item"><p className="date-time">{this.state.weekDay}, {this.state.day} {this.state.month}, {this.state.year}</p></nav>
		</header>
	)
}
}

export default Header;