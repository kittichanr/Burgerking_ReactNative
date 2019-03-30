import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet,ScrollView} from 'react-native'

export default class Typecoupon extends Component {
  render() {
    return (
        <ScrollView horizontal={true}>
      <View style={styles.container}>
            <Image source={require('../../Image/Reward/mycoupons.jpg')} style={styles.image}/>
            <Image source={require('../../Image/Reward/coupons.jpg')} style={styles.image}/>
            <Image source={require('../../Image/Reward/specialredeem.jpg')} style={styles.image}/>
      </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
    container:{
        margin:10,
        flexDirection: 'row',
        width:'100%'
    },
    image:{
        width:170,
        height:35,
        margin: 10,
        borderWidth: 3,
        borderColor: '#ff9100',
        borderRadius:20,
    }
})
