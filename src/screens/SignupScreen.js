import React, { useContext } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import AuthForm from '../components/AuthForm';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage={state.errorMessage}
        submitButtonText="Sign Up"
        onSubmit={signup} // Same as ({ email, password }) => signup({ email, password })
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.linkContainer}
      >
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -200,
  },
  linkContainer: {
    margin: 20,
    marginLeft: 15,
    alignSelf: 'center',
  },
  link: {
    fontSize: 15,
    color: 'blue',
  },
});

export default SignupScreen;
