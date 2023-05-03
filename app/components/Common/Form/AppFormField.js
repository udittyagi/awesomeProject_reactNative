import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import AppTextInput from '../AppTextInput/AppTextInput';

export default function AppFormField({name, ...props}) {
  const {handleBlur, handleChange, values, errors, touched} =
    useFormikContext();
  return (
    <>
      <AppTextInput
        containerStyle={styles.container}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={values[name]}
        {...props}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
