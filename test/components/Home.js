import React from 'react';
import { shallow, configure } from 'enzyme';
import assert from 'assert';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { Home } from '../../src/components/Home';

// unit tests for the Home component
describe('Home component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = { dispatch: () => {}, show: null };
      const wrapper = shallow(<Home {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
