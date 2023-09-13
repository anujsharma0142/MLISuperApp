import {View, Text, Button, ScrollView} from 'react-native';
import React from 'react';
import Card from './Card';
import Calendar from './Calendar';

const Index = ({navigation}) => {
  return (
    <View>
      <Button
        title="Calendar"
        onPress={() => navigation.navigate('Calendar')}
      />
      <Button title="PushNotification" />
      <Button title="RealTimeDataBase" />
      <Button
        title="OfflineLocalStorage"
        onPress={() => navigation.navigate('OfflineImageUpload')}
      />
      <Button title="Super" />
      <Button title="InfiniteScrolling" />
      <Button
        title="SuperMaxWithDeeplinking"
        onPress={() => navigation.navigate('Splash')}
      />
    </View>
  );
};

export default Index;
