import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Calendars = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: 'Calendar',
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
      },

      headerStyle: {
        backgroundColor: '#003580',
        height: 100,
        borderBottomColor: 'transparent',
        shadowColor: 'transparent',
      },
      headerRight: () => (
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          style={{marginRight: 12, color: 'white'}}
        />
      ),
      headerBackTitle: 'Back',
      headerTitleAlign: 'center',
    });
  }, []);

  return (
    <View
      style={{
        width: 300,
        height: 80,
        margin: 10,
        padding: 10,
        borderWidth: 3,
        borderColor: '#FFC72C',
        borderRadius: 20,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginVertical: 100,
      }}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          textAlign: 'center',
          marginTop: 15,
        }}>
        Welcome to the Calendars
      </Text>
    </View>
  );
};

export default Calendars;
