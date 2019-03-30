import React, { Component } from 'react'
import { Text, View,ImageBackground } from 'react-native'

export default class TrackingScreen extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={require('../Image/Tracking/tracking1.jpeg')} style={{width:'100%',height:'100%'}}/>
      </View>
    )
  }
}
