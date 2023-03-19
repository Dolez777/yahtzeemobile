import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import GameRules from './GameRules';
import Gameboard from './Gameboard';
import Scoreboard from './Scoreboard';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>    
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="GameRules" component={GameRules} />
      <Stack.Screen name="Gameboard" component={Gameboard} />
      <Stack.Screen name="Scoreboard" component={Scoreboard} />
    </Stack.Navigator>
    </NavigationContainer>

  );
};

export default Navigation;
