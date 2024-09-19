import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {
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
      <Button
        title="Sign Up"
        buttonStyle={styles.buttonStyle}
        onPress={() => navigation.navigate('MainFlow')}
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
  buttonStyle: {
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
  },
});

export default SignupScreen;
