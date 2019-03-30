import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';


class TypeSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
      const name = this.props.name
      const pic = this.props.pic
    return (
          <View style={styles.container}>
            <Image 
                source={pic}
                style={styles.roundImage}
            />
            <Text style={styles.text}>{name}</Text>
          </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      alignSelf: 'stretch',
      alignItems: 'center',
      textAlign: 'center',
      width:100
    },
    roundImage: {
        height: 65,
        width:65,
        borderRadius: 40,
        borderWidth: 0.5,
        padding:10,
        borderColor: 'lightgray',
    },
    text:{
        fontFamily: 'Insanibc', 
        fontSize: 15,
        textAlign:'center',
        marginTop:10,
      },
});

export default  TypeSelect ;


