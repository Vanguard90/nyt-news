import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
enzyme.configure({ adapter: new Adapter() });

// This file is for creating an adapter before every test, so that we are not repeating it at every test file