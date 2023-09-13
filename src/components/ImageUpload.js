import {Button, Image, StyleSheet, Text, View} from 'react-native';

import React, {useEffect, useState} from 'react';

import NetInfo from '@react-native-community/netinfo';

import AsyncStorage from '@react-native-async-storage/async-storage';

import DocumentPicker from 'react-native-document-picker';

import storage from '@react-native-firebase/storage';

const ImageUpload = () => {
  const [imageData, setImageData] = useState(null);

  const [isConnected, setIsConnected] = useState(false);

  const [showNetworkStatus, setShowNetworkStatus] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (showNetworkStatus) {
      const timer = setTimeout(() => {
        setShowNetworkStatus(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showNetworkStatus]);

  useEffect(() => {
    const uploadLocallyStoredData = async () => {
      try {
        if (isConnected) {
          const storedData = await AsyncStorage.getItem(`/${imageData.name}`);

          if (storedData) {
            const uri = JSON.parse(storedData); // Parse the stored uri

            const response = storage().ref(`/${imageData.name}`);

            const put = await response.putFile(uri);

            console.log(response);

            alert('Locally stored image uploaded successfully');

            await AsyncStorage.removeItem(`/${imageData.name}`);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    uploadLocallyStoredData();
  }, [isConnected, imageData]);

  const pickImage = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],

        copyTo: 'cachesDirectory',
      });

      console.log(response);

      setImageData(response);
    } catch (error) {
      console.log(error);
    }
  };

  const uploadImage = async () => {
    try {
      if (!imageData) {
        return; // No image selected
      }

      if (isConnected) {
        try {
          const response = storage().ref(`/${imageData.name}`);

          const put = await response.putFile(imageData.fileCopyUri);

          console.log(response);

          alert('Image Uploaded Successfully');
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await AsyncStorage.setItem(
            `/${imageData.name}`,

            JSON.stringify(imageData.uri), // Store the whole uri
          );

          console.log('Image stored locally');
        } catch (err) {
          console.log(err);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View style={styles.profileHeader}>
        <Text style={styles.profileHeaderText}>Profile</Text>
      </View>

      <View style={styles.imageContainer}>
        {imageData ? (
          <Image source={{uri: imageData.uri}} style={styles.image} />
        ) : (
          <Text>No Image Found!</Text>
        )}

        <View style={styles.buttonContainer}>
          <Button title="Select Image" onPress={pickImage} />

          <Button title="Upload Image" onPress={uploadImage} />
        </View>
      </View>

      {showNetworkStatus && (
        <View
          style={[
            styles.networkStatus,

            {backgroundColor: isConnected ? 'green' : 'red'},
          ]}>
          <Text style={styles.networkStatusText}>
            Network Status: {isConnected ? 'Connected' : 'Not Connected'}
          </Text>
        </View>
      )}
    </View>
  );
};

export default ImageUpload;

const styles = StyleSheet.create({
  profileHeader: {
    backgroundColor: '#f0f0f0',

    padding: 10,
  },

  profileHeaderText: {
    fontSize: 24,

    textAlign: 'center',
  },

  imageContainer: {
    flex: 1,

    justifyContent: 'center',

    alignItems: 'center',
  },

  image: {
    width: 200,

    height: 200,

    marginBottom: 20,

    borderRadius: 100,
  },

  buttonContainer: {
    width: '100%',

    flexDirection: 'row',

    justifyContent: 'space-around',
  },

  networkStatus: {
    position: 'absolute',

    bottom: 0,

    left: 0,

    right: 0,

    backgroundColor: 'red',

    padding: 10,
  },

  networkStatusText: {
    color: 'white',

    textAlign: 'center',
  },
});
