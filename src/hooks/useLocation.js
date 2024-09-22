import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export default (shouldTrack, callback) => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [subscriber, setSubscriber] = useState(null);

  const startWatching = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permission to access location was denied');
      return;
    }

    const sub = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.BestForNavigation,
        timeInterval: 1000,
        distanceInterval: 10,
      },
      callback
    );

    setSubscriber(sub);
  };

  useEffect(() => {
    if (shouldTrack) {
      startWatching();
    } else {
      subscriber.remove();
      setSubscriber(null);
    }
  }, [shouldTrack]);

  return [errorMsg];
};
