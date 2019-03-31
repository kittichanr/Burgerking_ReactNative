import React, { Component } from 'react';
import { View, Image, Text, StyleSheet,TouchableOpacity } from 'react-native';


class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };
  }

  render() {
    const {image,description,price,animal,animalName} = this.props.item
    return (
        <TouchableOpacity style={styles.container}>
          <View style={{flex:1}}>
                <View style={{flex:4}}>
                    <Image 
                        source={image}
                        style={styles.image}
                    />
                </View>
                <View style={{flex:2}}>
                    <Text style={styles.text}>{description}</Text>
                    <Text style={styles.price}>Price {price} Bath</Text>
                </View>
                <View style={{flex:1,flexDirection:"row",marginTop:10}}>
                    <Image 
                        source={animal}
                        style={styles.animalImage}
                    />
                    <Text style={[styles.price,{color:"#59291c"}]}>{animalName}</Text>
                </View>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>
                        ORDER NOW
                    </Text>
                </View>
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      height: 450,
      width: '48%',
      borderRadius: 10,
      borderWidth: 1,
      padding:10,
      borderColor: 'lightgray',
      margin: '1%',
      borderTopColor:  '#ff9100',
      borderTopWidth: 4,
    },
    text:{
        
        fontFamily: 'Insanibc', 
        fontSize: 18,
        marginTop:10,
        
      },
      price:{
        
        fontFamily: 'Insanibc', 
        fontSize: 15,
        marginTop:10,
      },
      image:{
        height: 170,
        width: 170,
      },
      animalImage:{
        height: 30,
        width: 50,
      },
      button:{
        flex:1,
        backgroundColor:'#ff9100',
        borderRadius:5, 
        alignItems: 'center',
        justifyContent: 'center',
        height:50,
        marginHorizontal:5
      },
      buttonText:{
        fontFamily: 'Insanibc',
        fontSize: 18,
        alignSelf:'center', 
        color:"white"
      }
      
});

export default  ItemList ;


