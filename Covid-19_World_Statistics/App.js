import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeTabNavigator from './src/navigations/tabNavigator';


export default function App() {
  return (
    <NavigationContainer>
      <HomeTabNavigator />
    </NavigationContainer>
  );
}