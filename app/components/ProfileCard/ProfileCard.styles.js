import {Platform, StyleSheet} from 'react-native';
import colors from '../../configs/color';

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 50,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  cardText: {
    fontWeight: '500',
  },
  subTitleText: {
    color: colors.mediumGrey,
  },
});

export default styles;
