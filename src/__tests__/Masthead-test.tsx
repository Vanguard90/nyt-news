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


//   import React from 'react';
// import { shallow, mount, render } from 'enzyme';

// import Foo from '../Foo';

// describe('A suite', function() {
//   it('should render without throwing an error', function() {
//     expect(shallow(<Foo />).contains(<div className="foo">Bar</div>)).toBe(true);
//   });

//   it('should be selectable by class "foo"', function() {
//     expect(shallow(<Foo />).is('.foo')).toBe(true);
//   });

//   it('should mount in a full DOM', function() {
//     expect(mount(<Foo />).find('.foo').length).toBe(1);
//   });

//   it('should render to static HTML', function() {
//     expect(render(<Foo />).text()).toEqual('Bar');
//   });
// });
