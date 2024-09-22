import '../_mockLocation';
import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Map from '../components/Map';
import { Context as LocationContext } from '../context/LocationContext';
import useLocation from '../hooks/useLocation';
import { useIsFocused } from '@react-navigation/native';
import TrackForm from '../components/TrackForm';

const TrackCreateScreen = () => {
  const insets = useSafeAreaInsets();

  const isFocused = useIsFocused();
  const { state, addLocation } = useContext(LocationContext);
  const [errorMsg] = useLocation(isFocused, (location) => {
    addLocation(location, state.recording);
  });

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text h2 style={styles.title}>
        Create a Track
      </Text>
      <Map />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
      <TrackForm />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    margin: 10,
    alignSelf: 'center',
  },
});

export default TrackCreateScreen;
