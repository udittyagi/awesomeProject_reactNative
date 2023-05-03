import {TouchableOpacity} from 'react-native';

import ButtonText from '../Text/ButtonText';
import styles from './AppButton.styles';

const AppButton = ({title, onPress, style = {}, ...props}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[styles.button(props), style]}>
      <ButtonText>{title}</ButtonText>
    </TouchableOpacity>
  );
};

export default AppButton;
