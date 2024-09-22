import React, { useContext } from 'react';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);

  console.log(locations.length);

  return (
    <View>
      <Input
        placeholder="Enter name"
        inputStyle={styles.inputStyle}
        value={name}
        onChangeText={changeName}
      />
      {recording ? (
        <Button
          title="Stop Recording"
          buttonStyle={[styles.buttonStyle, { backgroundColor: 'red' }]}
          onPress={stopRecording}
        />
      ) : (
        <Button
          title="Start Recording"
          buttonStyle={styles.buttonStyle}
          onPress={startRecording}
        />
      )}
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
