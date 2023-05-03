import {StyleSheet, SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';

export default function SafeView({children, style = {}}) {
  return (
    <SafeAreaView style={[styles.safeView, style]}>
      {/* This View is created so that some of the css which do not work on SafeAreView, will work */}
      <View style={[styles.view, style]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    paddingTop: StatusBar.currentHeight || 0,
    flex: 1,
  },
  view: {
    flex: 1,
  },
});
