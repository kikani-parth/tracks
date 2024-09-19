import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../NavigationService';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'signup':
      return { ...state, errorMessage: '', token: action.payload };

    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/signup', { email, password });

      // Store the jwt token
      await AsyncStorage.setItem('token', response.data.token);

      // Update state
      dispatch({ type: 'signup', payload: response.data.token });

      // Navigate to TrackList within TrackListFlow tab
      navigate('MainFlow', {
        screen: 'TrackListFlow',
        params: { screen: 'TrackList' },
      });
    } catch (error) {
      dispatch({ type: 'add_error', payload: 'Something went wrong' });
    }
  };
};

const login = (dispatch) => {
  return ({ email, password }) => {};
};

const logout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout },
  { token: null, errorMessage: '' }
);
