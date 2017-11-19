import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, Image } from 'react-native';

import { width, horizontal } from '../../themes';

import styles from './styles';

const space = horizontal.xxSmall;
const calcGridDimension = numColumns => ({
  height: width / numColumns - space,
  width: width / numColumns - space,
});

export default class ListGrid extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    numColumns: PropTypes.number.isRequired,
  };

  static defaultProps = {
    numColumns: 3,
  };

  state = {
    index: 0,
  };

  itemDimension = calcGridDimension(this.props.numColumns);

  keyExtractor = item => item.id;

  renderItem = ({ item, index }) => {
    const { numColumns } = this.props;
    const position = index % numColumns;
    let style = styles.imageCenter;
    if (position === 0) {
      style = styles.imageRight;
    } else if (position === numColumns - 1) {
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
    const { data, numColumns } = this.props;
    return (
      <FlatList
        numColumns={numColumns}
        data={data}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    );
  }
}
