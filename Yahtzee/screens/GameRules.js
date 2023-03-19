import React from 'react';
import { View, Text, Button } from 'react-native';

const GameRules = ({ route, navigation }) => {
  const { name } = route.params;

  const NBR_OF_DICES = 5;
  const NBR_OF_THROWS = 3;
  const MIN_SPOT = 1;
  const MAX_SPOT = 6;
  const BONUS_POINTS_LIMIT = 63;
  const BONUS_POINTS = 35;

  const handlePlay = () => {
    navigation.navigate('Gameboard', { name });
  };

  return (
    <View>
      <Text>Hello {name}!</Text>
      <Text>Here are the game rules:</Text>
      <Text>
        THE GAME: Upper section of the classic Yahtzee
        dice game. You have {NBR_OF_DICES} dices and
        for the every dice you have {NBR_OF_THROWS}
        throws. After each throw you can keep dices in
        order to get same dice spot counts as many as
        possible. In the end of the turn you must select
        your points from {MIN_SPOT} to {MAX_SPOT}.
        Game ends when all points have been selected.
        The order for selecting those is free.
      </Text>
      <Text>
        POINTS: After each turn game calculates the sum
        for the dices you selected. Only the dices having
        the same spot count are calculated. Inside the
        game you can not select same points from
        {MIN_SPOT} to {MAX_SPOT} again.
      </Text>
      <Text>
        GOAL: To get points as much as possible.
        {BONUS_POINTS_LIMIT} points is the limit of
        getting bonus which gives you {BONUS_POINTS}
        points more.
      </Text>
      <Button title="Play" onPress={handlePlay} />
    </View>
  );
};

export default GameRules;
