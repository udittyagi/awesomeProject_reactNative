import {Image, StyleSheet} from 'react-native';
import * as React from 'react';
import * as Yup from 'yup';

import SafeView from '../components/Common/SafeView/SafeView';
import AppFormField from '../components/Common/Form/AppFormField';
import SubmitButton from '../components/Common/Form/SubmitButton';
import AppForm from '../components/Common/Form/AppForm';

const validationScehma = Yup.object({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('password'),
});

export default function LoginScreen() {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <SafeView style={styles.container}>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm
        initialValues={{email: '', password: ''}}
        onSubmit={onSubmit}
        validationSchema={validationScehma}>
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="email"
          name="email"
          keyboardType="email-address"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Login" />
      </AppForm>
    </SafeView>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  mrTop: {
    marginTop: 20,
  },
  container: {
    padding: 10,
  },
});
