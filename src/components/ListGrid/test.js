import { shallow } from 'enzyme';
import React from 'react';

import { ListGrid } from '@components';

const logo = { uri: 'https://...' };
const items = [{ id: 1, picture: logo }, { id: 2, picture: logo }];

it('renders correctly', () => {
  const wrapper = shallow(<ListGrid items={items} />);
  expect(wrapper).toMatchSnapshot();
});
