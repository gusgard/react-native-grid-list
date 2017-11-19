import { shallow } from 'enzyme';
import React from 'react';

import ListGrid from './index';

const logo = { uri: 'https://...' };
const items = [{ id: 1, thumbnail: logo }, { id: 2, thumbnail: logo }];

it('renders correctly', () => {
  const wrapper = shallow(<ListGrid items={items} />);
  expect(wrapper).toMatchSnapshot();
});
