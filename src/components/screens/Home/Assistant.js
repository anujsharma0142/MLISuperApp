import {Image, View, StyleSheet, Pressable, Platform} from 'react-native';
import React from 'react';

const Assistant = () => {
  const MaxLifeAssistant =
    'https://bot.maxlifeinsurance.com/static/media/mili.79833e10.jpg';

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.logoContainer}
        onPress={() =>
          alert(
            "WELCOME TO THE MAXLIFE ASSISTANT TEAM! I HOPE YOU'RE DOING GOOD. PLEASE ASK ME IF YOU NEED ANY HELP.",
          )
        }>
        <Image source={{uri: MaxLifeAssistant}} style={styles.assistantLogo} />
      </Pressable>
    </View>
  );
};

export default Assistant;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: -1,
    right: 10,
  },

  logoContainer: {
    backgroundColor: '#fff',
    borderRadius: 35,
  },

  assistantLogo: {
    width: Platform.OS === 'android' ? 80 : 75,
    height: Platform.OS === 'android' ? 80 : 75,
    borderWidth: 1,
    borderRadius: 37,
    borderColor: '#002D62',
  },
});
