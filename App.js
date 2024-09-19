import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// Import your screens
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import TrackListScreen from './src/screens/TrackListScreen';
import TrackDetailScreen from './src/screens/TrackDetailScreen';
import TrackCreateScreen from './src/screens/TrackCreateScreen';
import AccountScreen from './src/screens/AccountScreen';

// Create Stack Navigator
const Stack = createStackNavigator();

// Create Bottom Tab Navigator
const Tab = createMaterialBottomTabNavigator();

// Stack for the login flow (Signup and Login screens)
function LoginFlow() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

// Stack for track list flow (Track List and Track Detail screens)
function TrackListFlow() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TrackList"
        component={TrackListScreen}
        options={{
          headerTitle: '',
          headerLeft: null,
        }}
      />
      <Stack.Screen
        name="TrackDetail"
        component={TrackDetailScreen}
        options={{
          headerTitle: '',
        }}
      />
    </Stack.Navigator>
  );
}

// Tab Navigator for the main flow
function MainFlow() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="TrackListFlow"
        component={TrackListFlow}
        options={{ tabBarLabel: 'Tracks' }}
      />
      <Tab.Screen
        name="TrackCreate"
        component={TrackCreateScreen}
        options={{ tabBarLabel: 'Create Track' }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{ tabBarLabel: 'Account' }}
      />
    </Tab.Navigator>
  );
}

// Root Navigator to mimic SwitchNavigator behavior
function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="LoginFlow"
        component={LoginFlow}
        options={{ gestureEnabled: false }} // Prevent swipe back to login flow
      />
      <Stack.Screen
        name="MainFlow"
        component={MainFlow}
        options={{ gestureEnabled: false }}
      />
    </Stack.Navigator>
  );
}

// App container
export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}
