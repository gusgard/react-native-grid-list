import { StyleSheet } from 'react-native';

import { colors } from '@themes';

const borderWidth = 2;

export default StyleSheet.create({
  imageLeft: {
    borderLeftWidth: borderWidth,
    borderColor: colors.white,
  },
  imageRight: {
    borderRightWidth: borderWidth,
    borderColor: colors.white,
  },
  imageCenter: {
    borderRightWidth: borderWidth,
    borderLeftWidth: borderWidth,
    borderColor: colors.white,
  },
  image: {
    alignSelf: 'center',
  },
  separator: {
    borderColor: colors.white,
    borderWidth,
  },
});
