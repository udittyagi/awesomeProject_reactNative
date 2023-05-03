import {StyleSheet} from 'react-native';
import React from 'react';
import * as Yup from 'yup';

import SafeView from '../components/Common/SafeView/SafeView';
import AppForm from '../components/Common/Form/AppForm';
import AppFormField from '../components/Common/Form/AppFormField';
import SubmitButton from '../components/Common/Form/SubmitButton';

const validationSchema = Yup.object({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function Registration() {
  const onSubmit = values => console.log(values);
  return (
    <SafeView style={style.container}>
      <AppForm
        initialValues={{email: '', password: '', name: ''}}
        onSubmit={onSubmit}
        validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={false}
          icon="account"
          name="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          keyboardType="email-address"
          name="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="REGISTER" />
      </AppForm>
    </SafeView>
  );
}

const style = StyleSheet.create({
  container: {
    padding: 10,
  },
});
