import React, { Component } from 'react';
import { View, Text ,ImageBackground,ScrollView,Image,StyleSheet,TouchableOpacity} from 'react-native';
import PagingPromotion from '../Components/Home/PagingPromotion'
import TypeFood from '../Components/Home/TypeFood'
import BestSeller from '../Components/Home/BestSeller'
import JustforyouReward from '../Components/Home/JustforyouReward'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
    <ImageBackground source={require('../Image/openapp_bg.jpeg')} style={{width:'100%',height:'100%'}}>
      <ScrollView>
            <View style={{flexDirection:'column',marginLeft:100,paddingTop:20}}>
                <View style={{flexDirection:'row'}}>
                    <View style={{flex:1.5,marginLeft:10,flexDirection:'row'}}>
                        <Image source={require('../Image/Home/silverMedal.png')} style={{width:20,height:20}}/>
                        <Text style={{fontWeight:'bold',color:'#ff9100'}}>   Silver</Text>
                    </View>
                    <View style={{flex:1.5,marginLeft:60,flexDirection:'row'}}>
                        <Text>Gold   </Text>
                        <Image source={require('../Image/Home/goalMedal.jpg')} style={{width:20,height:20}}/>
                    </View>
                </View>
                <View style={{backgroundColor:'#e0e0e0',width:'80%',height:5,marginLeft:10,marginTop:3}}/>
                <Text style={{color:'#ff9100',marginLeft:55,fontSize:10,fontWeight:'bold'}}>40 CROWN POINTS TO GOLD LEVEL ></Text>
        </View>
         <View style={{backgroundColor:'rgba(240, 240, 240, 0.5)',height:100,width:'100%',flexDirection:'row',justifyContent:'center',} }>
         <View style={{padding:10}}>
            <View style={{backgroundColor:'white',borderRadius:40,borderColor:'#ff9100',borderWidth:3,width:'100%',height:70}}>
                <Icon name="user"  size={52} style={{alignSelf:'center',color:'rgba(0, 0, 0, 0.5)',width:'100%',height:50}}/>
            </View>
          </View>
          <View style={{flex:3,marginTop:10}}>
              <View style={{flexDirection:'column'}}>
                  <View style={{flexDirection:'row'}}>
                      <View style={{flex:1.5,marginLeft:10,flexDirection:'row'}}>
                          <Image source={require('../Image/Home/goalMedal.jpg')} style={{width:20,height:20}}/>
                          <Text style={{fontWeight:'bold',fontSize:8}}>  0 Crows Points</Text>
                      </View>
                      
                  </View>
                  <View style={{flex:1,flexDirection:'row',alignContent:'center'}}>
                    <View style={styles.getReward}>
                        <TouchableOpacity >
                        <Text style={[styles.text,{color:'white'}]}>Get Rewards</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.earnPoint}>
                        <TouchableOpacity >
                        <Text style={[styles.text,{color:'white'}]}>Earn Ponts</Text>
                        </TouchableOpacity>
                    </View> 
                </View>
              </View>
          </View>
      </View>
      <PagingPromotion/>
      <TypeFood/>
      <BestSeller/>
      <JustforyouReward/>
      </ScrollView>
        </ImageBackground>  
      
      
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
    fontSize: 14,
    alignSelf:'center',
  },
  getReward:{
      flex:0.5,
      backgroundColor:'#ff9100',
      borderRadius:4, 
      alignItems: 'center',
      justifyContent: 'center',
      height:50,
      marginHorizontal:5,
      
    },
    earnPoint:{
      flex:0.5,
      backgroundColor:'#00c853',
      borderRadius:4, 
      alignItems: 'center',
      justifyContent: 'center',
      height:50,
      marginHorizontal:8,
      
    }
})