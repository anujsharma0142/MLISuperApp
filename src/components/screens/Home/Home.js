import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Assistant from './Assistant';
import Table from '../Table';
import Header from '../../Header/Header';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = () => {
  //Navigation to HOME
  const navigation = useNavigation();

  const MAX_LOGO = require('../../../../assets/maxlife_lite.png');

  return (
    <SafeAreaView>
      <ScrollView>
        {/* HEADER VIEW */}
        <View style={styles.headerContainer}>
          <View>
            <Image source={MAX_LOGO} style={styles.imageLogo} />
          </View>
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

        <View
          style={{
            marginTop: 7,
            padding: 20,
            backgroundColor: '#E5E4E2',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={styles.detailPolicy}>Policy Details</Text>
          <Pressable
            style={styles.underlineContainer}
            onPress={() => alert('General Insurance Policy Brochures')}>
            <View style={styles.underline} />
            <Text style={styles.underlinedText}>Download Policy Pack</Text>
          </Pressable>
        </View>

        <View style={{margin: 15}}>
          <Text style={styles.planName}>Plan name</Text>
          <Text style={styles.planText}>
            Max Life Life Gain Premier 20 Yr 10 Pay
          </Text>
        </View>

        {/* POLICY VIEW IN TABLE STRUCTURE */}
        <Table />

        <View style={styles.outerloanContainer}>
          <View>
            <Text style={styles.outerLoan}>Maximum loan amount</Text>
            <Text style={styles.outerLoanText}>₹92,817.94</Text>
          </View>
          <Pressable
            style={styles.underlineContainer}
            onPress={() =>
              alert(
                "E-Loan Request Raised...You'll get an update soon. THANK YOU!",
              )
            }>
            <View style={[styles.underline, {bottom: 35}]} />
            <Text style={styles.underlinedText}>Buy E-Loan</Text>
          </Pressable>
        </View>

        {/* UNDERLINE ROW */}
        <Text style={styles.textUnderline} />

        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>Loan interest due till date</Text>
              <Text style={styles.cellContent}>₹0.00</Text>
            </View>
            <View style={styles.verticalLine} />
            <View style={styles.cell}>
              <Text style={styles.cellHeader}>Outstanding loan</Text>
              <Text style={styles.cellContent}>₹0.00</Text>
            </View>

            {/* ASSISTANT LOGO MAX_LIFE */}
            <Assistant />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  imageStyle: {
    width: 50, // Set the width you want here
    height: 50, // Set the height you want here
    resizeMode: 'contain',
    marginLeft: 17,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
    marginVertical: 5,
  },
  textUnderline: {
    marginTop: 6,
    height: 1,
    borderColor: '#d3d3d3',
    borderWidth: 0.4,
  },
  underlineContainer: {
    position: 'relative',
  },
  underline: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderBottomWidth: 1,
    borderBottomColor: 'black', // Customize the underline color
  },
  underlinedText: {
    fontSize: 15,
    color: '#111',
    fontWeight: '700',
    textDecorationLine: 'none', // Remove default underline style
  },
  verticalLine: {
    borderColor: '#d3d3d3',
    borderWidth: 0.8,
    width: 1,
    height: 100,
  },
  tableContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    borderColor: '#808080',
    padding: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 10,
  },
  cellHeader: {
    color: '#808080',
    fontSize: 14,
  },
  cellContent: {
    fontSize: 17,
    color: '#111',
    fontWeight: '400',
    marginVertical: 7,
  },
  policyText: {
    fontSize: 18,
    fontWeight: '400',
    color: '#111',
  },
  detailPolicy: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111',
  },
  planName: {
    color: '#808080',
    fontSize: 14,
  },
  planText: {
    marginVertical: 5,
    fontSize: 16,
    color: '#111',
    fontWeight: '400',
  },
  outerloanContainer: {
    marginTop: 5,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  outerLoan: {
    fontSize: 14,
    color: '#808080',
  },
  outerLoanText: {
    fontSize: 16,
    color: '#111',
    marginVertical: 8,
  },
  imageLogo: {
    width: 45,
    height: 36,
    marginVertical: 10,
    borderRadius: 11,
  },
});
