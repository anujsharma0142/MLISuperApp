import {
  Alert,
  Dimensions,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import database from '@react-native-firebase/database';
import React, {useEffect, useState} from 'react';

const Todo = () => {
  const [inputTextValue, setInputTextValue] = useState(null);
  const [isUpdateData, setIsUpdateData] = useState(false);
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [list, setList] = useState('');

  useEffect(() => {
    getDataBase();
  }, [list]);

  //   const getDataBase = async () => {
  //     try {
  //       const data = await database().ref('users/1').once('value');

  //       setmyData(data.val());
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  const handleAddData = async () => {
    try {
      if (inputTextValue.length > 0) {
        const index = list.length;
        const response = await database().ref(`todo/${index}`).set({
          value: inputTextValue,
        });

        console.log(response);
        setInputTextValue('');
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpdateData = async () => {
    try {
      console.log('inputTextValue:', inputTextValue);
      if (inputTextValue.length > 0) {
        const response = await database()
          .ref(`todo/${selectedCardIndex}`)
          .update({
            value: inputTextValue,
          });

        console.log('latestUpdate', response);
        setInputTextValue('');
        setIsUpdateData(false);
      } else {
        alert('Please Enter Value & Then Try Again');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardPress = (index, val) => {
    try {
      setIsUpdateData(true);
      setSelectedCardIndex(index);
      setInputTextValue(val);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCardLongPress = (index, val) => {
    try {
      Alert.alert('Alert', `Are You Sure To Delete ${val} ?`, [
        {
          text: 'Cancel',
          onPress: () => {
            console.log('Cancel is Press');
          },
        },
        {
          text: 'Ok',
          onPress: async () => {
            try {
              const response = await database().ref(`todo/${index}`).remove();

              console.log(response);
              setInputTextValue('');
              setIsUpdateData(false);
            } catch (error) {
              console.log(error);
            }
          },
        },
      ]);
    } catch (error) {
      console.log(error);
    }
  };

  const getDataBase = async () => {
    try {
      const data = await database().ref('todo').once('value');
      const todoData = data.val();

      const dataArray = todoData ? Object.values(todoData) : [];

      setList(dataArray);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            color: '#111',
            marginTop: 30,
          }}>
          RealTime DataBase
        </Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter Any Value"
          value={inputTextValue}
          onChangeText={text => {
            console.log('New input text:', text);
            setInputTextValue(text);
          }}
        />
        {!isUpdateData ? (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleAddData()}>
            <Text style={{color: '#fff'}}>Add</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={styles.addButton}
            onPress={() => handleUpdateData()}>
            <Text style={{color: '#fff'}}>Update</Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.cardContainer}>
        <Text style={{marginVertical: 20, fontSize: 20, fontWeight: 'bold'}}>
          RealTime Data
        </Text>

        <FlatList
          data={list}
          renderItem={({item, index}) => {
            if (item !== null) {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => handleCardPress(index, item?.value)}
                  onLongPress={() => handleCardLongPress(index, item?.value)}>
                  <Text>{item?.value}</Text>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default Todo;

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  inputBox: {
    width: width - 30,
    borderRadius: 15,
    borderWidth: 2,
    marginVertical: 10,
    padding: 10,
  },
  addButton: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 10,
    borderRadius: 50,
  },
  cardContainer: {
    marginVertical: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: width - 20,
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
  },
});
