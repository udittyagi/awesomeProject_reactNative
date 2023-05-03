import {StyleSheet} from 'react-native';
import colors from '../../../configs/color';

const styles = StyleSheet.create({
  container: ({width}) => ({
    width: width ? width : '100%',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.lightGrey,
  }),
  textInput: {
    paddingHorizontal: 10,
    flex: 1,
  },
});

export default styles;
