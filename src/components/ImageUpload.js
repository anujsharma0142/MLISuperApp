import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

const ImageUpload = () => {
  const [imageData, setImageData] = useState(null);
  const [isConnected, setIsConnected] = useState(false);
  const [showNetworkStatus, setShowNetworkStatus] = useState(true);
  const [imageUploaded, setImageUploaded] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const uploadLocallyStoredData = async () => {
    try {
      if (isConnected && !imageUploaded) {
        const storedData = await AsyncStorage.getItem(`/${imageData.name}`);

        if (storedData) {
          const uri = JSON.parse(storedData); // Parse the stored URI

          const response = storage().ref(`/${imageData.name}`);
          const put = await response.putFile(uri);

          console.log(response);

          alert('Locally stored image uploaded successfully');
          setImageUploaded(true);

          await AsyncStorage.removeItem(`/${imageData.name}`);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    uploadLocallyStoredData();
  }, [isConnected, imageUploaded]);

  const pickImage = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
        copyTo: 'cachesDirectory',
      });

      console.log(response);

      setImageData(response);
      setImageUploaded(false); // Reset imageUploaded state
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
          setImageUploaded(true);
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await AsyncStorage.setItem(
            `/${imageData.name}`,
            JSON.stringify(imageData.uri), // Store the whole URI
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

  // Automatically upload the image when the network becomes available
  useEffect(() => {
    if (isConnected && !imageUploaded && imageData) {
      uploadImage();
    }
  }, [isConnected]);

  // Hide the network status after 3 seconds
  useEffect(() => {
    if (showNetworkStatus) {
      const timer = setTimeout(() => {
        setShowNetworkStatus(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNetworkStatus]);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <View style={styles.imageContainer}>
            {imageData ? (
              <Image
                source={{uri: imageData.uri}}
                style={styles.profileImage}
              />
            ) : (
              <Image
                source={{
                  uri: 'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp',
                }}
                style={styles.profileImage}
              />
            )}
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Profile Change</Text>

            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.chatButton} onPress={pickImage}>
                <Text style={styles.buttonText}>Select</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.followButton}
                onPress={uploadImage}>
                <Text style={styles.buttonText}>Upload</Text>
              </TouchableOpacity>
            </View>
          </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9de2ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderRadius: 15,
    backgroundColor: 'white',
    width: '100%',
  },
  cardBody: {
    padding: 25,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    flexShrink: 0,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 20,
  },
  profileName: {
    fontSize: 20,
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  chatButton: {
    flex: 1,
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
  },
  followButton: {
    flex: 1,
    borderWidth: 0.5,
    borderColor: 'gray',
    borderRadius: 5,
    alignItems: 'center',
    padding: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
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

export default ImageUpload;
