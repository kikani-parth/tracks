import React, { useContext, useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { Context as AuthContext } from '../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';

const LoginScreen = () => {
  const { state, login, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      clearErrorMessage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Login"
        errorMessage={state.errorMessage}
        submitButtonText="Login"
        onSubmit={login}
      />
      <NavLink text="Don't have an account? Sign up" routeName="Signup" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -200,
  },
});

export default LoginScreen;
