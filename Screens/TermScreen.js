import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'

export default class TermScreen extends Component {
  render() {
    return (
      <View style={{flex:1}}>
        <ImageBackground source={require('./../Image/More/BGmore.jpg')} 
            style={styles.bg} >
            <TouchableHighlight onPress={()=>this.props.navigation.goBack()}>
                <Text style={styles.back}> 
                    &lt;
                </Text>
            </TouchableHighlight>
            <Text style={styles.text}> 
                TERM AND CONDITION
            </Text>
        </ImageBackground>
        <View style={{flex:5,paddingLeft:50,paddingTop:20,paddingRight:10}}>
            <ScrollView>
                <Text> {"     "}Please read these User Terms and Conditions (“Terms and Conditions”) carefully because they contain important information about your rights and obligations, as well as limitations and exclusions that shall apply to all activities and transactions on this Website or Application. </Text>
                <Text style={{paddingTop:10}}>{"     "}By registering for and/or using the services in any manner or by ticking ‘I agree’ to these Terms and Conditions, you acknowledge that you are fully aware of the contents of these Terms and Conditions and agree to be bound by these Terms and Conditions and all other operating rules, policies and procedures that may be updated from time to time on this Website or Application by us, each of which is incorporated by reference and each of which may be updated by us from time to time without notice. In addition, some services offered through the Website or Application may be subject to additional terms and conditions specified by us from time to time; your use of such services is subject to those additional terms and conditions, which are incorporated into these Terms and Conditions by this reference. You further agree that any electronic/internet transactions processed or completed on this Website or Application be fully and legally enforceable and binding upon the parties in accordance with the Thai Electronic Transactions Act B.E. 2544 (2001).</Text>
            </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    bg: {
        flex:2,
        alignContent:'center',
        paddingTop:30,
  },
  text:{
    fontSize:35,
    fontFamily:'Insanibc',
    color:'white',
    textAlign:'center',
    marginTop:20
  },
  back:{
    fontSize:35,
    color:'white',
    marginLeft:10,
  }
  });