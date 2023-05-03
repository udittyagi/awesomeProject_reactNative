import {Text} from 'react-native';

import globalStyles from '../../../configs/globalStyles';

const AppText = ({style = {}, ...props}) => (
  <Text style={[globalStyles.text, style]} {...props} />
);

export default AppText;
