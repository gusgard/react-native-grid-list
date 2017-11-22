import { width } from '../../themes';

export default ({
  numColumns,
  separatorBorderWidth,
  separatorBorderColor,
  animationInitialBackgroundColor,
}) => ({
  itemContainer: {
    height: width / numColumns,
    width: width / numColumns,
  },
  itemContainerSeparator: {
    width: width / numColumns - separatorBorderWidth / numColumns,
    borderLeftWidth: separatorBorderWidth,
    borderColor: separatorBorderColor,
  },
  itemContainerLast: {
    height: width / numColumns,
    width: width / numColumns,
  },
  itemContainerSeparatorLast: {
    borderLeftWidth: separatorBorderWidth,
    width: (width + (numColumns - 1) * separatorBorderWidth) / numColumns,
    borderRightWidth: separatorBorderWidth,
    borderColor: separatorBorderColor,
  },
  itemContainerAnimationStart: {
    backgroundColor: animationInitialBackgroundColor,
  },
  itemContainerAnimationEnd: {
    backgroundColor: separatorBorderColor,
  },
  separator: {
    borderColor: separatorBorderColor,
    borderWidth: separatorBorderWidth * 0.5,
  },
  container: {
    borderRightWidth: separatorBorderWidth,
    borderTopWidth: separatorBorderWidth,
    borderBottomWidth: separatorBorderWidth,
    borderColor: separatorBorderColor,
  },
});
