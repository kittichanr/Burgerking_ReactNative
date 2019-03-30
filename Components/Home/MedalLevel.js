import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet} from 'react-native'

export default class MedalLevel extends Component {
  render() {
    return (
        <View style={{flex:0.15,flexDirection:'row',justifyContent:'center',alignItems: 'center'}}>
        <View style={{flex:1}}>
          
        </View>
        <View style={{flex:3}}>
            <View style={{flexDirection:'column'}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginLeft:10,flexDirection:'row'}}>
                        <Image source={require('../../Image/Home/silverMedal.png')} style={{width:20,height:20}}/>
                        <Text style={{fontWeight:'bold',color:'#ff9100'}}>   Silver</Text>
                    </View>
                    <View style={{flex:1.5,marginLeft:60,flexDirection:'row'}}>
                        <Text>Gold   </Text>
                        <Image source={require('../../Image/Home/goalMedal.jpg')} style={{width:20,height:20}}/>
                    </View>
                </View>
                <View style={{backgroundColor:'#e0e0e0',width:'80%',height:5,marginLeft:10,marginTop:3}}/>
                <Text style={{color:'#ff9100',marginLeft:55,fontSize:10,fontWeight:'bold'}}>40 CROWN POINTS TO GOLD LEVEL ></Text>
            </View>
        </View>
          
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text:{
        fontFamily:'Insanibc'
    }
})