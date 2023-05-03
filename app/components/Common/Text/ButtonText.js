import {Text} from 'react-native';

import {buttonTextStyles} from './Text.styles';
import globalStyles from '../../../configs/globalStyles';

const ButtonText = ({style = {}, ...props}) => (
  <Text style={[globalStyles.text, buttonTextStyles.text, style]} {...props} />
);

export default ButtonText;
