import React, { Component } from 'react'
import { Text, View,StyleSheet ,FlatList,Image,TouchableOpacity} from 'react-native'

export default class ListReward extends Component {

  constructor(props){
    super(props);
    this.state={
      data:[
        {
          image:require('../../Image/Reward/Reward1.jpg'),
          description:'50% Extra-long ChickenCheese'
        },
        {
          image:require('../../Image/Reward/Reward2.jpg'),
          description:'50% Discount Double Cheese Burger Pork'
        },
        {
          image:require('../../Image/Reward/Reward3.jpg'),
          description:'50% Discount Double Cheese Burger'
        },{
          image:require('../../Image/Reward/Reward4.jpg'),
          description:'Buy Double Mushroom Swiss Set Free Double Mushroom Swiss'
        }
        ,{
          image:require('../../Image/Reward/Reward5.jpg'),
          description:'Buy Whopper Cheese Set Free Whopper Cheese'
        }
      ]
    }
  }

  renderItem=({item})=>{
    return(
      <View style={styles.reward}>
        <Image source={item.image} style={styles.image}/>
        <View style={{flex:1,height:85}}>
          <Text style={styles.text}>{item.description}</Text>
        </View>
        <View style={{flex:1}}>
        <View style={styles.seeDetail}>
          <TouchableOpacity >
            <Text style={[styles.text,{color:'white'}]}>REDEEM</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    )
  }

  render() {
    return (
      
      <View style={styles.container}> 
        <FlatList 
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(key,index)=>index.toString()}
          numColumns={2}
        />
      </View>
    
    )
  }

}

const styles = StyleSheet.create({
  container:{
    margin: 10,
  },
  reward:{
    backgroundColor:'white',
    padding: 5,
    width:'50%',
    margin:5,
    
  },
  image:{
    width:'80%',
    height:130,
    justifyContent:'center',
    alignSelf: 'center',
  },
  text:{
    padding:5,
    marginTop: 10,
    textAlign:'center',
    fontSize: 16,
    fontWeight:'bold',
  },
  seeDetail:{
    width:'80%',
    backgroundColor:'#ffc400',
    borderRadius:4, 
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    height:40,
    marginHorizontal:5,
    marginTop:20
  },
})