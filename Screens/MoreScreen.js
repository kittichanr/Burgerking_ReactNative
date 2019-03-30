import React, { Component } from 'react'
import { Text, View,ImageBackground,StyleSheet,TouchableHighlight,ScrollView,Image } from 'react-native'

export default class MoreScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('./../Image/More/BGmore.jpg')} style={{width:'100%',height:'100%'}}>
        
        <View style={{flex:1}}>
          <View style={{flex:1,alignItems:"center",padding:50}}>
            <Image source={require('./../Image/More/BigLogo.png')} style={styles.image}/>
          </View>
          
          <View style={{flex:4,alignItems:"center",justifyContent: 'space-between'}}>
          <ScrollView>
            <View style={{alignItems:"center"}}>
              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Profile')}
                underlayColor="#ff9100" style={{marginVertical:10}} >
                <Text style={styles.text} > MY PROFILE </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Tracking2')}
                underlayColor="#ff9100" style={{marginVertical:10}}>
                <Text style={styles.text} > TRACKING ORDER </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Store')}
                underlayColor="#ff9100" style={{marginVertical:10}}>
                <Text style={styles.text} > STORES </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Contact')}
                underlayColor="#ff9100"  style={{marginVertical:10}}>
                <Text style={styles.text} > CONTACT US </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Help')}
                underlayColor="#ff9100"  style={{marginVertical:10}}>
                <Text style={styles.text} > REQUEST HELP </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Term')}
                underlayColor="#ff9100"  style={{marginVertical:10}}>
                <Text style={styles.text} > TERM & CONDITION </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('Policy')}
                underlayColor="#ff9100"  style={{marginVertical:10}}>
                <Text style={styles.text} > PRIVACY POLICY </Text>
              </TouchableHighlight>

              <TouchableHighlight onPress={()=>this.props.navigation.navigate('EnterApp')}
                underlayColor="#ff9100"  style={{marginVertical:10}}>
                <Text style={styles.text} > LOGOUT </Text>
              </TouchableHighlight>
            </View>
            </ScrollView>
          </View>
          <View style={{flex:1,justifyContent:'flex-end',flexDirection:'column'}}>
          <View style={{flex:1}}></View>
            <View style={{flex:1,flexDirection:'row',justifyContent: 'space-between',padding:10}}>
              <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={[styles.text,{fontSize: 20,}]} > TH | EN </Text>
              </View>
              <View style={{flex:1,justifyContent:'flex-end'}}>
                <Text style={[styles.text,{fontSize: 10,}]} > V.1.0.7 </Text>
              </View>
              <View style={{flex:1,justifyContent:'flex-end'}}>
                <Image source={require("../Image/More/icon_powerbybuzzebees.png")} style={{width:100,height:20}}/>
              </View>
            </View>
          </View>
        </View>
        
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  text: {
   fontFamily:'Insanibc' ,
   fontSize: 25,
   color:"white",
   paddingVertical: 10,
},
image:{
  height: 100,
  width: 100,

},
});