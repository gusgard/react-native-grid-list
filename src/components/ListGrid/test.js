import { shallow } from 'enzyme';
import React from 'react';
import { Image } from 'react-native';

import ListGrid from './index';

const logo = { uri: 'https://...' };
const items = [{ id: 1, thumbnail: logo }, { id: 2, thumbnail: logo }];

it('renders correctly', () => {
  const wrapper = shallow(
    <ListGrid
      data={items}
      renderItem={({ item }) => <Image source={item.thumbnail} />}
    />,
  );
  expect(wrapper).toMatchSnapshot();
});
