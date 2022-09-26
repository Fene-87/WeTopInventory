import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { collection, doc, getDocs } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'

const InventorySummary = () => {

    const [inventory, setInventory] = useState([]);
    const inventoryColRef = collection(db, "Inventory");

    useEffect(() => {
      const getInventory = async () => {
        const data = await getDocs(inventoryColRef);
        setInventory(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        console.log(inventory)
      }

      getInventory();
    }, [])

    
  return (
    <View style={styles.container}>
      <ScrollView style={styles.inventoryScroll}>
        <View style={styles.titleText}>
          <Text style={{color: '#fff'}}>Date</Text>
          <Text style={{color: '#fff', marginLeft: 45}}>Time</Text>
          <Text style={{color: '#fff'}}>Type</Text>
          <Text style={{color: '#fff'}}>Amount</Text>
        </View>

        
          {inventory.map((invent) => {
            return(
              <View style={styles.inventoryDetails}>
                <Text style={{color: '#17716D'}}>{invent.date}</Text>
                <Text style={{color: '#17716D'}}>{invent.time}</Text>
                <Text style={{color: '#17716D'}}>{invent.type}</Text>
                <Text style={{color: '#17716D'}}>{invent.amount}</Text>
              </View>
            )
          })}
        
      </ScrollView>
    </View>
  )
}

export default InventorySummary

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#CEF0E1',
    flex: 1,
    padding: 15,
  },

  titleText: {
    backgroundColor: '#17716D',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  inventoryDetails: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: 'space-between'
  }
})