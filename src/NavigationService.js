// // NavigationService.js
// import { createRef } from 'react';
// import { NavigationContainerRef } from '@react-navigation/native';

// // Create a navigation container reference
// export const navigationRef = createRef();

// // Navigate function
// export function navigate(name, params) {
//   if (navigationRef.current) {
//     navigationRef.current.navigate(name, params);
//   }
// }

import { createNavigationContainerRef } from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
