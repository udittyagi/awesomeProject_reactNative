import {Platform, StyleSheet} from 'react-native';
import colors from '../../configs/color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    alignItems: 'center',
  },
  cardText: {
    fontWeight: '500',
  },
  iconView: ({iconColor}) => ({
    padding: 5,
    backgroundColor: iconColor || colors.white,
    borderRadius: 100,
  }),
  subTitleText: {
    color: colors.mediumGrey,
  },
  textView: {
    marginLeft: 10,
  },
});

export default styles;
