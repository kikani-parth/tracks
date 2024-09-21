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
    case 'login':
      return { ...state, errorMessage: '', token: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    default:
      return state;
  }
};

const tryLocalLogin = (dispatch) => {
  return async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      dispatch({ type: 'login', payload: token });
      navigate('MainFlow', {
        screen: 'TrackListFlow',
        params: { screen: 'TrackList' },
      });
    }
  };
};

const clearErrorMessage = (dispatch) => {
  return () => {
    dispatch({ type: 'clear_error_message' });
  };
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
  return async ({ email, password }) => {
    try {
      const response = await trackerApi.post('/login', { email, password });

      // Store the jwt token
      await AsyncStorage.setItem('token', response.data.token);

      // Update state
      dispatch({ type: 'login', payload: response.data.token });

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

const logout = (dispatch) => {
  return () => {};
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, login, logout, clearErrorMessage, tryLocalLogin },
  { token: null, errorMessage: '' }
);
