import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet , Image } from 'react-native';

const LoginScreen = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const image = {uri: 'https://www.mindinventory.com/blog/wp-content/uploads/2022/10/push-notification-1024x512.png'};

  const handleLogin = () => {
    // Add your login logic here
    console.log('Login button pressed');
    console.log('ID:', id);
    console.log('Password:', password);
  };

  return (
    
    
    // <View style={styles.container}>
       
      

    //     <View style={styles.card}>
    //         <Text style={styles.mainHeading}>Welcome User</Text>
    //       <Text style={styles.heading}>Sign in to your account</Text>
    //       <TextInput
    //         style={styles.input}
    //         placeholder="SSO ID / USER ID"
    //         value={id}
    //         onChangeText={(text) => setId(text)}
    //       />
    //       <TextInput
    //         style={styles.input}
    //         placeholder="Password"
    //         secureTextEntry={true}
    //         value={password}
    //         onChangeText={(text) => setPassword(text)}
    //       />
    //       <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
    //         <Text style={styles.loginButtonText}>Login</Text>
    //       </TouchableOpacity>
    //       <TouchableOpacity >
    //         <Text style={styles.forgotButton}>
    //         Forgot Password
    //         </Text>
           
    //       </TouchableOpacity>
    //     </View>
    //   </View>
    <View style={styles.container} >
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
       <View style={{marginTop:500 ,margin:50, padding:40,height:220,width:500, marginLeft:'auto'}}>
       <Text style={{color:'white' , fontSize:20, marginLeft:70  }}>Max Life Super App</Text>
       <Text style={{color:'white' , fontSize:40,marginLeft:40 }}>The all-in-one Solution for you</Text>
       </View>
       
      

       <View style={styles.card}>
           <Text style={styles.mainHeading}>Welcome User</Text>
         <Text style={styles.heading}>Sign in to your account</Text>
         <TextInput
           style={styles.input}
           placeholder="SSO ID / USER ID"
           value={id}
           onChangeText={(text) => setId(text)}
         />
         <TextInput
           style={styles.input}
           placeholder="Password"
           secureTextEntry={true}
           value={password}
           onChangeText={(text) => setPassword(text)}
         />
         <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
           <Text style={styles.loginButtonText}>Login</Text>
         </TouchableOpacity>
         <TouchableOpacity >
           <Text style={styles.forgotButton}>
           Forgot Password
           </Text>
          
         </TouchableOpacity>
       </View>
    
    </ImageBackground>
    </View>

   
      
   );
 };

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {
    // backgroundColor: 'rgba(255, 255, 255, 0.8)',
    backgroundColor:'white',
    // marginTop:295,
    marginBottom:485,
    borderTopRightRadius:40,
    borderTopLeftRadius:40,
    width: '100%',
    alignItems: 'center',
    
  },
  heading: {
    fontSize: 20,
    // fontWeight: '100',
    color:'black',
    marginBottom: 30,
  },
  mainHeading:{
    marginVertical:10,
    fontSize: 38,
    fontWeight: '320',
    marginBottom: 20,
    color:'black'

  },
  input: {
    width: '90%',
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
    width: '90%',
    height:50,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotButton:{
    marginTop:10,
    fontSize:18,
    color:'#FF681F',
    fontWeight:'bold',
   
  },
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default LoginScreen;
