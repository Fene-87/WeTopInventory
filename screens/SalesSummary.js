import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect} from 'react'
import { db } from '../firebase/firebase-config'
import { collection, doc, getDocs } from 'firebase/firestore'
import { async } from '@firebase/util'

const SalesSummary = () => {

  const [sales, setSales] = useState([]);
  const salesColRef = collection(db, "Sales")

  useEffect(() => {
    const getSales = async () => {
      const data = await getDocs(salesColRef);
      setSales(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }

    getSales();
  }, [])


  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.titleText}>
          <Text style={{color: '#fff'}}>Date</Text>
          <Text style={{color: '#fff'}}>Time</Text>
          <Text style={{color: '#fff'}}>Type</Text>
          <Text style={{color: '#fff'}}>Amount</Text>
          <Text style={{color: '#fff'}}>Cash</Text>
          <Text style={{color: '#fff'}}>MpesaRef</Text>    
        </View>

        {sales.map((sale) => {
          return(
            <View style={styles.saleDetails}>
              <Text style={{color: '#17716D'}}>{sale.date}</Text>
              <Text style={{color: '#17716D'}}>{sale.time}</Text>
              <Text style={{color: '#17716D'}}>{sale.type}</Text>
              <Text style={{color: '#17716D'}}>{sale.amount}</Text>
              <Text style={{color: '#17716D'}}>{sale.cash}</Text>
              <Text style={{color: '#17716D'}}>{sale.mpesaRef}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  )
}

export default SalesSummary

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CEF0E1',
    padding: 15,
  },
  
  titleText: {
    backgroundColor: '#17716D',
    padding: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  saleDetails: {
    marginTop: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})