import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Photoscreen from './screens/Photoscreen';
import Videoscreen from './screens/Videoscreen';


const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator activeColor="#f0edf6"
      inactiveColor="#3e2465"
      barStyle={{ backgroundColor: '#694fad' }}
     >
      <Tab.Screen name="Photo"  component={Photoscreen}   />
      <Tab.Screen name="Video" component={Videoscreen} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}


