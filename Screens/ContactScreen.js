import React, { Component } from 'react'
import {Image, Text, View ,ImageBackground,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'

export default class ContactScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('./../Image/More/BGmore.jpg')} 
            style={styles.bg} >
            <TouchableHighlight onPress={()=>this.props.navigation.goBack()}>
                <Text style={styles.back}> 
                    &lt;
                </Text>
            </TouchableHighlight>
            <Text style={styles.text}> 
                CONTACT US
            </Text>
        </ImageBackground>
        <View style={styles.container}>
            <View style={styles.line}>
                <View style={{flex:1,flexDirection: 'row',alignItems: 'center',}}>
                    <Image source={require('./../Image/More/icon-call.png')}/>
                    <Text style={{color:"#ff9100",fontSize:20,fontFamily:'Insanibc',marginLeft:10}}> 
                        Call Center
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{textAlign:"right",fontSize:20,fontFamily:'Insanibc',marginRight:10}}> 
                        1112
                    </Text>
                </View>
            </View>
            <View style={styles.line}>
            <View style={{flex:1,flexDirection: 'row',alignItems: 'center',}}>
                    <Image source={require('./../Image/More/icon-facebook.png')}/>
                    <Text style={{color:"#ff9100",fontSize:20,fontFamily:'Insanibc',marginLeft:10}}> 
                        Facebook
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{textAlign:"right",fontSize:20,fontFamily:'Insanibc',marginRight:10}}> 
                        @BurgerKingThailand
                    </Text>
                </View>
            </View>
            <View style={styles.line}>
            <View style={{flex:1,flexDirection: 'row',alignItems: 'center',}}>
                    <Image source={require('./../Image/More/icon-call.png')}/>
                    <Text style={{color:"#ff9100",fontSize:20,fontFamily:'Insanibc',marginLeft:10}}> 
                        Delivery Time
                    </Text>
                </View>
                <View style={{flex:1}}>
                    <Text style={{textAlign:"right",fontSize:20,fontFamily:'Insanibc',marginRight:10}}> 
                        10.00-00.00 AM
                    </Text>
                </View>
            </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    bg: {
        flex:2,
        alignContent:'center',
        paddingTop:30,
  },
  text:{
    fontSize:35,
    fontFamily:'Insanibc',
    color:'white',
    marginTop:20,
    textAlign:'center'
  },
  back:{
    fontSize:35,
    color:'white',
    marginLeft:10,
  },
  container: {
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    padding:10,
    marginBottom:100,
    borderColor: 'lightgray',
    margin: '2.5%',
    borderTopColor:  '#ff9100',
    borderTopWidth: 4,
    flex:5
  },
  line:{
    borderBottomColor:  'gray',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingVertical: 30,
  },
  });