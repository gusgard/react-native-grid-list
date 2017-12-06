import { width } from '../../themes';

export default ({
  numColumns,
  separatorBorderWidth,
  separatorBorderColor,
  animationInitialBackgroundColor,
}) => ({
  itemContainer: {
    maxHeight: width / numColumns,
    flex: 1,
  },
  itemContainerSeparator: {
    flex: 1,
    borderLeftWidth: separatorBorderWidth,
    borderColor: separatorBorderColor,
  },
  itemContainerAnimationStart: {
    backgroundColor: animationInitialBackgroundColor,
  },
  itemContainerAnimationEnd: {
    backgroundColor: separatorBorderColor,
    width: '100%',
    height: '100%',
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
