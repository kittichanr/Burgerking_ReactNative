import React, { Component } from 'react'
import { Text, View , FlatList ,Image,StyleSheet} from 'react-native'

export default class TypeFood extends Component {
    constructor(props){
        super(props);
        this.state={
            type:[
                {
                    image:require('../../Image/Home/typefood1.png'),
                    description:'LIMITED TIME ONLY',
                  },
                  {
                    image:require('../../Image/Home/typefood2.jpeg'),
                    description:'VALURE MEALS',
                  },
                  {
                    image:require('../../Image/Home/typefood3.jpeg'),
                    description:'A LA CARTE',
                  },
                  {
                    image:require('../../Image/Home/typefood4.jpeg'),
                    description:'SIDES',
                  },
                  {
                    image:require('../../Image/Home/typefood5.jpeg'),
                    description:'DESSERTS',
                  },
                  {
                    image:require('../../Image/Home/typefood6.jpeg'),
                    description:'BEVERAGES',
                  },
            ],

        }
    }
    renderItem=({item})=>{
        return(
            <View style={{flexDirection:'column'}}>
            <View style={{backgroundColor:'#f5f5f5',margin:5,width:80,height:80,borderRadius:50}}>
                <Image source={item.image} style={{width:'100%',height:70,alignSelf:'center',borderRadius:60}} />
            </View>
            <View style={{flex:1,marginTop:10,width:80,alignItems:'center',justifyContent:'center',alignSelf:'center'}}>
                <Text style={styles.text}>{item.description}</Text>
            </View>
            </View>
        )
    }
  render() {
    return (
      <View View style={{flexDirection:'row',justifyContent:'flex-start',alignItems: 'center'}}>
        <FlatList
            data={this.state.type}
            renderItem={this.renderItem}
            keyExtractor={(item,index)=>index.toString()}
            horizontal={true}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
    text: {
     fontFamily:'Insanibc' ,
     fontSize:14,
     alignSelf:'center'
  },
})