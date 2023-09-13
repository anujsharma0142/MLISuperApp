import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Calendar from './screens/Calendar';

const stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
   <NavigationContainer>
    <stack.Navigator>
        <stack.Screen name='Calendar' component={Calendar}/>
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation