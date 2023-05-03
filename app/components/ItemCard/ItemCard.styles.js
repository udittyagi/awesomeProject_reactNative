import {StyleSheet, Platform} from 'react-native';

import colors from '../../configs/color';

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: '100%',
    backgroundColor: colors.white,
    paddingBottom: 10,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '80%',
  },
  textWrapper: {
    paddingLeft: 20,
    marginTop: 10,
  },
  subTitleText: {
    marginTop: 5,
    color: colors.primary,
    fontWeight: 600,
  },
});

export default styles;
