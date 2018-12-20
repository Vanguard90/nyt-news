import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {

    const constantDate = new Date('2017-06-13T04:41:20');
    const headerComponent = shallow(<Header />);

    beforeEach(() => {
        const test = jest.mock('../components/Header'); // Header is now a mock constructor
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

        headerComponent.setState({ day: 1, month: "January", year: 2018, weekDay: "Monday" });
        expect(headerComponent.find('p').html()).toContain('Monday, 1 January, 2018');
    })

    it('displays correct date for February & Wednesday', () => {
        headerComponent.setState({ day: 7, month: "February", year: 2018, weekDay: "Wednesday" });
        expect(headerComponent.find('p').html()).toContain('Wednesday, 7 February, 2018');
    })

    it('displays correct date for March & Thursday', () => {
        headerComponent.setState({ day: 1, month: "March", year: 2018, weekDay: "Thursday" });
        expect(headerComponent.find('p').html()).toContain('Thursday, 1 March, 2018');
    })

    it('displays correct date for April & Friday', () => {
        headerComponent.setState({ day: 6, month: "April", year: 2018, weekDay: "Friday" });
        expect(headerComponent.find('p').html()).toContain('Friday, 6 April, 2018');
    })

    it('displays correct date for May & Saturday', () => {
        headerComponent.setState({ day: 5, month: "May", year: 2018, weekDay: "Saturday" });
        expect(headerComponent.find('p').html()).toContain('Saturday, 5 May, 2018');
    })

    it('displays correct date for June & Sunday', () => {
        headerComponent.setState({ day: 3, month: "June", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 3 June, 2018');
    })

    it('displays correct date for July', () => {
        headerComponent.setState({ day: 1, month: "July", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 1 July, 2018');
    })

    it('displays correct date for August', () => {
        headerComponent.setState({ day: 5, month: "August", year: 2018, weekDay: "Sunday" });
        expect(headerComponent.find('p').html()).toContain('Sunday, 5 August, 2018');
    })

    it('displays correct date for September', () => {
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

});
