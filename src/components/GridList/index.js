import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Animated, ViewPropTypes, View, FlatList } from 'react-native';

import { colors } from '../../themes';
import generateStyles from './styles';

export default class GridList extends PureComponent {
  static propTypes = {
    animationDuration: PropTypes.number,
    animationInitialBackgroundColor: PropTypes.string,
    data: PropTypes.array.isRequired,
    itemStyle: ViewPropTypes.style,
    numColumns: PropTypes.number.isRequired,
    renderItem: PropTypes.func.isRequired,
    separatorBorderColor: PropTypes.string,
    separatorBorderWidth: PropTypes.number,
    showAnimation: PropTypes.bool,
    showSeparator: PropTypes.bool,
  };

  static defaultProps = {
    numColumns: 3,
    itemStyle: {},
    showSeparator: false,
    showAnimation: false,
    animationDuration: 500,
    separatorBorderWidth: 0,
    separatorBorderColor: colors.white,
    animationInitialBackgroundColor: colors.white,
  };

  componentWillMount() {
    const {
      separatorBorderWidth,
      separatorBorderColor,
      numColumns,
      animationInitialBackgroundColor,
      showSeparator,
      showAnimation,
    } = this.props;

    const stylesOptions = {
      numColumns,
    };

    if (showSeparator) {
      stylesOptions.separatorBorderWidth = separatorBorderWidth;
      stylesOptions.separatorBorderColor = separatorBorderColor;
    }
    if (showAnimation) {
      stylesOptions.animationInitialBackgroundColor = animationInitialBackgroundColor;
    }
    this.styles = generateStyles(stylesOptions);

    this.animate();
  }
  componentWillUpdate() {
    this.animate();
  }
  animate() {
    if (this.props.showAnimation) {
      const { data, numColumns, animationDuration } = this.props;
      this.animatedValue = [];

      this.animations = data.map((_, index) => {
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

  _keyExtractor = (item, index) => index;

  _renderItem = ({ item, index }) => {
    const { showAnimation, showSeparator, renderItem, itemStyle } = this.props;

    const viewStyles = [];
    viewStyles.push(this.styles.itemContainer);
    if (showSeparator) {
      viewStyles.push(this.styles.itemContainerSeparator);
    }
    if (showAnimation) {
      viewStyles.push(this.styles.itemContainerAnimationStart);
    }

    viewStyles.push(itemStyle);

    return (
      <View style={viewStyles}>
        {showAnimation ? (
          <Animated.View
            style={[
              this.styles.itemContainerAnimationEnd,
              { opacity: this.animatedValue[index] },
            ]}
          >
            {renderItem({ item, index, animation: this.animations[index] })}
          </Animated.View>
        ) : (
          renderItem({ item, index })
        )}
      </View>
    );
  };

  render() {
    const { showSeparator, ...props } = this.props;
    return (
      <FlatList
        contentContainerStyle={showSeparator && this.styles.container}
        keyExtractor={this._keyExtractor}
        ItemSeparatorComponent={() =>
          showSeparator ? <View style={this.styles.separator} /> : null
        }
        showsVerticalScrollIndicator={false}
        {...props}
        renderItem={this._renderItem}
      />
    );
  }
}
