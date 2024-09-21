import '../_mockLocation';
import React, { useState, useEffect, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-elements';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import Map from '../components/Map';
import * as Location from 'expo-location';
import { Context as LocationContext } from '../context/LocationContext';

const TrackCreateScreen = () => {
  const insets = useSafeAreaInsets();

  const { addLocation } = useContext(LocationContext);
  const [errorMsg, setErrorMsg] = useState(null);

  const startWatching = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }
    await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      (location) => {
        console.log(location);
        addLocation(location);
      }
    );

    // let currentLocation = await Location.getCurrentPositionAsync({});
    // setUserLocation(currentLocation.coords);
  };

  useEffect(() => {
    startWatching();
  }, []);

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
