// NavigationService.js
import { createRef } from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

// Create a navigation container reference
export const navigationRef = createRef();

// Navigate function
export function navigate(name, params) {
  if (navigationRef.current) {
    navigationRef.current.navigate(name, params);
  }
}
