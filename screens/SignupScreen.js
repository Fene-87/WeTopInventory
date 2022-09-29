import { Dimensions, ImageBackground, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { authentication } from '../firebase/firebase-config'
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignupScreen = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try{
    const user = await createUserWithEmailAndPassword(
      authentication,
      email,
      password
    )
    console.log(user)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <ImageBackground style={{
        height: Dimensions.get('window').height / 3.5,
      }}>

      </ImageBackground>
      <View style={styles.bottomView}>
        
      <Text style={{color: '#0FAFDE', fontSize: 32, fontWeight: 'bold'}}>Sign Up</Text>
       <View style={styles.inputContainer}>
        
       <Text style={{marginTop: 50,}}>Phone Number</Text>
        <TextInput 
          placeholder="Email"
          value={email}
          onChangeText= {text => setEmail(text)}
          style={styles.input}
        />
        
        
        <Text style={{marginTop: 20,}}>Password</Text>
         <TextInput 
          placeholder="Password"
          value={password}
          onChangeText= {text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        
       </View>

       

        <View>
          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </KeyboardAvoidingView>
  )
}

export default SignupScreen

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
      marginTop: 40,
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