import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Calendar from './screens/Calendar';
import Card from './screens/Card';
import ImageUpload from './ImageUpload';
import InfiniteScrolling from './screens/InfinityScrolling';
import Splash from './screens/SuperMax/splash/Splash';
import SuperMax from './screens/SuperMax/SuperMax';
import WebViewScreen from './screens/SuperMax/webviewscreen/WebViewScreen';
import Todo from './screens/REALTIME/Todo';
import SuperApp from './screens/SuperApp';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={SuperApp}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Calendar" component={Calendar} />
        <Stack.Screen name="OfflineImageUpload" component={ImageUpload} />
        <Stack.Screen name="InfinityScrolling" component={InfiniteScrolling} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={SuperMax}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WebViewScreen"
          component={WebViewScreen}
          options={({route}) => ({
            headerTitle: route.params?.title || 'WebView Screen',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerStyle: {
              backgroundColor: '#f9f9f9',
              elevation: 0,
              shadowOpacity: 0,
            },
            headerTitleAlign: 'center',
          })}
        />
        <Stack.Screen
          name="RealTime"
          component={Todo}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
