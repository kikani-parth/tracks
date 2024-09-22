import createDataContext from './createDataContext';

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
  return (name, locations) => {
    console.log(name, locations.length);
  };
};

export const { Provider, Context } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
