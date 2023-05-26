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
  Image,
  Icon,

} from 'react-native';
import { useState } from 'react';
import text from './text.json';
import LinearGradient from 'react-native-linear-gradient';

function App() {

  const [inputs, setInputs] = useState({email: text.loginScreen.mailPlaceholder, phone: text.loginScreen.phonePlaceholder});

  const handleChange = (name, event) => {
    const inputName = name;
    const value = event.target.value;
    setInputs(values => ({...values, [inputName]: value}))
  }

  return (
    <SafeAreaView style={{flex:1}}>  
        <View style={styles.rootContainer}>
            <View style={styles.headerContainer}>
                <Image style={styles.logo} source={require('./public/images/logoMyCar.png')}></Image>
            </View>
            <View style={styles.loginContainer}>
                <Text style={styles.text}>{text.loginScreen.loginHeader}</Text>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputLogo} source={require('./public/images/callSquare.png')} ></Image>
                    <TextInput style={styles.input} 
                           value={inputs.phone}
                           keyboardType='email-address'
                           onChange={(e)=> handleChange('phone', e)}> 
                      </TextInput>

                </View>
                <View style={styles.inputContainer}>
                    <Image style={styles.inputLogo} source={require('./public/images/messageSquare.png')} ></Image>
                    <TextInput style={styles.input} 
                           value={inputs.email}
                           keyboardType='number-pad'
                           onChange={(e)=> handleChange('email' , e)}> </TextInput>

                </View>
                
                
            </View>
            <View style={styles.buttonContainer}>
              <View>
                <Text style={styles.buttonText}> {text.loginScreen.needHelp}</Text>
                <Text style={styles.buttonSupport}> {text.loginScreen.contactUs}</Text>
              </View>
              <Pressable style={styles.button}> 
                  <LinearGradient  colors={['#E29A56', '#E16A53', '#D8525A']}
                                   start={{ x: 0.5, y: 1.0 }}
                                   end={{ x: 1.0, y: 1.0 }}
                                   locations={[1.0, 0.8, 0.0]}
                                   style={styles.gradient}>
                       <Image style={styles.arrow} source={require('./public/images/login-button-arrow.png')}></Image>
                  </LinearGradient> 
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
    height: windowHeight * 0.2,
    flexDirection:'row',
    alignItems:'flex-end',
    justifyContent:'flex-end',
    paddingRight:20,
    shadowOpacity:0.05,
    width:'100%',
    paddingLeft:60,
  
  },
  loginContainer: {
    margin:20,
    textAlign:'right',
  },
  text: {
    margin: 12,
    fontSize:18,
    textAlign:'right'
  },
  input: {
    height: 60,
    margin: 12,
    textAlign:'right',
    borderWidth: 2,
    borderColor:'gray',
    borderRadius:5,
    fontSize:18,
    color:'#000000',
    padding:10,
    paddingRight:55
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
  flexDirection:'row-reverse',
  alignItems: 'center',
  justifyContent: 'space-between',
  margin:20
  },
  buttonText: {
    fontSize:18,
    margin:4,
    textAlign:'right'
  },
  gradient:{
      height:'100%',
      width:'100%',
      borderRadius:100,
      justifyContent:'center',
      alignItems:'center',
  },
  headerText: {
    width:'100%',
    textAlign:'center',
    fontSize:24,
    fontWeight:"700"
  },
  logo:{
    height:windowHeight * 0.1,
    width:'90%',
    resizeMode:'contain',
    
  },
  arrow:{
    width:30,
    height:30,
  },
  buttonSupport: {
    color:'#D8525A',
    fontSize:18,
  },
  inputLogo:{
    width:30,
    height:30,
    position:'absolute',
    right:30,
    top:'32%',
  },
  inputContainer:{
    position:'relative',
  }
});

export default App;
