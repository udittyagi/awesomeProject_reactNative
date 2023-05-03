import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../Text/AppText';

export default function Picker({item, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.pickerItem}>
      <AppText>{item.label}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pickerItem: {
    marginTop: 15,
    paddingHorizontal: 10,
  },
});
