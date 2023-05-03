import React from 'react';
import {StyleSheet} from 'react-native';
import {useFormikContext} from 'formik';

import AppButton from '../AppButton/AppButton';

export default function SubmitButton({title}) {
  const {handleSubmit} = useFormikContext();
  return (
    <AppButton
      title={title}
      style={styles.mrTop}
      onPress={handleSubmit}
      color="secondary"
    />
  );
}

const styles = StyleSheet.create({
  mrTop: {
    marginTop: 20,
  },
});
