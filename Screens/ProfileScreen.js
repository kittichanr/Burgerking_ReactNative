import React, { Component } from 'react'
import { Text, View ,Image,ScrollView,StyleSheet,TouchableOpacity} from 'react-native'
import {  List, ListItem,Icon} from 'native-base';
import Profilelist from '../Components/More/Profilelist'
import Swiper from 'react-native-swiper';

export default class ProfileScreen extends Component {
  render() {
    return (
      <View style={{backgroundColor:'#e0e0e0',padding:5,flex:1}}>
      <ScrollView>
        <List  style={{backgroundColor:'white'}}>
            <ListItem>
              <Image source={require('../Image/More/ProfileScreen.jpeg')} style={{width:'100%',height:130}}/>
            </ListItem>
            <ListItem>
              <Profilelist icontype="MaterialCommunityIcons" iconname="facebook" text="Facebook Connect" text2="Facbook Connected"/>
            </ListItem>
            <ListItem>
              <Profilelist icontype="MaterialCommunityIcons" iconname="email" text="Email" text2="ABC@hotmail.com"/>
            </ListItem>
            <ListItem>
              <Profilelist icontype="AntDesign" iconname="lock" text="Password" text2="********"/>
            </ListItem>
            <ListItem>
              <Profilelist icontype="Entypo" iconname="mobile" text="Mobile No." text2="089-2256984"/>
            </ListItem>
            <ListItem>
              <Profilelist icontype="MaterialCommunityIcons" iconname="map-marker-outline" text="My Address" text2="add,edit,delete,default"/>
            </ListItem>
            <ListItem>
              <Profilelist icontype="MaterialCommunityIcons" iconname="medal" text="Point Expiry"/>
            </ListItem>
        </List>
          <View style={{marginTop:15}}> 
            <List  style={{backgroundColor:'white'}}>
              <ListItem>
                <View style={{flexDirection:'column'}}>
                  <View>
                      <Text style={{color:'grey'}}>My Crown Points</Text>
                  </View>
                  <View style={{flexDirection:'row'}}>
                      <Icon type="MaterialCommunityIcons" name="medal" style={styles.icon}/>
                      <Text style={styles.text}>0</Text>
                  </View>
                </View>
              </ListItem>
              <ListItem>
                <View style={{flexDirection:'column'}}>
                    <View>
                        <Text style={{color:'grey'}}>Burger King Reward's Level</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                        <Icon type="MaterialCommunityIcons" name="medal" style={styles.icon}/>
                        <Text style={styles.text}>Silver 40 Crown Points to unlock</Text>
                    </View>
                </View>
              </ListItem>
            </List>
          </View>
          <View style={{marginTop:15}}> 
            <List  style={{backgroundColor:'white'}}>
              <ListItem style={{alignItems:'center',justifyContent:'center',flexDirection:'column',flex:1}}>
                    <View>
                      <Text style={styles.rewardtext}>REWARDS FOR YOU</Text>
                    </View>
                   
                    <Swiper style={styles.wrapper}>
                    <TouchableOpacity >
                      <View style={styles.slide1}>
                        <View style={styles.image}>
                          <Image source={require('../Image/Home/reward1.jpeg')} style={{width:'80%',height:250,marginTop:5}}/>
                        <View style={styles.enterApp}>
                          <Text style={[styles.text,{color:'white',fontFamily:'Insanibc'}]}>REDEEM</Text>
                        </View> 
                      </View>  
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity >
                      <View style={styles.slide2}>
                      <View style={styles.image}>
                          <Image source={require('../Image/Home/reward2.jpeg')} style={{width:'80%',height:250,marginTop:5}}/>
                          <View style={styles.enterApp}>
                              <Text style={[styles.text,{color:'white',fontFamily:'Insanibc'}]}>REDEEM</Text>
                          </View> 
                      </View> 
                      </View>
                    </TouchableOpacity>
                  </Swiper>
              </ListItem>
              <ListItem>
                  <Text style={styles.text}>View All Rewards ></Text>
              </ListItem>
            </List>
          </View>
        </ScrollView>
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
  },
  rewardtext:{
    color:'grey',
    textAlign:'center',
    fontFamily:'Insanibc',
    fontSize:20,
    alignSelf:'center',
    justifyContent: 'center',
  },
  wrapper: {
    flex:1,
    width:400,
    height:350,
    margin: 10,
  },
  slide1: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  slide2: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  enterApp:{
    backgroundColor:'#ffd600',
    borderRadius:4, 
    alignItems: 'center',
    justifyContent: 'center',
    height:40,
    marginHorizontal:8,
    marginVertical: 5,
    width:'50%'
  },
  image:{
    width:'80%',
    borderWidth:2,
    borderColor:'#e0e0e0',
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
  },
})