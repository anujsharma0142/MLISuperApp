import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 15,
  },
  imageLogo: {
    width: 40,
    height: 40,
    marginVertical: 5,
  },
  textUnderline: {
    marginTop: 3,
    height: 1,
    borderColor: '#d3d3d3',
    borderWidth: 1,
  },
  button: {
    padding: 10,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#000',
  },
  buttonOn: {
    backgroundColor: 'green',
  },
  buttonOff: {
    backgroundColor: 'red',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
