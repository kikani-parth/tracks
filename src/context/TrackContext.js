import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const trackReducer = (state, action) => {
  switch (action.type) {
    case value:
      return;

    default:
      return state;
  }
};

const fetchTracks = (dispatch) => {
  return () => {};
};

const createTrack = (dispatch) => {
  return async (name, locations) => {
    await trackerApi.post('/tracks', { name, locations });
  };
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
