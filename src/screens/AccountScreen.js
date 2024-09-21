import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View>
      <Text style={styles.title}>Account Screen</Text>
      <Button
        title="Logout"
        buttonStyle={styles.buttonStyle}
        onPress={logout}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    margin: 20,
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
  },
});

export default AccountScreen;
