import React, { Component } from 'react'
import { Text, View ,Image,StyleSheet,TouchableHighlight} from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons';
export default class Header extends Component {
  render() {
    return (
        
        <View style={{flex:1}}>
        {this.props.routeName === 'Home' 
        ? 
        <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1,alignItems:'flex-start',marginTop:5}}>
            <Icon  name="bell"  style={{fontSize: 40,color:'white'}} />
        </View>
        <View style={{flex:1,alignItems:'center'}}>
            <Image source={require('../Image/burgerking_logo.png')} style={{width:50,height:50,borderRadius:23}}/>
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
        {/* <TouchableHighlight onPress={()=>this.props.navigation.navigate('Policy')}> */}
            <Icon  name="bag"  style={{fontSize: 40,margin:5,color:'white'}} />
            {/* </TouchableHighlight> */}
        </View> 
        </View>
        :
        <View style={{flex:1,flexDirection:'row'}}>
        <View style={{flex:1,alignItems:'flex-start',marginTop:5}}>
            <Icon  name="bell"  style={{fontSize: 40,color:'white'}} />
        </View>
        <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={styles.text}>{this.props.TextHeader}</Text>
        </View>
        <View style={{flex:1,alignItems:'flex-end'}}>
        <Icon  name="bag"  style={{fontSize: 40,margin:5,color:'white'}}/>
        </View> 
        </View>
        }
    </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
     fontFamily:'Insanibc',
     fontSize:20,
     color:'white' 
  },
  })