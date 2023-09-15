import {View, Text, FlatList, StyleSheet} from 'react-native';
import React from 'react';

const data = [
  {
    id: '1',
    leftHeader: 'Policy status',
    leftContent: 'Active',
    rightHeader: 'Policy term',
    rightContent: '20 Years',
  },
  {
    id: '2',
    leftHeader: 'Policy issue date',
    leftContent: '09/02/2015',
    rightHeader: 'Policy maturity date',
    rightContent: '09/02/2035',
  },
  {
    id: '3',
    leftHeader: 'Base sum insured',
    leftContent: '2,82,019.00',
    rightHeader: 'Cash value',
    rightContent: '1,85,635.87',
  },
  {
    id: '4',
    leftHeader: 'Policy owner',
    leftContent: 'Mr. Kapil Kumar Katiyar',
    rightHeader: 'Insured name',
    rightContent: 'Mr. Kapil Kumar Katiyar',
  },
];

const Table = () => {
  const renderRow = ({item}) => {
    return (
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={styles.cellHeader}>{item.leftHeader}</Text>
          <Text style={styles.cellContent}>{item.leftContent}</Text>
        </View>
        <View style={styles.verticalLine} />
        <View style={styles.cell}>
          <Text style={styles.cellHeader}>{item.rightHeader}</Text>
          <Text style={styles.cellContent}>{item.rightContent}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.tableContainer}>
      <FlatList
        data={data}
        renderItem={renderRow}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => <View style={styles.horizontalLine} />}
      />
    </View>
  );
};

export default Table;

const styles = StyleSheet.create({
  tableContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderWidth: 0.2,
    borderColor: '#808080',
    padding: 10,
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
  verticalLine: {
    height: '123%',
    width: 0.5,
    backgroundColor: '#808080',
  },
  horizontalLine: {
    height: 0.5,
    width: '123%',
    backgroundColor: '#808080',
    marginVertical: 5,
  },
});
