import React from 'react';
import { shallow, configure } from 'enzyme';
import assert from 'assert';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { App } from '../../src/components/App';

// unit tests for the App component
describe('App component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = {};
      const wrapper = shallow(<App {...props} />);
      assert.equal(wrapper.length, 1);
    });
  });
});
