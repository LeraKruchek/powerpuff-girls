import React from 'react';
import { shallow, configure } from 'enzyme';
import { mountToJson } from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';
import EpisodeList from '../../../src/components/common/EpisodesList';

configure({ adapter: new Adapter() });

// unit tests for the App component
describe('EpisodeList component', () => {
  describe('render()', () => {
    it('should render the component', () => {
      const props = { episodes: [] };
      const wrapper = shallow(<EpisodeList {...props} />);
      expect(wrapper.length).toEqual(1);
      expect(mountToJson(wrapper)).toMatchSnapshot();
    });

    it('should load more on button click', () => {
      const mockLoadMore = jest.fn();
      const props = { episodes: [] };
      const wrapper = shallow(<EpisodeList {...props} />);
      wrapper.instance().loadMore = mockLoadMore;
      wrapper.instance().forceUpdate();
      wrapper.update();

      wrapper.find('button').simulate('click');

      expect(mockLoadMore).toHaveBeenCalled();
      expect(wrapper.length).toEqual(1);
    });
  });
});
