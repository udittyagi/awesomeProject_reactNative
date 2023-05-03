import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AppText from '../../Text/AppText';
import colors from '../../../../configs/color';

export default function CategoryPicker({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.menuItemContainer}>
      <View style={styles.iconContainer({color: item.iconColor})}>
        <MaterialIcons color={colors.white} name={item.icon} size={20} />
      </View>
      <AppText style={styles.label}>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: ({color}) => ({
    height: 60,
    width: 60,
    borderRadius: 50,
    backgroundColor: color ? color : colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }),
  menuItemContainer: {
    alignItems: 'center',
    flex: 1,
    paddingVertical: 15,
    width: 60,
  },
  label: {
    textAlign: 'center',
  },
});
