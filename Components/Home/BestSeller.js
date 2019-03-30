import React, { Component } from 'react'
import { Text, View ,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native'

export default class BestSeller extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[
        {
          image:require('../../Image/Home/bestseller1.jpeg'),
          description:'Double whoper bacon cheese',
          price:355,
          animal:require('../../Image/Home/pork_beef.jpg'),
        },
        {
          image:require('../../Image/Home/bestseller2.jpeg'),
          description:'Double BBQ bacon cheese',
          price:259,
          animal:require('../../Image/Home/pork_beef.jpg'),
        },
        {
          image:require('../../Image/Home/bestseller3.jpeg'),
          description:'Extra long chicken cheese',
          price:239,
          animal:require('../../Image/Home/chicken.jpg'),
        },{
          image:require('../../Image/Home/bestseller4.jpeg'),
          description:'Double fish and N crisp',
          price:205,
          animal:require('../../Image/Home/fish.jpg'),
        }
      ]
    }
  }

  renderItem=({item})=>{
    return(
        <View style={{backgroundColor:'white',margin:10,width:'45%',borderTopColor:'#ff9100',borderTopWidth:8,shadowRadius:20,shadowColor:'#cfd8dc',borderRadius:7}}>
          <Image source={item.image} style={{width:'100%',height:150,alignSelf:'center'}} />
          <View style={{flex:1,height:30}}>
          <Text style={{fontSize:14,fontWeight:'bold'}}>{item.description}</Text>
          </View>
          <View style={{flex:1,marginTop:5}}>
            <Text style={{fontSize:14,fontWeight:'bold',marginTop:15}}>Price {item.price} THB</Text> 
          </View>
          <View style={{flex:1}}>
            <Image source={item.animal} style={{width:'100%',height:20,marginTop:5}}/>
          </View>
          <View style={{flex:1,marginTop:8}}>
            <View style={styles.orderNow}>
                <TouchableOpacity >
                  <Text style={[styles.text,{color:'white'}]}>Order Now</Text>
                </TouchableOpacity>
              </View> 
          </View>
        </View>
    )
  }

  render() {
    return (
      <View style={{paddingTop:5,marginTop:10}}>
        <View style={{flexDirection:'row'}}>
            <Text style={[styles.text,{marginLeft:5,fontSize:24}]}>BestSeller</Text>
            <Text style={[styles.text,{marginLeft:160,fontSize:12,color:'#ff9100',marginTop:10}]}>All Menu ></Text>
            </View>
            <View style={{width:'100%',marginTop:10}}>
              <FlatList
                data={this.state.data}
                renderItem={this.renderItem}
                keyExtractor={(key,index)=>index.toString()}
                numColumns={2}
              />
            </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    text: {
     fontFamily:'Insanibc' 
  },
  orderNow:{
    flex:0.5,
    backgroundColor:'#ff9100',
    borderRadius:4, 
    alignItems: 'center',
    justifyContent: 'center',
    height:40,
    marginHorizontal:8
  }
  });