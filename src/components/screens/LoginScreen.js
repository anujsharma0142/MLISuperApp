import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const image = {
    uri: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/push-notification-1024x512.png',
  };

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button pressed');
    console.log('ID:', id);
    console.log('Password:', password);

    navigation.navigate('Main');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>Max Life Super App</Text>
          <Text style={styles.subtitle}>The all-in-one Solution for you</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.mainHeading}>Welcome User</Text>
          <Text style={styles.heading}>Sign in to your account</Text>
          <TextInput
            style={styles.input}
            placeholder="SSO ID / USER ID"
            value={id}
            onChangeText={text => setId(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={text => setPassword(text)}
          />
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alert('Forget Your Password')}>
            <Text style={styles.forgotButton}>Forgot Password</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  title: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
  },
  mainHeading: {
    fontSize: 38,
    fontWeight: '320',
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    color: 'black',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 60,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingLeft: 15,
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#FF681F',
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton: {
    marginTop: 10,
    fontSize: 18,
    color: '#FF681F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default LoginScreen;
