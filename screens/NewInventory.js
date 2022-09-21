import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { db } from '../firebase/firebase-config'
import { doc, setDoc, addDoc, collection } from 'firebase/firestore'

const NewInventory = () => {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('');
  const [amount, setAmount] = useState(0);

  const inventoryCollectionRef = collection(db, "Inventory")

  const addInventory = async () => {
    await addDoc(inventoryCollectionRef, {
      date: date,
      time: time,
      type: type,
      amount: amount,
    })

  }


  return (
    <KeyboardAvoidingView style={styles.container}>
    <Text style={styles.headerText}>New Inventory</Text>

        <View style={styles.dateTime}>
            <View style={{width: '60%'}}>
                <Text style={styles.infoText}>Date</Text>
                <TextInput 
                  placeholder='dd-mm-yyyy'
                  value={date}
                  onChangeText={text => setDate(text)}
                  style={styles.entry}
                />
            </View>
            <View style={{width: '30%'}}>
                <Text style={styles.infoText}>Time</Text>
                <TextInput 
                  placeholder='00:00'
                  value={time}
                  onChangeText={text => setTime(text)}
                  style={styles.entry}
                />
            </View>
        </View>

           <Text style={styles.infoText}>Type</Text>
                <TextInput 
                  placeholder='King Size'
                  value={type}
                  onChangeText={text => setType(text)}
                  style={styles.entry}
                />  

            <Text style={styles.infoText}>Amount</Text>
                <TextInput 
                  placeholder='000'
                  value={amount}
                  onChangeText={text => setAmount(text)}
                  style={styles.entry}
                />  

            
            <TouchableOpacity style={styles.saveButton} onPress={addInventory}>
              <Text style={{color: '#fff'}}>Save</Text>
            </TouchableOpacity>   

            </KeyboardAvoidingView>
  )
}

export default NewInventory

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEF0E1',
    paddingVertical: 35,
    paddingHorizontal: 20,
  },

  headerText: {
    color: '#17716D', 
    fontSize: 25,
  },

  dateTime: {
    width: '100%',
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'  
  },

  entry: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginTop: 5,
  },

  infoText: {
    marginTop: 10,
    fontWeight: 'bold',
  },

  saveButton: {
    marginTop: 20,
    backgroundColor: '#17716D',
    width: '50%',
    padding: 15,
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
    
  },
})