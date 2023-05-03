import {View, TextInput} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import colors from '../../../configs/color';
import globalStyles from '../../../configs/globalStyles';
import styles from './AppTextInput.styles';

export default function AppTextInput({
  value,
  onChangeText,
  icon,
  containerStyle,
  inputStyle,
  width,
  ...props
}) {
  return (
    <View style={[styles.container({width}), containerStyle]}>
      {icon && (
        <MaterialIcons name={icon} size={20} color={colors.mediumGrey} />
      )}
      <TextInput
        style={[globalStyles.text, styles.textInput, inputStyle]}
        placeholderTextColor={colors.mediumGrey}
        value={value}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
}
