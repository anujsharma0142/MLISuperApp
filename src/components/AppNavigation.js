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
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './screens/Home';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Contacts from './screens/Contacts';
import Tasks from './screens/Tasks';
import Calendars from './screens/Calendars';
import Launcher from './screens/Launcher';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Loader from './screens/loader/Loader';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  function BottomTabs() {
    return (
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="home" size={24} color="#F27930" />
              ) : (
                <AntDesign name="home" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Contacts"
          component={Contacts}
          options={{
            tabBarLabel: 'Contacts',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <AntDesign name="contacts" size={24} color="#F27930" />
              ) : (
                <AntDesign name="contacts" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Tasks"
          component={Tasks}
          options={{
            tabBarLabel: 'Tasks',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <FontAwesome6
                  name="clipboard-check"
                  size={24}
                  color="#F27930"
                />
              ) : (
                <FontAwesome6 name="clipboard-check" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Calendars"
          component={Calendars}
          options={{
            tabBarLabel: 'Calendar',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="calendar" size={24} color="#F27930" />
              ) : (
                <Entypo name="calendar" size={24} color="gray" />
              ),
          }}
        />
        <Tab.Screen
          name="Launcher"
          component={SuperApp}
          options={{
            tabBarLabel: 'Launcher',
            headerShown: false,
            tabBarIcon: ({focused}) =>
              focused ? (
                <Entypo name="menu" size={24} color="#F27930" />
              ) : (
                <Entypo name="menu" size={24} color="gray" />
              ),
          }}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Loader"
          component={Loader}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Main"
          component={BottomTabs}
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
