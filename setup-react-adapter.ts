import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-fetch-mock'; // Required for typescript
require('jest-fetch-mock').enableMocks(); // enable fetch mocking globally
const globalAny:any = global;

class XMLHttpRequest {}
globalAny.XMLHttpRequest = XMLHttpRequest;

enzyme.configure({ adapter: new Adapter() });

// This file is for creating an adapter before every test, so that we are not repeating it at every test file