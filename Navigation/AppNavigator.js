import React, { Component } from 'react';
import { Image,View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createStackNavigator, createAppContainer,createBottomTabNavigator} from 'react-navigation' ; 
import EnterApplicationScreen from '../Screens/EnterApplicationScreen'
import HomeScreen from '../Screens/HomeScreen'
import MenuScreen from '../Screens/MenuScreen'
import RewardScreen from '../Screens/RewardScreen'
import TrackingScreen from '../Screens/TrackingScreen'
import MoreScreen from '../Screens/MoreScreen'
import Header from '../Components/Header'

const TabScreen = createBottomTabNavigator(
    {Home: {
        screen:HomeScreen,
        navigationOptions:{
                title:'Home',
                tabBarIcon: ({ tintColor }) => (
                    <Icon name="home" style={{fontSize: 24,color:tintColor}}/>
                  ),
        }
    },
    Menu:{
        screen:MenuScreen,
        navigationOptions:{
            title:'Menu',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="food" style={{fontSize: 24,color:tintColor}}/>
              )
    }
    },
    Reward:{
        screen:RewardScreen,
        navigationOptions:{
            title:'Reward',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="star" style={{fontSize: 24,color:tintColor}}/>
              )
    }
    },
    Tracking:{
        screen:TrackingScreen,
        navigationOptions:{
            title:'Tracking',
            tabBarIcon: ({ tintColor }) => (
                <MaterialCommunityIcons name="timetable" style={{fontSize: 24,color:tintColor}}/>
              )
    }
    },
    More:{
        screen:MoreScreen,
        navigationOptions:{
            title:'More',
            tabBarIcon: ({ tintColor }) => (
                <Icon name="menu" style={{fontSize: 24,color:tintColor}}/>
              )
    }
    }
},    
    { tabBarOptions : {
        style: {
          backgroundColor: 'black',
        },
        activeTintColor: '#ff9100',
        inactiveTintColor: 'white',
        labelStyle:{
            fontFamily:'Insanibc',
            fontSize:12
        },
      }
    },     
    ); 

    

     TabScreen.navigationOptions=({navigation})=>{
        const {index, routes} = navigation.state;
        const {routeName} = routes[index];
        let TextHeader;
                if (routeName ==='Home') {
                    TextHeader = 'HOME';
                } if (routeName === 'Menu') {
                    TextHeader = 'MENU';
                } if (routeName === 'Reward') {
                    TextHeader = 'REWARD';
                } if (routeName === 'Tracking') {
                    TextHeader = 'TRACKING';
                } if (routeName === 'More') {
                    TextHeader = 'MORE';
                } 
         return{
            headerStyle:{
                backgroundColor:'#ff9100'
            },
            headerTitle:(
                <Header routeName={routeName} TextHeader={TextHeader} />
            )
         }
        
    }

const AppNavigator = createStackNavigator(
    {
    EnterApp: {
        screen: EnterApplicationScreen,
        navigationOptions:{
            header:null
        }
    },
    Main:TabScreen
     },
    {
        initialRouteName: "EnterApp"
    },
    
   ) ;

   
const AppContainer = createAppContainer(AppNavigator) ;
export default AppContainer ;