import React from 'react';
import { shallow } from 'enzyme';
import Header from '../components/Header';

var MockDate = require('mockdate'); // U.S. Style date!!!

describe('Header', () => {

    afterEach(() => {
     MockDate.reset();
      });

    it('contains a header tag', () => {
        expect(shallow(<Header />).find('header')).toBeTruthy();
    });

    it('contains multiple nav tags', () => {
        expect(shallow(<Header />).find('nav').length).toBeGreaterThan(1);
    });

    it('contains an svg', () => {
        expect(shallow(<Header />).find('svg').length).toBe(1);
    });

    it('displays correct date for January & Monday', () => {
        MockDate.set('1/1/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Monday, 1 January, 2018');
        // the reason why I'm setting a new shallow(<Header />) at every test is ti instantiate it every time seperately.
    });

    it('displays correct date for February & Wednesday', () => {
        MockDate.set('2/7/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Wednesday, 7 February, 2018');
    });

    it('displays correct date for March & Thursday', () => {
        MockDate.set('3/1/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Thursday, 1 March, 2018');
    });

    it('displays correct date for April & Friday', () => {
        MockDate.set('4/6/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Friday, 6 April, 2018');
    });

    it('displays correct date for May & Saturday', () => {
        MockDate.set('5/5/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Saturday, 5 May, 2018');
    });

    it('displays correct date for June & Sunday', () => {
        MockDate.set('6/3/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Sunday, 3 June, 2018');
    });

    it('displays correct date for July', () => {
        MockDate.set('7/1/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Sunday, 1 July, 2018');
    });

    it('displays correct date for August', () => {
        MockDate.set('8/5/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Sunday, 5 August, 2018');
    });

    it('displays correct date for September', () => {
        MockDate.set('9/2/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Sunday, 2 September, 2018');
    });

    it('displays correct date for October', () => {
        MockDate.set('10/7/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Sunday, 7 October, 2018');
    });

    it('displays correct date for November', () => {
        MockDate.set('11/4/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Sunday, 4 November, 2018');
    });

    it('displays correct date for December & Tuesday', () => {
        MockDate.set('12/11/2018');
        expect(shallow(<Header />).find('p').html()).toContain('Tuesday, 11 December, 2018');
    });

});
