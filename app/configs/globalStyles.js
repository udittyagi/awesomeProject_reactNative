import {Platform, StyleSheet} from 'react-native';
import colors from './color';

export default StyleSheet.create({
  colors,
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Avenir' : 'Roboto',
    fontSize: 16,
    color: colors.darkGrey,
  },
});
