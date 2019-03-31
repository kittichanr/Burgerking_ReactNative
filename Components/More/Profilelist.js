import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import { Icon} from 'native-base';
export default class Profilelist extends Component {
  render() {
    return (
      <View style={{flexDirection:'column'}}>
        <View style={{flexDirection:'row'}}>
            <Icon type={this.props.icontype} name={this.props.iconname} style={styles.icon}/>
            <Text style={styles.text}>{this.props.text}</Text>
        </View>
        <View>
            <Text style={{marginLeft:20,color:'grey'}}>{this.props.text2}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    icon:{
      fontSize:16,
      color:'#ff9100',
      marginRight: 5,
    },
    text:{
      color:'#ff9100'
    }
  })