import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Font } from 'expo'
import AppContainer from './Navigation/AppNavigator'; 

export default class App extends React.Component {
 constructor(props){
   super(props);
   this.state = {
    fontLoaded: false,
  };
 }
  async componentDidMount() {
    await Font.loadAsync({
      'Insanibc': require('./assets/fonts/Insanibc.ttf'),
    });
    this.setState({ fontLoaded: true });
  }
  render() {
    return (
      
       
    this.state.fontLoaded== true
    ? <AppContainer/>
    :null
    
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


