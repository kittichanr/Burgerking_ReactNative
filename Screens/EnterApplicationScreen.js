import React, { Component } from 'react';
import { StyleSheet, Text, View , Image,Dimensions,ImageBackground,TouchableOpacity} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const horizontalMargin = 20;
const sliderWidth = Dimensions.get('window').width;
const itemWidth = 270  ;
const itemHeight = 200;

export default class EnterApplicationScreen extends React.Component {
 constructor(props){
   super(props);
   this.state = {
    timePassed:false,
    activeSlide:0,
    entries:[
    {image:require('../Image/pagination_1.jpeg')},
    {image:require('../Image/pagination_2.jpeg')},
    {image:require('../Image/pagination_3.jpeg')},
    {image:require('../Image/pagination_4.jpeg')},
    {image:require('../Image/pagination_5.jpeg')},
  ]
  };
  this.timer = null
 }
 componentDidMount(){
  this.timer = setTimeout(() => {this.setState({timePassed: true})}, 1000)
 }
 componentWillUnmount(){
  clearTimeout(this.timer);
  this.timer = null
 }

 get pagination(){
  return (
      <Pagination
        dotsLength={this.state.entries.length}
        activeDotIndex={this.state.activeSlide}
        containerStyle={{ backgroundColor: 'transparent',}}
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
    <View style={styles.slide}>
      <Image source={item.image} style={{width:'120%',height:400}}/>
    </View>
  )
}

  
  render() {
    
    return (
      <View style={styles.container}>
      {
        this.state.timePassed 
        ?
        <View>
          <ImageBackground source={require('../Image/openapp_bg.jpeg')} style={{width: '100%', height: '100%'}}>
        <View style={{flex:5}}> 
        <Carousel
              data={this.state.entries}
              renderItem={this._renderItem}
              onSnapToItem={(index) => this.setState({ activeSlide: index }) }
              sliderWidth={sliderWidth}
              itemWidth={itemWidth}
            />
                { this.pagination }
        </View>
        <View style={{flex:1,flexDirection:'row',alignContent:'center'}}>
          
            <View style={styles.seeDetail}>
              <TouchableOpacity onPress={()=>this.props.navigation.replace('Main')}>
                <Text style={[styles.text,{color:'black'}]}>See Details</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.enterApp}>
              <TouchableOpacity onPress={()=>this.props.navigation.replace('Main')}>
                <Text style={[styles.text,{color:'white'}]}>Enter Application</Text>
              </TouchableOpacity>
            </View> 
          
        </View>
          </ImageBackground>
        </View>
        : 
        <Image source={require('../Image/openapp.jpeg')} style={{flex:1,width:'100%',height: null}}/>
          
      }
      </View>
    );
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
    fontSize: 18,
    alignSelf:'center',
  },
  slide: {
    width: itemWidth,
    height: itemHeight,
    paddingHorizontal: horizontalMargin
    // other styles for the item container
},
seeDetail:{
  flex:0.5,
  backgroundColor:'#ffd740',
  borderRadius:4, 
  alignItems: 'center',
  justifyContent: 'center',
  height:50,
  marginHorizontal:5
},
enterApp:{
  flex:0.5,
  backgroundColor:'#ff9100',
  borderRadius:4, 
  alignItems: 'center',
  justifyContent: 'center',
  height:50,
  marginHorizontal:8
}

});
