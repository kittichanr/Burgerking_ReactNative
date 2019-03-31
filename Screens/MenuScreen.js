import React, { Component } from 'react'
import { Text, View,ScrollView ,StyleSheet,FlatList,ImageBackground} from 'react-native'

import SearchBar from './../Components/Menu/SearchBar'
import TypeSelect from './../Components/Menu/TypeSelect'
import ItemList from './../Components/Menu/ItemList'

export default class MenuScreen extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          image:require('./../Image/Menu/promo1.jpg'),
          description:'Buy 1 Get 1 Free Extra Long Chicken Cheese™',
          price:179,
          animal:require('./../Image/Menu/chiken.png'),
          animalName:'Chicken'
        },
        {
          image:require('./../Image/Menu/promo2.jpg'),
          description:'AngusXT Steakhouse Set',
          price:289,
          animal:require('./../Image/Menu/beef.png'),
          animalName:'Beef'
        },
        {
          image:require('./../Image/Menu/promo3.jpg'),
          description:'Black Truffle Double Mushroom Swiss Vmeal',
          price:235,
          animal:require('./../Image/Menu/pork.png'),
          animalName:'Pork'
        }
      ]
    }
  }

  renderItem=({item})=>{
    return (<ItemList item={item}/>)
  }

  render() {
    return (

      <View style={{flex:1,flexDirection:"column"}}>
      <ImageBackground source={require('../Image/openapp_bg.jpeg')} style={{width:'100%'}}>
        <ScrollView >
          <View style={{flex:1}}>
              <SearchBar placeholder='Search for your meal'/>
          </View> 
          <View style={{flex:2}}>
            <ScrollView style={{margin: 15,}} horizontal='true' >
              <TypeSelect name="LIMITED TIME ONLY" pic={require("./../Image/Menu/limited.png")} />
              <TypeSelect name="VALUE MEALS" pic={require("./../Image/Menu/meal.png")}/>
              <TypeSelect name="A LA CARTE" pic={require("./../Image/Menu/alacarte.png")}/>
              <TypeSelect name="SIDES" pic={require("./../Image/Menu/side.png")}/>
              <TypeSelect name="DESSERTS" pic={require("./../Image/Menu/dessert.png")}/>
              <TypeSelect name="BEVERAGES" pic={require("./../Image/Menu/bev.png")} />
            </ScrollView>
          </View> 
          <View style={{flex:6,flexWrap: 'wrap',alignItems: 'flex-start',flexDirection:"row",padding:5}}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(key,index)=>index.toString()}
                numColumns={2}
              />
                
          </View>
        
        </ScrollView>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  search: {
      margin: 15,
      paddingLeft:  15,
      paddingRight:  15,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 10,
  },
  text:{
      fontFamily: 'Insanibc', 
      fontSize: 18,
      alignSelf:'center',
    },
});