import React, { Component } from 'react'
import {Modal,Image, Text, View ,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'
import SearchBar from './../Components/Menu/SearchBar'

export default class HelpScreen extends Component {
    state = {
        modalVisible: false,
      };
    
      setModalVisible(visible) {
        this.setState({modalVisible: visible});
      }

  render() {
    return (
        
      <View style={[styles.container, this.state.modalVisible ?  {backgroundColor: 'rgba(0,0,0,0.5)'}:'']}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          
          <View style={styles.modal}>
            <View style={{flex:1}} >
                <View style={{flex:1,flexDirection:'row'}} >
                    <Image style={styles.image} source={require('./../Image/More/picture.png')} />
                    <SearchBar />
                </View>
                <View style={{position: "absolute", bottom: 70, right: 20}}>
                    <TouchableHighlight onPress={() => {this.setModalVisible(!this.state.modalVisible);}}>
                        <View style={styles.circle}>
                                <Text style={{fontSize:40,textAlign:"center",color:"white",fontFamily:'Insanibc',}}> ✖ </Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
          </View>
        </Modal>
            <View style={styles.line}>
                    <View style={{flex:1,alignItems: 'center',}}>
                        <Text style={{color:"#ff9100",fontSize:20,}}> 
                            Your Help ID : 842656
                        </Text>
                    </View>
            </View>
            <View style={{flex:1}}/>
            <View style={{flex:1,justifyContent:"center"}}>
                    <View style={{flex:1,alignItems: 'center',}}>
                        <Text style={{color:"gray",fontSize:15,textAlign:"center"}}> 
                            Your can ask our staff {"\n"}
                            for any problems you might experience{"\n"}
                            while using an app.
                        </Text>
                        <Text style={{fontSize:15,textAlign:"center",marginTop:20}}> 
                            Please tab on + button below
                        </Text>
                    </View>
            </View>
            <View style={{flex:1}}/>
            
            <View style={{position: "absolute", bottom: 20, right: 20}}>
                <TouchableHighlight onPress={() => {this.setModalVisible(true)}}>
                    <View style={styles.circle}>
                            <Text style={{fontSize:50,textAlign:"center",color:"white",fontFamily:'Insanibc',}}> + </Text>
                    </View>
                </TouchableHighlight>
            </View>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    modal: {
        flex:1,
        height:100,
        width:"95%",
        paddingTop:30,
        position: "absolute", 
        bottom: 20, 
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent:"center",
        margin:10
  },
  text:{
    fontSize:35,
    fontFamily:'Insanibc',
    color:'white',
    marginTop:20,
    textAlign:'center'
  },
  back:{
    fontSize:35,
    color:'white',
    marginLeft:10,
  },
  line:{
    borderBottomColor:  '#ff9100',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingTop: 20,
    paddingBottom: 10,
    width:"50%"
  },
  circle:{
      backgroundColor: '#ff9100',
    width:75,
    height:75,
    borderRadius: 40,
    justifyContent:"center",

  },
  container:{
    flex:1,
    alignItems: 'center',
    justifyContent:"space-between", 
    flexDirection: 'column',
},
image:{
    width:40,
    height:40,
    marginLeft: 15,
},
  });