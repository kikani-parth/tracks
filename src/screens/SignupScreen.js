import React, { useContext, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { useFocusEffect } from '@react-navigation/native';

const SignupScreen = () => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      clearErrorMessage();
    }, [])
  );

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup} // Same as ({ email, password }) => signup({ email, password })
      />
      <NavLink text="Already have an account? Login" routeName="Login" />
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

export default SignupScreen;
