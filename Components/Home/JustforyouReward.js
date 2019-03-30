import React, { Component } from 'react'
import { Text, View ,StyleSheet,Image,TouchableOpacity } from 'react-native'

export default class JustforyouReward extends Component {
  render() {
    return (
      <View style={{marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={[styles.text,{marginLeft:5,fontSize:20}]}>JUST FOR YOU REWARDS</Text>
            <Text style={[styles.text,{marginLeft:50,fontSize:12,color:'#ff9100',marginTop:8}]}>All Rewards ></Text>
            </View>
        <View style={{flex:1,flexDirection:'row'}}> 
            <View style={{width:'48%',margin:5}}>
                <View style={{flex:1}}>
                    <Image source={require('../../Image/Home/reward1.jpeg')} style={{width:'100%',height:200}}/>
                </View>
                <View style={{flex:1,marginTop:20}}>
                    <Text style={{fontWeight:'bold',textAlign:'center'}}>Apple pie</Text>
                </View>
                <View style={styles.seeDetail}>
                    <TouchableOpacity >
                        <Text style={[styles.text,{color:'white'}]}>REDEEM</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{width:'48%',margin:5}}>
                <View style={{flex:1}}>
                    <Image source={require('../../Image/Home/reward2.jpeg')} style={{width:'100%',height:200}}/>
                </View>
                <View style={{flex:1,marginTop:20}}>
                    <Text style={{fontWeight:'bold',textAlign:'center'}}>Taro corn pie</Text>
                </View>
                <View style={styles.seeDetail}>
                    <TouchableOpacity >
                        <Text style={[styles.text,{color:'white'}]}>REDEEM</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
     fontFamily:'Insanibc' 
  },
  seeDetail:{
    flex:0.5,
    backgroundColor:'#ffc400',
    borderRadius:4, 
    alignItems: 'center',
    justifyContent: 'center',
    height:35,
    marginHorizontal:5,
    marginTop:20
  },
})