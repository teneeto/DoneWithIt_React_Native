import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Screen from '../components/Screen';
import { Image, StyleSheet } from 'react-native';
import AppTextinput from '../components/AppTextinput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).max(32).label('Password')
})

function LoginScreen(props) {

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />

      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors }) => (
          <>


            <AppTextinput
              autoCapitalize='none'
              autoCorrect={false}
              icon='email'
              keyboardType='email-address'
              onChangeText={handleChange('email')}
              placeholder='Email'
              textContentType='emailAddress'
            />

            <AppText style={{ color: 'red' }}>{errors.email}</AppText>

            <AppTextinput
              autoCapitalize='none'
              autoCorrect={false}
              icon='lock'
              onChangeText={handleChange('password')}
              placeholder='Password'
              secureTextEntry
              textContentType='password'
            />
            <AppText style={{ color: 'red' }}>{errors.password}</AppText>
            <AppButton title='Login' onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
})

export default LoginScreen;