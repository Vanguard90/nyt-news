import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
import topStoriesMock from './mocks/top-story-mock.json';

describe('App', () => {

    it('contains Header component', () => {
        expect(mount(<App />).find('Header').length).toBe(1);
    })

    it('contains Masthead component', () => {
        expect(mount(<App />).find('Masthead').length).toBe(1);
    })

    it('contains Footer component', () => {
        expect(mount(<App />).find('Footer').length).toBe(1);
    })
    it('creates a new NewsCard component if correct data is in state', () => {
        const app = mount(<App />);
        app.setState({ news: topStoriesMock.results });
        expect(app.find('NewsCard').length).toBe(5);
    })
});