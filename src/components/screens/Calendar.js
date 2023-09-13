import {View, Text, StyleSheet, TextInput, Alert} from 'react-native';
import React from 'react';
import {useState} from 'react';
import CalendarStrip from 'react-native-calendar-strip';

import moment from 'moment';

const Calendar = () => {
  const [selected, setSelected] = useState('');

  const [isDateSelected, setIsDateSelected] = useState(false);

  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  console.log(months[8]);

  let datesWhitelist = [
    {
      start: moment().add(-2, 'days'),

      end: moment().add(2, 'days'),
    },
  ];

  const handleDateSelected = date => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T'); //return arry of string that include date and time as string
    console.log(x);
    const newDate = x[0].split('-'); //because the first element is date so we only take this string
    const month = parseInt(newDate[1], 10); // conver 08 to 8

    newDate[1] = months[month - 1]; // initializing month number to letter

    const newDateFormat = `${newDate[2]}  ${newDate[1]}  ${newDate[0]}`;

    setSelected(newDateFormat);

    setIsDateSelected(true);

    // Alert.alert('Alert', `You have selected the date: ${newDateFormat}`, [
    //   {
    //     text: 'Cancel',

    //     onPress: () => {
    //       console.log('Cancel is Pressed');
    //     },

    //     style: 'cancel',
    //   },

    //   {
    //     text: 'OK',

    //     onPress: () => {
    //       console.log('OK is Pressed');
    //     },
    //   },
    // ]);
  };

  return (
    <View style={styles.container}>
      <View style={{paddingTop: 7, paddingBottom: 12, margin: 14}}>
        <CalendarStrip
          scrollable
          headerText
          style={{
            height: 90,

            backgroundColor: '#fff',

            paddingBottom: 10,
          }}
          dateNumberStyle={{color: '#111', fontSize: 17, fontWeight: '450'}}
          dateNameStyle={{
            color: '#111',

            fontSize: 15,

            width: 40,
          }}
          iconContainer={{
            flex: 0.1,
          }}
          iconStyle={{color: 'red', fontWeight: 'bold'}}
          highlightDateNameStyle={{
            color: '#2E5090',

            paddingTop: -20,

            fontSize: 11,
          }}
          highlightDateNumberStyle={{
            backgroundColor: '#2E5090',

            color: '#fff',

            fontSize: 14,

            padding: 7,

            width: 35,

            borderRadius: 20,

            fontWeight: '400',
          }}
          datesWhitelist={datesWhitelist}
          onDateSelected={handleDateSelected}
        />
        <View style={styles.selectDateFun}>
          <Text style={styles.selectTextFun}>
            {isDateSelected ? selected : 'Select Date'}
          </Text>
        </View>

        {isDateSelected && (
          <View style={styles.textInp}>
            <TextInput
              style={styles.textInput}
              placeholder="Add text..."
              placeholderTextColor="#888"
            />

            <TextInput
              style={styles.textInput}
              placeholder="Add text..."
              placeholderTextColor="#888"
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    //   flex: 1,

    backgroundColor: '#f2f2f2',
  },

  textInput: {
    paddingTop: 30,

    paddingBottom: 150,

    borderColor: '#fff',

    backgroundColor: '#fff',

    borderWidth: 1,

    borderRadius: 20,

    paddingHorizontal: 37,

    fontSize: 16,

    color: '#111',

    fontWeight: '700',
  },

  dateBox: {
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1.5,
    alignContent: 'center',
  },
  textInput: {
    marginBottom: 20,

    paddingTop: 30,

    paddingBottom: 150,

    borderColor: '#fff',

    backgroundColor: '#fff',

    borderWidth: 1,

    borderRadius: 20,

    paddingHorizontal: 37,

    fontSize: 16,

    color: '#111',

    fontWeight: '700',

    marginTop: 20,
  },
  selectTextFun: {
    color: '#111',

    fontWeight: '600',
  },
  selectDateFun: {
    alignItems: 'center',

    marginTop: 12,

    borderWidth: 1,

    borderColor: 'gray',

    borderRadius: 7,

    marginHorizontal: 120,

    paddingVertical: 2,
  },
});
