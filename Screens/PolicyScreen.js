import React, { Component } from 'react'
import { Text, View ,ImageBackground,StyleSheet,TouchableHighlight,ScrollView} from 'react-native'

export default class PolicyScreen extends Component {
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
                PRIVACY POLICY
            </Text>
        </ImageBackground>
        <View style={{flex:5,paddingLeft:50,paddingTop:20,paddingRight:10}}>
            <ScrollView>
                <Text> {"     "}Welcome to BURGER (THAILAND) LIMITED (“we”, “us”, “our”, “BURGER (THAILAND) LIMITED”, the “Company”, the “Provider”). At BURGER (THAILAND) LIMITED, we are committed to protecting the privacy of all visitors to our mobile apps, website or bots (together, “Products"). Please read the following Privacy Policy which explains how we use and protect your information. By visiting and/or ordering services on the Product, you agree to the terms of this Privacy Policy and where required you consent to the collection, use and transfer of your information as set out in this Privacy Policy.</Text>
                <Text> {"     "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac blandit dui. Sed ac feugiat sem. Mauris a odio et neque varius condimentum. Phasellus malesuada, dolor in auctor eleifend, libero arcu cursus ligula, vitae placerat sapien dolor nec mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse egestas convallis arcu in ultricies. Donec at erat ac lacus aliquet hendrerit et ac magna. Pellentesque eget nisi mi. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam eu libero quis ex dignissim mattis a at risus. Suspendisse potenti.

Morbi egestas maximus tellus, sed commodo tellus condimentum dapibus. Curabitur non sagittis ante. Nullam ornare lorem ac eleifend maximus. Integer non ante arcu. Fusce euismod ipsum nec risus tempus, vitae egestas nulla interdum. Nunc sed euismod est. Integer et finibus leo. Aenean iaculis felis id neque facilisis, at gravida turpis auctor. Integer et sem eget mauris congue sollicitudin sed vel orci. Morbi dictum sem eu orci feugiat, sed fringilla metus accumsan. Mauris luctus ornare nunc, nec sollicitudin libero. Donec nec lacinia metus. Integer a orci erat. Nam ornare orci est, vitae aliquet ligula scelerisque ut. Nam dignissim nibh vel sagittis vestibulum.

Proin varius ultrices sollicitudin. Nullam iaculis placerat ornare. Aliquam neque mauris, aliquam a consequat a, lobortis eu libero. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin in velit dui. Fusce mollis, nisl a pharetra semper, ex ex ultricies tortor, sit amet vulputate dolor enim ac risus. Proin id sagittis dolor. Suspendisse nibh erat, venenatis vel consectetur sed, accumsan ac est. Fusce ac urna a tellus venenatis dapibus. Praesent pretium lacinia mauris, eget eleifend eros cursus sit amet. Suspendisse sollicitudin lobortis felis nec imperdiet. Etiam et enim elementum, dignissim mi in, mollis massa. Phasellus vitae risus a risus sollicitudin varius ut vulputate nisi.

Nulla nec fermentum est. Curabitur eget sagittis ante. Nulla eu ultricies risus. Morbi sollicitudin malesuada dolor, eget bibendum odio lobortis viverra. Suspendisse eget cursus diam. Proin ut feugiat dolor, eget elementum nisl. Vivamus eget nisi dignissim, venenatis massa quis, congue libero. Quisque tempor nulla non convallis pulvinar. Suspendisse suscipit ac ante at fringilla. Nam in mauris et sapien pretium consequat non convallis urna.

Quisque leo sapien, luctus non libero ac, sodales porttitor mauris. Mauris at ligula sapien. In ac sollicitudin felis. Ut rhoncus neque ut sagittis dignissim. Curabitur malesuada odio id ullamcorper efficitur. Aenean venenatis nisi sed justo rutrum finibus. In vestibulum eleifend ex, in lobortis nibh auctor nec.
                </Text>
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