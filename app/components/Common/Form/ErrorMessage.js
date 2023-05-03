import {StyleSheet} from 'react-native';
import React from 'react';

import AppText from '../Text/AppText';

export default function ErrorMessage({error, visible}) {
  if (!error || !visible) {
    return null;
  }
  return <AppText style={style.errorText}>{error}</AppText>;
}

const style = StyleSheet.create({
  errorText: {
    color: 'red',
    fontSize: 12,
  },
});
