import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from '../components/Footer';
import logoAPI from "../img/nyt-api-data-logo.png";


describe('Footer', () => {

    it('should have a paragraph tag with an owner class', () => {
        expect(mount(<Footer />).find('p.owner').length).toBe(1);
    })
    
    it('"owner" paragraph should contain correct text', () => {
        expect(mount(<Footer />).find('p.owner').html()).toMatch('Made with love by <span>Enes Kirimi</span>');
    })

    it('img tag should have an alt text', () => {
        expect(shallow(<Footer />).find('img').prop('alt')).toBeDefined(); 
    }) // So apparently alt can be considered a prop

    it('img tag should have the correct image', () => {
        expect(shallow(<Footer />).find('img').prop('src')).toEqual(logoAPI);
    })


  });
