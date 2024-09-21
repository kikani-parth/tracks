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

const TrackCreateScreen = () => {
  const insets = useSafeAreaInsets();

  const { addLocation } = useContext(LocationContext);

  const [errorMsg] = useLocation(addLocation); // Same as (location) => addLocation(location)

  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      <Text h2>Create a Track</Text>
      <Map />
      {errorMsg ? <Text>{errorMsg}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackCreateScreen;
