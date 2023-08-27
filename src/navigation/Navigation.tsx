// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../pages/homescreen/HomeScreen';
import HadistScreen from '../pages/hadistscreen/HadistScreen';
import AlquranScreen from '../pages/alquran/AlquranScreen';
import SplashScreen from '../pages/splashscreen/SplashScreen';

const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#84c949',
            },
            title: 'Hadist',
            headerLeft: () => null,
          }}
          name="Hadist"
          component={HadistScreen}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: '#84c949',
            },
            title: 'Surat Al-qur`an',
          }}
          name="Alquran"
          component={AlquranScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
