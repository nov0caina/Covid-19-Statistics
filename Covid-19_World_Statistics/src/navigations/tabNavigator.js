import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Details from '../screens/Details';
import ExtraInfo from '../screens/ExtraInfo';
import TabBar from '../components/TabBar';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const screenOptionStyle = {
  headerShown: false
}

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen 
        name='Home' 
        component={Home} 
      />
      <Stack.Screen 
        name='Details' 
        component={Details} 
      />
    </Stack.Navigator>
  );
}

function HomeTabNavigator() {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name='Inicio'
        component={HomeStack}
        initialParams={{ icon: 'home' }}
      />
      <Tab.Screen
        name='Consejos'
        component={ExtraInfo}
        initialParams={{ icon: 'heart' }}
      />                  
    </Tab.Navigator>
  );
};

export default HomeTabNavigator;