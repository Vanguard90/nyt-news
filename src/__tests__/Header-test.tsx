import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header';

function mockCurrentDate(dateToUse: string): void {
    let DATE_TO_USE = new Date(dateToUse);
    let _Date = Date;
    // @ts-ignore -- Next line gives an error but it doesn't have to actually work correctly!
    global.Date = jest.fn(() => DATE_TO_USE); 
    global.Date.UTC = _Date.UTC;
    global.Date.parse = _Date.parse;
    global.Date.now = _Date.now;
}

// jest.spyOn(Date, 'now').mockImplementation(() => 1479427200000)

describe('Header', () => {

    let headerComponent = shallow(<Header />);

    beforeEach(() => {
    })

    afterEach(() => {
     //   headerComponent.unmount();
      });

    it('contains a header tag', () => {
        expect(shallow(<Header />).find('header')).toBeTruthy();
    })

    it('contains multiple nav tags', () => {
        expect(shallow(<Header />).find('nav').length).toBeGreaterThan(1);
    })

    it('contains an svg', () => {
        expect(shallow(<Header />).find('svg').length).toBe(1);
    })

    it('displays correct date for January & Monday', () => {
        mockCurrentDate('2018-01-01T04:41:20');
        headerComponent.setState({ day: 1, month: "January", year: 2018, weekDay: "Monday" });
        expect(headerComponent.find('p').html()).toContain('Monday, 1 January, 2018');
    })

    it('displays correct date for February & Wednesday', () => {
        mockCurrentDate('2018-02-07T04:45:20');
        headerComponent.setState({ day: 7, month: "February", year: 2018, weekDay: "Wednesday" });
        expect(headerComponent.find('p').html()).toContain('Wednesday, 7 February, 2018');
    })

    it('displays correct date for March & Thursday', () => {
        mockCurrentDate('2018-03-01T01:41:20');
        headerComponent.setState({ day: 1, month: "March", year: 2018, weekDay: "Thursday" });
        expect(headerComponent.find('p').html()).toContain('Thursday, 1 March, 2018');
    })

    it('displays correct date for April & Friday', () => {
        mockCurrentDate('2018-04-06T01:41:20');
        headerComponent.setState({ day: 6, month: "April", year: 2018, weekDay: "Friday" });
        expect(headerComponent.find('p').html()).toContain('Friday, 6 April, 2018');
    })

    it('displays correct date for May & Saturday', () => {
        mockCurrentDate('2018-05-05T01:41:20');
        headerComponent.setState({ day: 5, month: "May", year: 2018, weekDay: "Saturday" });
        expect(headerComponent.find('p').html()).toContain('Saturday, 5 May, 2018');
    })

    it('displays correct date for June & Sunday', () => {
        mockCurrentDate('2018-06-03T01:41:20');
        headerComponent.setState({ day: 3, month: "June", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 3 June, 2018');
    })

    it('displays correct date for July', () => {
        mockCurrentDate('2018-07-01T01:41:20');
        headerComponent.setState({ day: 1, month: "July", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 1 July, 2018');
    })

    it('displays correct date for August', () => {
        mockCurrentDate('2018-08-05T01:41:20');
        headerComponent.setState({ day: 5, month: "August", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 5 August, 2018');
    })

    it('displays correct date for September', () => {
        mockCurrentDate('2018-09-02T01:41:20');
        headerComponent.setState({ day: 2, month: "September", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 2 September, 2018');
    })

    it('displays correct date for October', () => {
        headerComponent.setState({ day: 7, month: "October", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 7 October, 2018');
    })

    it('displays correct date for November', () => {
        headerComponent.setState({ day: 4, month: "November", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 4 November, 2018');
    })

    it('displays correct date for December & Tuesday', () => {
        headerComponent.setState({ day: 11, month: "December", year: 2018, weekDay: "Tuesday" });
        expect(headerComponent.find('p').html()).toContain('Tuesday, 11 December, 2018');
    })

    it('calls componentDidMount on load', () => {
        jest.spyOn(Header.prototype, 'componentDidMount');
        shallow(<Header />);
        expect(Header.prototype.componentDidMount).toHaveBeenCalled();
    });

    it('calls setDate function', () => {
        jest.spyOn(Header.prototype, 'setDate');
        shallow(<Header />);
        expect(Header.prototype.setDate).toHaveBeenCalled();
    });

});
