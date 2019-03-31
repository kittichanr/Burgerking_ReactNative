import React, { Component } from 'react'
import { Text, View ,Image,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';

export default class Rabbit_RewardScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ScrollView >
          <View style={{flex:1}}>
            <Image source={require('../Image/Reward/Rabbit_Reward1.jpeg')} style={{width:'100%',height:300}}/>
          </View>
        <Swiper style={styles.wrapper} showsButtons={true}>
        <View style={styles.slide1}>
          <View style={styles.image}>
            <Image source={require('../Image/Reward/Rabbit_Reward2.jpg')} style={{width:'80%',height:200}}/>
            <View style={styles.enterApp}>
              <TouchableOpacity >
                <Text style={[styles.text,{color:'white'}]}>แลกเลย</Text>
              </TouchableOpacity>
            </View> 
          </View>
        </View>
        <View style={styles.slide2}>
        <View style={styles.image}>
            <Image source={require('../Image/Reward/Rabbit_Reward3.jpg')} style={{width:'80%',height:200}}/>
            <View style={styles.enterApp}>
              <TouchableOpacity >
                <Text style={[styles.text,{color:'white'}]}>แลกเลย</Text>
              </TouchableOpacity>
            </View> 
          </View>
        </View>
      </Swiper>
      <View style={styles.location}>
        <Text style={styles.text}>Rabbit Rewards Company Limited</Text>
        <Text style={styles.text}>21 TST Tower, 19th floor, Viphavadi-</Text>
        <Text style={styles.text}>Rangsit Road, Chomphon, Chatuchak,</Text>
        <Text style={styles.text}>Bangkok 10900</Text>
        <Text style={[styles.text,{fontSize:16,fontWeight:'bold'}]}>FAQ</Text>
        <Text style={[styles.text,{fontSize:16,fontWeight:'bold'}]}>Terms and Conditions</Text>
        <Text style={[styles.text,{fontSize:16,fontWeight:'bold'}]}>Program Rules</Text>
        <Text style={[styles.text,{fontSize:16,fontWeight:'bold'}]}>Privacy Policy</Text>
        <Text style={styles.text}>© 2017 Rabbit Rewards Company Limited. All Rights Reserved.</Text>
      </View>
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  wrapper: {
    flex:2,
    height:300,
    margin: 10,
    
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  enterApp:{
    backgroundColor:'#ff9100',
    borderRadius:4, 
    alignItems: 'center',
    justifyContent: 'center',
    height:40,
    marginHorizontal:8,
    marginBottom: 5,
  },
  image:{
    width:'80%',
    borderWidth:2,
    borderColor:'#e0e0e0'
  },
  location:{
    backgroundColor:'#e0e0e0',
    flex:1,
    width:'100%',
    height:250,
    justifyContent: 'center',
  },
  text:{
    textAlign:'center',
    color:'grey'
  }
 
})