/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  NativeAppEventEmitter,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TextInput,
  Pressable,
  Image
} from 'react-native';
import { useState } from 'react';
import Header from './components/Header';

function App() {

  const [inputs, setInputs] = useState({email: 'Type your email...', phone: 'Type your phone number...'});

  const handleChange = (name, event) => {
    const inputName = name;
    const value = event.target.value;
    setInputs(values => ({...values, [inputName]: value}))
  }

  return (
    <SafeAreaView style={{flex:1}}>  
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Image style={styles.logo} source={require('./public/images/logo.png')}></Image>
              <Text style={styles.headerText}> My Timer</Text>  
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.text}>Please type your email and phone number to log in to the timer app</Text>
                <TextInput style={styles.input} 
                           value={inputs.email}
                           keyboardType='email-address'
                           onChange={(e)=> handleChange('email', e)}> </TextInput>
                <TextInput style={styles.input} 
                           value={inputs.phone}
                           keyboardType='number-pad'
                           onChange={(e)=> handleChange('phone' , e)}> </TextInput>
            </View>
            <View style={styles.buttonContainer}>
              <View>
                <Text style={styles.buttonText}> Need Help?</Text>
                <Text style={styles.buttonSupport}> contact support </Text>
              </View>
              <Pressable style={styles.button}> 
                  <Image style={styles.arrow} source={require('./public/images/login-button-arrow.png')}></Image>
              </Pressable>
            </View>
        </View>
    </SafeAreaView>
  );
}


const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  rootContainer: {
      flex:1,
      backgroundColor:'white'
  },
  headerContainer: {
    backgroundColor:"white",
    height: windowHeight * 0.1,
    flexDirection:'row',
    alignItems:'center',
    elevation:2,
    shadowColor:'#AA77FF',
    shadowOffset: {width: 0, height:3},
    shadowOpacity:0.05,
    width:'100%',
  
  },
  loginContainer: {
    height: windowHeight * 0.4,
    margin:20,
    justifyContent:'center'
  },
  text: {
    margin: 12,
    fontSize:16
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 2,
    borderColor:'gray',
    borderRadius:5,
    color:'#000000',
    padding:10
  },
  button: {
    width:80,
    height: 80,
    backgroundColor:'#AA77FF',
    borderRadius:100,
    shadowColor:'#000',
    shadowOffset: {width: 1, height:3},
    shadowOpacity:0.1,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  buttonContainer: {
  height: windowHeight * 0.3,
  flexDirection:'row',
  alignItems: 'center',
  justifyContent: 'space-around'
  },
  buttonText: {
    fontSize:16,
    margin:4
  },
  headerText: {
    width:'100%',
    textAlign:'center',
    fontSize:24,
    fontWeight:"700"
  },
  logo:{
    width:30,
    height:30,
    padding:10,
    position:'absolute',
    left:20,
  },
  arrow:{
    width:30,
    height:30,
    transform: [{rotate: '180deg'}],
  },
  buttonSupport: {
    color:'#AA77FF',
    fontSize:16,
  }
});

export default App;
