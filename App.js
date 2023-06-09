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
  ActivityIndicator,
  Modal

} from 'react-native';
import { useState, useEffect } from 'react';
import text from './text.json';
import LinearGradient from 'react-native-linear-gradient';
import Header from './components/Header';

function App() {

  const [inputs, setInputs] = useState({email: text.loginScreen.mailPlaceholder, phone: text.loginScreen.phonePlaceholder});
  const [isAuthorized, setIsAuthorized] = useState(true);
  const[isLoading, setIsLoading] = useState(false);
  const [isTimerActive, setTimerActive] = useState(false);
  const[timerCounter, setTimerCounter] = useState(0);

  const handleChange = (name, event) => {
    const inputName = name;
    const value = event.target.value;
    setInputs(values => ({...values, [inputName]: value}))
  }

  const onPressLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsAuthorized(true);
    }, 2000);
  }

  const onPressTimerReset = () => {
    setTimerCounter(0);
    setTimerActive(false)
  }

 useEffect(() => {
    if(isTimerActive) {
      const timer = setInterval(() => {
        setTimerCounter(counter => counter + 1);
      }, 1000);
      return () => clearInterval(timer);
    }
 },[isTimerActive, timerCounter])

  return (
    <SafeAreaView style={{flex:1}}>  

   
      { isAuthorized ?
       <View style={styles.rootContainer}> 
              <Header/>
              <View style={styles.timerContainer}>
                  <Text style={styles.timerText}> 
                    {timerCounter}
                  </Text>
              </View>
              <View style={styles.timerButtonsContainer}>
                <Pressable style={[styles.timerButton , isTimerActive ? {backgroundColor:'gray'} : {backgroundColor:'green'} ]} onPress={()=>setTimerActive((state)=>!state)}>
                    <Text>{ isTimerActive ? "Pause" : "Start"}</Text>
                </Pressable>
                <Pressable style={styles.timerButton} onPress={onPressTimerReset}> 
                  <Text> Reset</Text>
                </Pressable>
              </View>

       </View>
       :
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
              <Pressable style={styles.button} onPress={onPressLogin}> 
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
      }
     
     


        {/* { isLoading && <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" />
        </View>
      } */}

      <Modal animationType='slide' transparent visible={isLoading}>
        <View style={styles.centeredView}>
            <ActivityIndicator size="large" />
        </View>
       
      </Modal>
    </SafeAreaView>
   
  );
}


const windowHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position:'absolute',
    top:0,
    left:0,
    backgroundColor:'rgba(255,255,255,0.1',
    height: windowHeight,
    width:'100%'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
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
  },
  centeredView: {
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent: "center",
    alignItems: "center",

  },
  timerContainer:{
    height:windowHeight * 0.4,
    margin:20,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#AA77FF',
    borderRadius:15,
    shadowColor:'#000',
    shadowOffset: {width: 1, height:3},
    shadowOpacity:0.1,
  },
  timerButtonsContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    margin:25,
  },
  timerButton:{
     borderWidth:1,
     padding:15,
     paddingHorizontal:40,
     borderRadius:10
  },
  timerText:{
    fontSize:60,
  },

});

export default App;
