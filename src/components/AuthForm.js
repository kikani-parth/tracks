import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button, Input } from 'react-native-elements';

const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text h3 style={styles.title}>
        {headerText}
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button
        title={submitButtonText}
        buttonStyle={styles.buttonStyle}
        onPress={() => onSubmit({ email, password })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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

export default AuthForm;
