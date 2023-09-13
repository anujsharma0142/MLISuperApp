import {
  Image,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {SafeAreaView} from 'react-native-safe-area-context';
import styles from './Header.style';
import I18n from '../../../i18n';

const Header = ({toggleSwitch, isToggled}) => {
  const MAX_LOGO = require('../../../assets/maxlife_lite.png');

  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <Image source={MAX_LOGO} style={styles.imageLogo} />
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={
              Platform.OS === 'ios'
                ? {flexDirection: 'row', marginVertical: 13, marginRight: 12}
                : {flexDirection: 'row', marginVertical: 12, marginRight: 10}
            }>
            {/* Toggle Button */}
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isToggled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isToggled}
            />
            <Text
              style={
                Platform.OS === 'ios'
                  ? {
                      fontSize: 15,
                      color: '#111',
                      fontWeight: 'bold',
                      marginHorizontal: 7,
                      marginVertical: 3,
                    }
                  : {
                      fontSize: 17,
                      color: '#111',
                      fontWeight: 'bold',
                      marginHorizontal: 7,
                    }
              }>
              {isToggled ? 'HIN' : 'EN'}
            </Text>
          </View>
          <Pressable onPress={() => alert('Menu Bar Pressed!')}>
            <Entypo
              name="menu"
              style={{marginVertical: 10}}
              size={24}
              color="#111"
            />
          </Pressable>
        </View>
      </View>
      {/* UNDERLINE ROW */}
      <Text style={styles.textUnderline} />
    </View>
  );
};

export default Header;
