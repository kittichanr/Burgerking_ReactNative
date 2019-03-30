import React, { Component } from 'react'
import { Text, View,ScrollView } from 'react-native'
import Typecoupon from '../Components/Reward/Typecoupon'
import ListReward from '../Components/Reward/ListReward'

export default class MyLevel_RewardScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#f5f5f5'}}>
        <ScrollView>
          <Typecoupon/>
          <ListReward/>
          </ScrollView>
      </View>
    )
  }
}
