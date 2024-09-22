import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Context as TrackContext } from '../context/TrackContext';
import MapView, { Polyline } from 'react-native-maps';

const TrackDetailScreen = ({ route }) => {
  const { state } = useContext(TrackContext);
  const _id = route.params._id;

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{track.name}</Text>
      <MapView
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginTop: 15,
  },

  map: {
    marginTop: 15,
    height: '100%',
  },
});

export default TrackDetailScreen;
