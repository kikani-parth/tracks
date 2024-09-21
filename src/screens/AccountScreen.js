import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Button } from 'react-native-elements';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = () => {
  const insets = useSafeAreaInsets();

  const { logout } = useContext(AuthContext);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
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
    fontSize: 40,
    margin: 20,
    marginBottom: 30,
    alignSelf: 'center',
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
  },
});

export default AccountScreen;
