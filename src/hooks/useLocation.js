import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default (callback) => {
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
      callback
    );
  };

  useEffect(() => {
    startWatching();
  }, []);

  return [errorMsg];
};
