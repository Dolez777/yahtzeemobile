import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { DataTable } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Gameboard = () => {
  const [scores, setScores] = useState(Array(6).fill(null));
  const [roll, setRoll] = useState(1);
  const [diceValues, setDiceValues] = useState(Array(5).fill(null));
  const [lockedDice, setLockedDice] = useState(Array(5).fill(false));
  const POINTS = [1, 2, 3, 4, 5, 6];
  const [selectedPoints, setSelectedPoints] = useState("");
  const [selectedScoreType, setSelectedScoreType] = useState();
  const SCORE_TYPES = ['Ones', 'Twos', 'Threes', 'Fours', 'Fives', 'Sixes'];


  const resetGame = () => {
    setScores(Array(6).fill(null));
    setRoll(1);
    setDiceValues(Array(5).fill(null));
    setLockedDice(Array(5).fill(false));
    setSelectedPoints("");
    setSelectedScoreType();
  };
  

  const rollDice = () => {
    const newDiceValues = diceValues.map((value, index) => {
      if (lockedDice[index]) {
        return value;
      } else {
        return Math.floor(Math.random() * 6) + 1;
      }
    });
    setDiceValues(newDiceValues);
    setRoll(roll + 1);
  };

  const calculateScore = (scoreIndex) => {
    if (scores[scoreIndex] !== null) {
      return;
    }

    const values = diceValues.filter((value) => value === scoreIndex + 1);
    const score = values.reduce((sum, value) => sum + value, 0);
    const newScores = [...scores];
    newScores[scoreIndex] = score;
    setScores(newScores);
    setRoll(1);
    setDiceValues(Array(5).fill(null));
    setLockedDice(Array(5).fill(false));
  };

  const totalScore = scores.reduce((sum, score) => sum + (score || 0), 0);

  const toggleLockDice = (diceIndex) => {
    if (roll === 1) {
      const newLockedDice = [...lockedDice];
      newLockedDice[diceIndex] = !lockedDice[diceIndex];
      setLockedDice(newLockedDice);
    }
  };


 
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    label: {},
    grid: {
      justifyContent: 'center',
      marginBottom: 32,
    },
    dice: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    },
    lockedDice: {
      opacity: 0.5, // or any other style you want to apply to locked dice
    },
    tabBarIcon: {},
    pointsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginBottom: 32,
    },
    pointsButton: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#000000',
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    selectedPointsButton: {
      backgroundColor: '#000000',
    },
    pointsButtonText: {
      fontSize: 24,
    },
  });
  return (
    <View style={styles.container}>
      <Grid>
        <Row style={styles.row}>
          <Text style={styles.label}>Roll {roll}</Text>
          <Button title="Roll Dice" onPress={rollDice} />
        </Row>
        <Row style={styles.grid}>
          {diceValues.map((value, index) => (
            <Col key={index}>
              <Text
                style={[styles.dice, lockedDice[index] && styles.lockedDice]}
                onPress={() => toggleLockDice(index)}
              >
                {value || '-'}
              </Text>
            </Col>
          ))}
        </Row>
        <Row style={styles.row}>
          <Grid style={styles.pointsGrid}>
            {POINTS.map((points) => (
              <Col key={points}>
                <TouchableOpacity
                  style={[
                    styles.pointsButton,
                    selectedPoints === points && styles.selectedPointsButton,
                  ]}
                  onPress={() => setSelectedPoints(points)}
                >
                  <Text style={styles.pointsButtonText}>{points}</Text>
                </TouchableOpacity>
              </Col>
            ))}
          </Grid>
        </Row>
        <Row style={styles.row}>
          <Grid>
            {SCORE_TYPES.map((scoreType) => (
              <Col key={scoreType}>
                <TouchableOpacity
                  style={[
                    styles.pointsButton,
                    selectedScoreType === scoreType && styles.selectedPointsButton,
                  ]}
                  onPress={() => setSelectedScoreType(scoreType)}
                >
                  <Text style={styles.pointsButtonText}>{scoreType}</Text>
                </TouchableOpacity>
              </Col>
            ))}
          </Grid>
        </Row>
        <Row style={styles.row}>
          <Button title="Calculate Score" onPress={calculateScore} />
          <Button title="Reset Game" onPress={resetGame} />
        </Row>
        <Row style={styles.row}>
          <Text style={styles.label}>Total Score:</Text>
          <Text>{totalScore}</Text>
        </Row>
        <Button title="Calculate Score" onPress={() => calculateScore(selectedScoreType)} />
        <Button title="Reset Game" onPress={resetGame} />
      </Grid>
    </View>
  );
};
  
  
export default Gameboard;