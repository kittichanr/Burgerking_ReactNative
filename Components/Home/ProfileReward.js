import React, { Component } from 'react'
import { Text, View ,Image ,TouchableOpacity,StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'

export default class ProfileReward extends Component {
  render() {
    return (
      <View style={{backgroundColor:'rgba(240, 240, 240, 0.5)',flex:0.2,height:10,width:'100%',flexDirection:'row',justifyContent:'center',} }>
         <View style={{flex:1,padding:10}}>
            <View style={{backgroundColor:'white',flex:1,borderRadius:40,borderColor:'#ff9100',borderWidth:3}}>
                <Icon name="user" size={60} style={{alignSelf:'center',color:'rgba(0, 0, 0, 0.5)'}}/>
            </View>
          </View>
          <View style={{flex:3,marginTop:10}}>
              <View style={{flexDirection:'column'}}>
                  <View style={{flexDirection:'row'}}>
                      <View style={{flex:1.5,marginLeft:10,flexDirection:'row'}}>
                          <Image source={require('../../Image/Home/goalMedal.jpg')} style={{width:20,height:20}}/>
                          <Text style={{fontWeight:'bold',fontSize:8}}>  0 Crows Points</Text>
                      </View>
                      
                  </View>
                  <View style={{flex:1,flexDirection:'row',alignContent:'center'}}>
                    <View style={styles.getReward}>
                        <TouchableOpacity >
                        <Text style={[styles.text,{color:'white'}]}>Get Rewards</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.earnPoint}>
                        <TouchableOpacity >
                        <Text style={[styles.text,{color:'white'}]}>Earn Ponts</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
              </View>
          </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop:50
    },
    text:{
      fontFamily: 'Insanibc', 
      fontSize: 14,
      alignSelf:'center',
    },
    getReward:{
        flex:0.5,
        backgroundColor:'#ff9100',
        borderRadius:4, 
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        marginHorizontal:5,
        
      },
      earnPoint:{
        flex:0.5,
        backgroundColor:'#00c853',
        borderRadius:4, 
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        marginHorizontal:8,
        
      }
})