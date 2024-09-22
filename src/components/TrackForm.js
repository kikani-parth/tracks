import React from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';

const TrackForm = () => {
  return (
    <View>
      <Input placeholder="Enter name" inputStyle={styles.inputStyle} />
      <Button title="Start Recording" buttonStyle={styles.buttonStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    marginTop: 15,
  },
  buttonStyle: {
    borderRadius: 5,
    alignSelf: 'center',
    width: '50%',
  },
});

export default TrackForm;
