import {ActivityIndicator, Image, View} from 'react-native';
import styles from './Splash.style';
import React, {useEffect, useState} from 'react';

const Splash = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  const MAX_LOGO = require('../../../../../assets/maxlife_lite.png');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('Home');
    }
  }, [isLoading, navigation]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Image source={MAX_LOGO} style={{width: 75, height: 75}} />

        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
};

export default Splash;
