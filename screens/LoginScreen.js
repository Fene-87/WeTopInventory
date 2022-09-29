import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, } from 'react'
import { authentication } from '../firebase/firebase-config';
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from 'react';


const LoginScreen = ({ navigation }) => {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [isSignedIn, setIsSignedIn] = useState(false);

  const signIn = async () => {
    try{
    const userSignIn = await signInWithEmailAndPassword(
      authentication,
      loginEmail,
      loginPassword
    )
    console.log(userSignIn);
    alert('succesfully signed in');
    navigation.navigate('Home')
    } catch (error) {
      console.log(error)
      alert('Invalid username/password')
    }
  }


  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground style={{
        height: Dimensions.get('window').height / 3.5,
      }}>

      </ImageBackground>
      <View style={styles.bottomView}>
        
      <Text style={{color: '#0FAFDE', fontSize: 32, fontWeight: 'bold'}}>Welcome Back</Text>
       <View style={styles.inputContainer}>
        
       <Text style={{marginTop: 50,}}>Phone Number</Text>
        <TextInput 
          placeholder="Email"
          value={loginEmail}
          onChangeText= {text => setLoginEmail(text)}
          style={styles.input}
        />
        
        
        <Text style={{marginTop: 20,}}>Password</Text>
         <TextInput 
          placeholder="Password"
          value={loginPassword}
          onChangeText= {text => setLoginPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        
       </View>

       <View style={styles.remember}>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')} style={{flex: 1,}}>
          <Text style={{color: 'blue'}}>Sign Up</Text>
          </TouchableOpacity>
          <Text>Forgotten Password?</Text>
        </View>

        <View>
          <TouchableOpacity style={styles.button} onPress={signIn}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    
  container: {
    flex: 1,
    backgroundColor: '#17716D',
},

bottomView: {
  flex: 1.5,
  width: '100%',
  backgroundColor: '#CEF0E1',
  borderTopStartRadius: 40,
  borderTopEndRadius: 40,
  padding: 40,
}, 

inputContainer: {
  width: '100%',
},

input: {
  backgroundColor: 'white',
  paddingHorizontal: 15,
  paddingVertical: 8,
  borderRadius: 15,
  marginTop: 5,
},

button: {
  width: '100%',
  backgroundColor: '#17716D',
  paddingHorizontal: 15,
  paddingVertical: 10,
  marginTop: 20,
  borderRadius: 15,
  alignItems: 'center',
},

buttonText: {
  color: '#FEDB41',
  
},

remember: {
  flexDirection: 'row',
  marginTop: 20,
}

    
})