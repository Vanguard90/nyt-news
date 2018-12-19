import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
    
    const constantDate = new Date('2017-06-13T04:41:20');

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

    it('displays correct date', () => {
        const headerComponent = mount(<Header />);
        headerComponent.setState( { day: 11, month: "December", year: 2018, weekDay: "Tuesday"} );
       expect(headerComponent.find('p').html()).toContain('Tuesday, 11 December, 2018');
    }) // // Do this for all other posibilities to increase the coverage.

    it('calls componentDidMount on load', () => {
            jest.spyOn(Header.prototype, 'componentDidMount');
            shallow(<Header />);
            expect(Header.prototype.componentDidMount).toHaveBeenCalled();
    });

});
