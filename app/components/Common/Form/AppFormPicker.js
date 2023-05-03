import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useFormikContext} from 'formik';

import AppPicker from '../AppPicker/AppPicker';
import ErrorMessage from './ErrorMessage';

export default function AppFormPicker({
  ItemPickerComponent,
  name,
  numColumns,
  options,
  showIconView,
  ...props
}) {
  const {setFieldValue, setFieldTouched, values, touched, errors} =
    useFormikContext();

  const onChange = val => {
    setFieldValue(name, val);
  };

  const onClose = () => {
    setFieldTouched(name, true);
  };

  return (
    <View style={style.container}>
      <AppPicker
        value={values[name]}
        options={options}
        onChange={onChange}
        onClose={onClose}
        showIconView={showIconView}
        ItemPickerComponent={ItemPickerComponent}
        numColumns={numColumns}
        {...props}
      />
      <ErrorMessage visible={touched[name]} error={errors[name]} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    marginTop: 20,
  },
});
