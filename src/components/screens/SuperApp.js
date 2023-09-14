import {
  View,
  Text,
  Button,
  ScrollView,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import React from 'react';
import Card from './Card';
import Calendar from './Calendar';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../Header/Header';
import Entypo from 'react-native-vector-icons/Entypo';

const SuperApp = ({navigation}) => {
  const MAX_LOGO = require('../../../assets/maxlife_lite.png');

  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <View>
          <Image source={MAX_LOGO} style={styles.imageLogo} />
        </View>
        <Text
          style={{
            marginVertical: 13,
            marginRight: 5,
            fontSize: 20,
            fontWeight: '500',
            color: 'black',
            textAlign: 'center',
          }}>
          Super App
        </Text>
        <Pressable onPress={() => alert('Menu Bar Pressed!')}>
          <Entypo
            name="menu"
            style={{marginVertical: 10}}
            size={24}
            color="#111"
          />
        </Pressable>
      </View>
      {/* UNDERLINE ROW */}
      <Text style={styles.textUnderline} />
      <View>
        <Button
          title="Calendar"
          onPress={() => navigation.navigate('Calendar')}
        />
        <Button title="PushNotification" />
        <Button
          title="RealTimeDataBase"
          onPress={() => navigation.navigate('RealTime')}
        />
        <Button
          title="OfflineLocalStorage"
          onPress={() => navigation.navigate('OfflineImageUpload')}
        />
        <Button title="InfiniteScrolling" />
        <Button
          title="SuperMaxWithDeeplinking"
          onPress={() => navigation.navigate('Splash')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  imageLogo: {
    width: 45,
    height: 45,
    marginVertical: 5,
  },
  textUnderline: {
    marginTop: 3,
    height: 1,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonOn: {
    backgroundColor: 'green',
  },
  buttonOff: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default SuperApp;
