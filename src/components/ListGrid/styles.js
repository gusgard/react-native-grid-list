import { StyleSheet } from 'react-native';

import { colors } from '../../themes';

const borderWidth = 5;

export default StyleSheet.create({
  imageLeft: {
    borderLeftWidth: borderWidth,
    borderColor: colors.white,
  },
  imageRight: {
    borderLeftWidth: borderWidth,
    borderRightWidth: borderWidth,
    borderColor: colors.white,
  },
  imageCenter: {
    borderLeftWidth: borderWidth,
    borderColor: colors.white,
  },
  separator: {
    borderColor: colors.white,
    // paddingVertical: borderWidth * 0.5,
    borderWidth: borderWidth * 0.5,
  },
  container: {
    borderTopWidth: borderWidth,
    borderBottomWidth: borderWidth,
    borderColor: colors.white,
  },
});
