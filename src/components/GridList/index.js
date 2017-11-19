import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Animated, ViewPropTypes, View, FlatList } from 'react-native';

import { width } from '../../themes';

import styles from './styles';

const calcGridDimension = numColumns => ({
  height: width / numColumns,
  width: width / numColumns,
});

export default class GridList extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    numColumns: PropTypes.number.isRequired,
    renderItem: PropTypes.func.isRequired,
    showSeparator: PropTypes.bool,
    showAnimation: PropTypes.bool,
    animationDuration: PropTypes.number,
    itemStyle: ViewPropTypes.style,
  };

  static defaultProps = {
    numColumns: 3,
    itemStyle: {},
    showSeparator: false,
    showAnimation: false,
    animationDuration: 500,
  };

  componentWillMount() {
    if (this.props.showAnimation) {
      const { data, numColumns, animationDuration } = this.props;
      this.animatedValue = [];

      this.stagger = data.map((_, index) => {
        this.animatedValue[index] = new Animated.Value(0);
        return Animated.stagger(0, [
          Animated.timing(this.animatedValue[index], {
            toValue: 1,
            duration: animationDuration * Math.ceil((index + 1) / numColumns),
          }),
        ]);
      });
    }
  }
  itemDimension = calcGridDimension(this.props.numColumns);

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index }) => {
    const {
      showAnimation,
      showSeparator,
      renderItem,
      numColumns,
      itemStyle,
    } = this.props;
    let style = {};
    if (showSeparator) {
      const position = index % numColumns;
      if (position === 0 && numColumns !== 1) {
        style = styles.imageLeft;
      } else if (position === numColumns - 1) {
        style = styles.imageRight;
      } else {
        style = styles.imageCenter;
      }
    }

    return showAnimation ? (
      <Animated.View
        style={[
          style,
          this.itemDimension,
          { opacity: this.animatedValue[index] },
          itemStyle,
        ]}
      >
        {renderItem({ item, index, stagger: this.stagger[index] })}
      </Animated.View>
    ) : (
      <View style={[style, this.itemDimension, itemStyle]}>
        {renderItem({ item, index })}
      </View>
    );
  };

  render() {
    const { showSeparator, ...props } = this.props;
    return (
      <FlatList
        contentContainerStyle={styles.container}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={() =>
          showSeparator ? <View style={styles.separator} /> : null
        }
        showsVerticalScrollIndicator={false}
        {...props}
        renderItem={this._renderItem}
      />
    );
  }
}
