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
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

const SuperApp = () => {
  const navigation = useNavigation();
  const MAX_LOGO = require('../../../assets/maxlife_lite.png');

  return (
    <View>
      <View style={{backgroundColor: '#f2f2f2'}}>
        <View style={styles.headerContainer}>
          <View>
            <Image source={MAX_LOGO} style={styles.imageLogo} />
          </View>
          {/* <Text
            style={{
              marginVertical: 13,
              marginLeft: 35,
              fontSize: 20,
              fontWeight: '700',
              color: 'black',
              textAlign: 'center',
            }}>
            Super App
          </Text> */}
          <Pressable style={{flexDirection: 'row', alignItems: 'center'}}>
            <Pressable onPress={() => alert('Search called!')}>
              <AntDesign
                name="search1"
                style={{marginVertical: 15}}
                size={24}
                color="#111"
              />
            </Pressable>
            <Pressable
              style={{marginHorizontal: 27}}
              onPress={() => alert('Push Notification called!')}>
              <Feather
                name="bell"
                style={{marginVertical: 15}}
                size={24}
                color="#111"
              />
            </Pressable>
            <Pressable onPress={() => alert('Message!')}>
              <MaterialCommunityIcons
                name="message-text-outline"
                style={{marginVertical: 15}}
                size={24}
                color="#111"
              />
            </Pressable>
          </Pressable>
        </View>
      </View>
      {/* UNDERLINE ROW */}
      <Text style={styles.textUnderline} />

      <ScrollView
        style={{
          height: '100%',
          width: '100%',
        }}>
        <View style={{backgroundColor: '#E1EBEE'}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Calendar')}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#B0C4DE',
                paddingVertical: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 40,
                marginLeft: 30,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                }}>
                <Entypo name="calendar" size={24} color="#1F4163" />
              </View>

              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: '#1F4163',
                  fontWeight: '500',
                }}>
                Calendar
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('Push Notification')}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#73C2FB',
                paddingVertical: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 40,
                marginLeft: 30,
                justifyContent: 'center',
                marginRight: 50,
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                }}>
                <Ionicons name="notifications" size={24} color="#1F4163" />
              </View>

              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: '#1F4163',
                  fontWeight: '500',
                }}>
                Push Notification
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Pressable
              onPress={() => navigation.navigate('RealTime')}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#0093AF',
                paddingVertical: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 40,
                marginLeft: 30,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                }}>
                <FontAwesome name="database" size={24} color="#1F4163" />
              </View>

              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: '#1F4163',
                  fontWeight: '500',
                }}>
                RealTime DataBase
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('OFFLINE Image Upload')}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#B0E0E6',
                paddingVertical: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 40,
                marginLeft: 30,
                justifyContent: 'center',
                marginRight: 50,
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                }}>
                <FontAwesome6 name="image" size={24} color="#1F4163" />
              </View>

              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: '#1F4163',
                  fontWeight: '500',
                }}>
                OFFLINE ImageUpload
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}>
            <Pressable
              onPress={() => navigation.navigate('Splash')}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#1da1f2',
                paddingVertical: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 40,
                marginLeft: 30,
                justifyContent: 'center',
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  width: 60,
                  height: 60,
                  borderRadius: 40,
                }}>
                <Image source={MAX_LOGO} style={{width: 40, height: 40}} />
              </View>

              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: '#1F4163',
                  fontWeight: '500',
                }}>
                Super Max Deep Linking
              </Text>
            </Pressable>

            <Pressable
              onPress={() => navigation.navigate('InfinityScrolling')}
              style={{
                width: 150,
                height: 200,
                backgroundColor: '#6699CC',
                paddingVertical: 20,
                paddingLeft: 10,
                borderWidth: 0,
                borderColor: 'gray',
                borderRadius: 10,
                marginTop: 40,
                marginLeft: 30,
                justifyContent: 'center',
                marginBottom: 90,
                marginRight: 50,
              }}>
              <View
                style={{
                  padding: 10,
                  backgroundColor: 'white',
                  width: 50,
                  height: 45,
                  borderRadius: 30,
                }}>
                <FontAwesome5 name="infinity" size={24} color="#1F4163" />
              </View>

              <Text
                style={{
                  fontSize: 22,
                  marginTop: 10,
                  color: '#1F4163',
                  fontWeight: '500',
                }}>
                Infinite Scrolling
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
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
    height: 36,
    marginVertical: 10,
    borderRadius: 11,
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
