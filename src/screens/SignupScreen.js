import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Login"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('MainFlow')}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;
