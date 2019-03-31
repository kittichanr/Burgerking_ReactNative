import React, { Component } from 'react'
import { Image, View } from 'react-native'
import Icon from 'react-native-vector-icons/SimpleLineIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'
import EnterApplicationScreen from '../Screens/EnterApplicationScreen'
import HomeScreen from '../Screens/HomeScreen'
import MenuScreen from '../Screens/MenuScreen'
import TrackingScreen from '../Screens/TrackingScreen'
import MoreScreen from '../Screens/MoreScreen'
import MyLevel_RewardScreen from '../Screens/MyLevel_RewardScreen'
import All_RewardScreen from '../Screens/All_RewardScreen'
import Rabbit_RewardScreen from '../Screens/Rabbit_RewardScreen'
import Header from '../Components/Header'
import ProfileScreen from '../Screens/ProfileScreen'
import TermScreen from '../Screens/TermScreen'
import PolicyScreen from '../Screens/PolicyScreen'
import ContactScreen from '../Screens/ContactScreen'
import HelpScreen from '../Screens/HelpScreen'

const Reward = createMaterialTopTabNavigator(
  {
    Mylevel: {
      screen: MyLevel_RewardScreen,
      navigationOptions: {
        title: 'My level'
      }
    },
    All: {
      screen: All_RewardScreen
    },
    Rabbit: {
      screen: Rabbit_RewardScreen
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'white'
      },
      labelStyle: {
        color: '#ff9100',
        fontFamily: 'Insanibc',
        fontSize: 16
      },
      activeTintColor: '#ff9100',
      indicatorStyle: {
        borderBottomColor: '#ff9100'
      }
    }
  }
)

const TabScreen = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    Menu: {
      screen: MenuScreen,
      navigationOptions: {
        title: 'Menu',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='food'
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    },
    Reward: {
      screen: Reward,
      navigationOptions: {
        title: 'Reward',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='star' style={{ fontSize: 24, color: tintColor }} />
        )
      }
    },
    Tracking: {
      screen: TrackingScreen,
      navigationOptions: {
        title: 'Tracking',
        tabBarIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name='timetable'
            style={{ fontSize: 24, color: tintColor }}
          />
        )
      }
    },
    More: {
      screen: MoreScreen,
      navigationOptions: {
        title: 'More',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='menu' style={{ fontSize: 24, color: tintColor }} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        backgroundColor: 'black'
      },
      activeTintColor: '#ff9100',
      inactiveTintColor: 'white',
      labelStyle: {
        fontFamily: 'Insanibc',
        fontSize: 12
      }
    }
  }
)
TabScreen.navigationOptions = ({ navigation }) => {
  const { index, routes } = navigation.state
  const { routeName } = routes[index]
  let TextHeader
  if (routeName === 'Home') {
    TextHeader = 'HOME'
  }
  if (routeName === 'Menu') {
    TextHeader = 'MENU'
  }
  if (routeName === 'Reward') {
    TextHeader = 'REWARD'
  }
  if (routeName === 'Tracking') {
    TextHeader = 'TRACKING'
  }

  const headerhide = routeName === 'More' ? null : undefined
  
  return {
    headerStyle: {
      backgroundColor: '#ff9100'
    },
    headerTitle: (
      <Header
        routeName={routeName}
        TextHeader={TextHeader}
        navigation={navigation}
      />
    ),
    header: headerhide
  }
}

const AppNavigator = createStackNavigator(
  {
    EnterApp: {
      screen: EnterApplicationScreen,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: ProfileScreen,
      navigationOptions: {
        title:'Profile',
        headerStyle:{
          backgroundColor: '#ff9100',
          
        },
        headerTitleStyle:{
          fontFamily: 'Insanibc',
          fontSize: 20,
          color:'white',
          flex:1,
          textAlign:"center",
          alignSelf: 'center' 
        },
        headerTintColor: 'white',
        headerRight: (<View />)
      }
    },
    Term: {
      screen: TermScreen,
      navigationOptions: {
        header: null
      }
    },
    Policy: {
      screen: PolicyScreen,
      navigationOptions: {
        header: null
      }
    },
    Contact: {
      screen: ContactScreen,
      navigationOptions: {
        header: null
      }
    },
    Help: {
      screen: HelpScreen,
      navigationOptions: {
        title: 'REQUEST HELP',
        headerStyle: {
          backgroundColor: '#ff9100'
        },

        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Insanibc',
          textAlign:"center",
          flex:1,
          alignSelf: 'center' 
        },
        headerTintColor: 'white',
        headerRight: (<View />)
      }
    },
    Tracking2: {
      screen: TrackingScreen,
      navigationOptions: {
        title: 'TRACKING ORDER',
        headerStyle: {
          backgroundColor: '#ff9100'
        },

        headerTitleStyle: {
          color: 'white',
          fontFamily: 'Insanibc',
          flex:1,
          textAlign:"center",
          alignSelf: 'center' 
        },
        headerTintColor: 'white',
        headerRight: (<View />)
      }
    },
    Main: TabScreen
  },

  {
    initialRouteName: 'EnterApp'
  }
)

const AppContainer = createAppContainer(AppNavigator)
export default AppContainer
