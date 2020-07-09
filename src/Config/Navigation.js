

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./../Screens/LoginScreen.js";
import ChatScreen from "./../Screens/ChatScreen"

const Stack = createStackNavigator();

function MainNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login Screen" options={{headerShown: false}} component={LoginScreen} />
        <Stack.Screen name="Chat"  component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;