import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

const AppoinmentScreen = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.option}>
        <Text style={styles.optiontext}>Online Appoinment</Text>
        <LottieView source={require('../assets/online_appointment.json')} style={styles.Lottie} autoPlay
            loop/>
      </View>
      <View style={styles.option}>
        <Text style={styles.optiontext}>Offline Consultation</Text>
        <LottieView source={require('../assets/checkup.json')} style={styles.Lottie} autoPlay
            loop/>
      </View>
    </View>
  )
}

export default AppoinmentScreen

const styles = StyleSheet.create({
    Container:{
        flex:1,
        backgroundColor:'#fff',
        justifyContent:'center',
        padding:10
    },
    option:{
        backgroundColor:'#fff',
        padding:10,
        elevation:3,
        alignItems:'center',
        borderRadius:10, 
        marginBottom:20,
        flexDirection:'row', justifyContent:'space-between'
    },
    Lottie:{
        width:100,
        height:100
    },
    optiontext:{
        fontWeight:'bold',
        fontSize:15
    }
})