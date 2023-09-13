import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  container: {
    marginTop: 20,
    backgroundColor: 'red',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 20,
  },

  imageContainer: {
    flex: 1,
    marginTop: 20,
    alignItems: 'center',
  },

  imageText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111',
    marginTop: 10,
  },

  textContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    padding: 25,
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#002244',
    borderRadius: 23,
  },

  imageLogo: {
    width: 100,
    height: 100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d3d3d3',
  },

  innerTextContainer: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#333',
  },

  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
});

export default styles;
