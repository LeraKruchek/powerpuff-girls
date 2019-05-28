import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountToJson } from 'enzyme-to-json';
import { App } from '../../src/components/App';

configure({ adapter: new Adapter() });
// unit tests for the App component
describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {};
      const wrapper = shallow(<App {...props} />);
      expect(wrapper.length).toEqual(1);
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
  });
});
