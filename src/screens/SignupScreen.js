import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text h3 style={styles.title}>
        Sign Up
      </Text>
      <Input
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputContainer}
        onChangeText={setEmail} // Same as (newEmail) => setEmail(newEmail)
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        containerStyle={styles.inputContainer}
        onChangeText={setPassword}
      />
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}
      <Button
        title="Sign Up"
        buttonStyle={styles.buttonStyle}
        onPress={() => signup({ email, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: -250,
  },
  title: {
    margin: 20,
    marginBottom: 25,
    textAlign: 'center',
  },
  inputContainer: {
    marginVertical: 5,
  },
  errorMessage: {
    fontSize: 16,
    color: 'red',
    marginLeft: 10,
    marginBottom: 20,
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
  },
});

export default SignupScreen;
