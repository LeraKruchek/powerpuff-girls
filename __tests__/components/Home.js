import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mountToJson } from 'enzyme-to-json';
import { Home } from '../../src/components/Home';

configure({ adapter: new Adapter() });

// unit tests for the Home component
describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = { dispatch: () => {}, show: null };
      const wrapper = shallow(<Home {...props} />);
      expect(wrapper.length).toEqual(1);
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });
  });
});
