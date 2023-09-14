import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Calendar from './screens/Calendar';
import Index from './screens/Index';
import Card from './screens/Card';
import ImageUpload from './ImageUpload';
import InfiniteScrolling from './screens/InfinityScrolling';
import PushNotification from './screens/PushNotification';

const stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
   <NavigationContainer>
    <stack.Navigator>
     
      <stack.Screen name='Main' component={Index} />
        <stack.Screen name='Calendar' component={Calendar}/>
        <stack.Screen name='OfflineImageUpload' component={ImageUpload} />
        <stack.Screen name='InfinityScrolling' component={InfiniteScrolling} />
        <stack.Screen name='PushNotification' component={PushNotification}/>
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default AppNavigation