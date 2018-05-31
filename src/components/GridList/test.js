import { shallow } from 'enzyme';
import React from 'react';
import { Image } from 'react-native';

import GridList from './index';

const logo = { uri: 'https://...' };
const items = [{ id: 1, thumbnail: logo }, { id: 2, thumbnail: logo }];

describe('grid list', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <GridList
        data={items}
        renderItem={({ item }) => <Image source={item.thumbnail} />}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });
  
  it('renders empty list', () => {
    const wrapper = shallow(
      <GridList
        data={[]}
        renderItem={({ item }) => <Image source={item.thumbnail} />}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders showSeparator', () => {
    const wrapper = shallow(
      <GridList
        showSeparator
        data={items}
        renderItem={({ item }) => <Image source={item.thumbnail} />}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders showSeparator with border and width setted', () => {
    const wrapper = shallow(
      <GridList
        separatorBorderWidth={5}
        separatorBorderColor={'tomato'}
        showSeparator
        data={items}
        renderItem={({ item }) => <Image source={item.thumbnail} />}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders showAnimation', () => {
    const wrapper = shallow(
      <GridList
        showAnimation
        data={items}
        renderItem={({ item, stagger }) => (
          <Image source={item.thumbnail} onLoad={() => stagger.start()} />
        )}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders showAnimation with duration and initialBackground setted', () => {
    const wrapper = shallow(
      <GridList
        showAnimation
        animationInitialBackgroundColor={'beige'}
        animationDuration={1000}
        data={items}
        renderItem={({ item, stagger }) => (
          <Image source={item.thumbnail} onLoad={() => stagger.start()} />
        )}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders children', () => {
    const wrapper = shallow(
      <GridList>
        <Image source={items[0].thumbnail} />
        <Image source={items[1].thumbnail} />
      </GridList>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
