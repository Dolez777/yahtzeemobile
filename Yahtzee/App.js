// @ts-nocheck
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './screens/Home';
import Gameboard from './screens/Gameboard';
import GameRules from './screens/GameRules';
import Footer from './components/footer/Footer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} options={{ title: 'Welcome', }} />
        <Tab.Screen name="GameRules" component={GameRules} options={{ title: 'Game Rules' }} />
        <Tab.Screen name="Gameboard" component={Gameboard} options={{ title: 'Game Board' }} />
      </Tab.Navigator>
    <Footer/>

    </NavigationContainer>
  );
}
