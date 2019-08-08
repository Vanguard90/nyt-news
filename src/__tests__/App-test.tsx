import React from 'react';
import { shallow, mount, render } from 'enzyme';
import App from '../components/App';
// import topStoriesMock from './mocks/top-story-mock.json';

const topStoriesMock = require('./mocks/top-story-mock.json');

describe('App', () => {

    it('contains Header component', () => {
        expect(mount(<App />).find('Header').length).toBe(1);
    });

    it('contains Masthead component', () => {
        expect(mount(<App />).find('Masthead').length).toBe(1);
    });

    it('contains Footer component', () => {
        expect(mount(<App />).find('Footer').length).toBe(1);
    });

    it('creates a new NewsCard component if correct data is in state', () => {
        const app = mount(<App />);
        app.setState({ news: topStoriesMock.results, filteredNews: topStoriesMock.results });
        expect(app.find('NewsCard').length).toBe(5);
    });

    it('does not create a newsCard component when state is not set', () => {
        const app = shallow(<App />);
        app.setState({ news: [] });
        expect(app.find('NewsCard').length).toBe(0);
    });

    it('filters news titles correctly', () => {
        const app = mount(<App />);
        app.setState({ news: topStoriesMock.results });
        app.find('input').simulate('change', {
            target: {
                value:  'Wooing'
            }
        });
        app.update();
        expect(app.find('NewsCard').length).toBe(1);
    });

    it('filters news descriptions correctly', () => {
        const app = mount(<App />);
        app.setState({ news: topStoriesMock.results });
        app.find('input').simulate('change', {
            target: {
                value:  'The crown prince of Saudi Arabia'
            }
        });
        app.update();
        expect(app.find('NewsCard').length).toBe(1);
    });
});