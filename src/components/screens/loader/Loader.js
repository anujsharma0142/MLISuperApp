import {ActivityIndicator, Image, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';

const Loader = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);

  const MAX_LOGO = require('../../../../assets/maxlife_lite.png');

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoading) {
      navigation.navigate('Main');
    }
  }, [isLoading, navigation]);

  if (isLoading) {
    return (
      <View style={styles.loaderContainer}>
        <Image
          source={MAX_LOGO}
          style={{width: 75, height: 60, borderRadius: 7, marginBottom: 10}}
        />

        <ActivityIndicator size="large" color="#1F4163" />
      </View>
    );
  }
};

export default Loader;

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0E0E0',
  },

  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
