import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import NewInventory from './NewInventory';
import NewSale from './NewSale';
import InventorySummary from './InventorySummary';
import SalesSummary from './SalesSummary';
import { authentication } from '../firebase/firebase-config';
import { signOut } from 'firebase/auth';

const HomeScreen = ({navigation}) => {

  const [modalOpen, setModalOpen] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const [salesModal, setSalesModal] = useState(false);
  const [invSum, setInvSum] = useState(false);
  const [salesSum, setSalesSum] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    let today = new Date().getDate();
    let month = new Date().getMonth();
    let year = new Date().getFullYear();
    setCurrentDate(today + '-' + month + '-' + year);
  }, [])

  const userSignOut = async () => {
    await signOut(authentication);
    navigation.navigate('Login');
  }

  return (
    <KeyboardAvoidingView style={styles.container}>

      <Modal visible={modalOpen} animationType='slide'>
        <View style={{backgroundColor: '#CEF0E1', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='remove' size={26} color={'#17716D'} onPress={() => {setModalOpen(false), setShowOptions(false)}} />
        </View>

        <NewInventory />

      </Modal>

      <Modal visible={salesModal} animationType='slide'>
        <View style={{backgroundColor: '#CEF0E1', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='remove' size={26} color={'#17716D'} onPress={() => {setSalesModal(false), setShowOptions(false)}} />
        </View>

        <NewSale />

      </Modal>

      <Modal visible={invSum} animationType='slide'>
      <View style={{backgroundColor: '#CEF0E1', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='remove' size={26} color={'#17716D'} onPress={() => {setInvSum(false), setShowOptions(false)}} />
        </View>

        <InventorySummary />
      </Modal>

      <Modal visible={salesSum} animationType='slide'>
      <View style={{backgroundColor: '#CEF0E1', alignItems: 'center', justifyContent: 'center'}}>
          <Icon name='remove' size={26} color={'#17716D'} onPress={() => {setSalesSum(false), setShowOptions(false)}} />
        </View>

        <SalesSummary />
      </Modal>

      <View style={styles.navBar}> 
       <View style={{flex: 1}}>
        <Icon style={styles.icons} name="user-o" size={45} color={"#CEF0E1"}/>
        <View>
          <TouchableOpacity onPress={() => {showSignOut ? setShowSignOut(false) : setShowSignOut(true); setShowOptions(false)}}>
          <Text style={styles.navbarText}>Musa Moses  <Icon name="angle-down" size={20} color={'#FEDB41'}/></Text>
          </TouchableOpacity>
          {showSignOut && (<View>
            <TouchableOpacity>
             <Text style={{color: '#fff', marginTop: 10}} onPress={userSignOut}>Sign Out</Text>
             </TouchableOpacity>

             <TouchableOpacity>
             <Text style={{color: '#fff', marginTop: 10}}>Cancel</Text>
             </TouchableOpacity>
            </View>)}
        </View>  
        </View>

        <View style={styles.newItems}>
          <View>

          <TouchableOpacity onPress={() => {showOptions ? setShowOptions(false) : setShowOptions(true); setShowSignOut(false)}}>
            <Text style={{marginRight: 10, color: '#fff'}}>Create New  <Icon name="angle-down" size={20} color={'#fff'} /></Text>
          </TouchableOpacity>

          {showOptions && (<View>
            <TouchableOpacity style={{marginTop: 10}} onPress={() => {setSalesModal(true)}}>
              <Text style={{color: '#fff'}}>New Sale</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{marginTop: 10}} onPress={() => {setModalOpen(true)}}>
              <Text style={{color: '#fff'}}>New Inventory</Text>
            </TouchableOpacity>
          </View>)}
          </View>

          <Text style={{color: '#fff'}}>{currentDate}</Text>
        </View>
      </View>

      <View style={styles.dashboard}>
        <TouchableOpacity style={styles.dashboardItems}>
          <Text>Summary</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dashboardItems} onPress={() => {setInvSum(true)}}>
          <Text>Inventory</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.dashboardItems} onPress={() => {setSalesSum(true)}}>
          <Text>Sales</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.summaryDashboard}>
        <View style={styles.summaryItems}>
          <Text>All</Text>
        </View>

        <View style={styles.summaryItems}>
          <Text>King Size</Text>
        </View>

        <View style={styles.summaryItems}>
          <Text>One and 1/4</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#17716D',
    flex: 1,
  },

  navBar: {
    paddingTop: 35,
    margin: 15,
    flexDirection: 'row',
  },

  dashboard: {
    backgroundColor: '#CEF0E1',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },

  dashboardItems: {
    padding: 10,
  },

  summaryDashboard: {
    width: '90%',
    marginTop: 20,
    marginRight: 15,
    marginLeft: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  summaryItems: {
    backgroundColor: '#CEF0E1',
    width: 100,
    height: 100,
    padding: 15,
    borderRadius: 10,
  },

  navbarText: {
    marginTop: 20,
    color: '#FEDB41',
  },

  newItems: {
    flexDirection: 'row',
    marginTop: 40,
  }

})