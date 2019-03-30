import React, { Component } from 'react'
import { Text, View ,StyleSheet,Dimensions,Image } from 'react-native'
import Carousel, { Pagination } from 'react-native-snap-carousel';


const horizontalMargin = 20;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = sliderWidth  ;
const itemHeight = 200;

export default class PagingPromotion extends Component {
    constructor(props){
        super(props);
        this.state = {
         activeSlide:0,
         entries:[
         {image:require('../../Image/pagination_1.jpeg')},
         {image:require('../../Image/pagination_2.jpeg')},
         {image:require('../../Image/pagination_3.jpeg')},
         {image:require('../../Image/pagination_4.jpeg')},
         {image:require('../../Image/pagination_5.jpeg')},
       ]
       };
      }

      get pagination(){
        return (
            <Pagination
              dotsLength={this.state.entries.length}
              activeDotIndex={this.state.activeSlide}
              containerStyle={{ backgroundColor: 'transparent',padding:5}}
              dotStyle={{
                  width: 10,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 0,
                  backgroundColor: '#ff6d00'
              }}
              
              inactiveDotOpacity={0.4}
              inactiveDotScale={0.6}
              
            />
        );
      }
      
      _renderItem= ({item}) =>{
        return (
          <View >
            <Image source={item.image} style={{width:'100%',height:120,borderRadius:10}}/>
          </View>
        )
      }


  render() {
    return (
      <View style={{flexDirection:'row',justifyContent:'center',alignItems: 'center',paddingTop:10}}>
        <View style={{flex:1}}> 
        <Carousel
              data={this.state.entries}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
                { this.pagination }
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    slide: {
      width: itemWidth,
      height: itemHeight,
      
    
  },
  });