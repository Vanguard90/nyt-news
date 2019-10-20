import React from 'react';
import { mount } from 'enzyme';
import Masthead from '../components/Masthead';


describe('Masthead', () => {
    
    const component = mount(<Masthead />);
    
    it('should contain an h1 tag', () => {
        expect(component.find('h1').length).toBe(1);
    });

    it('h1 tag should contain correct text', () => {
        expect(component.find('h1').html()).toMatch('The New York Times');
    });

    it('should contain an h2 tag', () => {
        expect(component.find('h2').length).toBe(1);
    });

    it('h2 tag should contain correct text', () => {
        expect(component.find('h2').html()).toMatch('Top stories');
    });

    it('should contain an svg', () => {
        expect(component.find('svg').length).toBe(1);
    });
  
  });