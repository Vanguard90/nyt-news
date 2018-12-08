import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Masthead from '../components/Masthead';


describe('Masthead', () => {
    
    it('should contain an h1 tag', () => {
        expect(mount(<Masthead />).find('h1').length).toBe(1);
    })

    it('h1 tag should contain correct text', () => {
        expect(mount(<Masthead />).find('h1').html()).toMatch('The New York Times');
    })

    it('should contain an h2 tag', () => {
        expect(mount(<Masthead />).find('h2').length).toBe(1);
    })

    it('h2 tag should contain correct text', () => {
        expect(mount(<Masthead />).find('h2').html()).toMatch('Top stories');
    })

    it('should contain an svg', () => {
        expect(mount(<Masthead />).find('svg').length).toBe(1);
    })
  
  });