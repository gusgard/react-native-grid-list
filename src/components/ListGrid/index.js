import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image } from 'react-native';

import { width, horizontal } from '@themes';

import styles from './styles';

const space = horizontal.xxSmall;
const calcGridDimension = numberOfColumns => ({
  height: width / numberOfColumns - space,
  width: width / numberOfColumns - space,
});

export default class ListGrid extends PureComponent {
  static propTypes = {
    items: PropTypes.array.isRequired,
    numberOfColumns: PropTypes.number.isRequired,
  };

  static defaultProps = {
    numberOfColumns: 3,
  };

  state = {
    index: 0,
  };

  itemDimension = calcGridDimension(this.props.numberOfColumns);

  keyExtractor = item => item.id;

  renderItem = ({ item, index }) => {
    const { numberOfColumns } = this.props;
    const position = index % numberOfColumns;
    let style = styles.imageCenter;
    if (position === 0) {
      style = styles.imageRight;
    } else if (position === numberOfColumns - 1) {
      style = styles.imageLeft;
    }
    return (
      <View style={style}>
        <Image
          style={[styles.image, this.itemDimension]}
          source={item.thumbnail}
          resizeMethod="resize"
        />
      </View>
    );
  };

  render() {
    const { items, numberOfColumns } = this.props;
    return (
      <FlatList
        numColumns={numberOfColumns}
        data={items}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }
}
