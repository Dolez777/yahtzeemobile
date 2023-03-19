/* import React, { useState } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { DataTable } from 'react-native-paper';

const Gameboard = () => {
  const [scores, setScores] = useState(Array(6).fill(null));
  const [roll, setRoll] = useState(1);
  const [diceValues, setDiceValues] = useState(Array(5).fill(null));
  const [lockedDice, setLockedDice] = useState(Array(5).fill(false));

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

  const resetGame = () => {
    setScores(Array(6).fill(null));
    setRoll(1);
    setDiceValues(Array(5).fill(null));
    setLockedDice(Array(5).fill(false));
  };

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
                style={[
                  styles.dice,
                  lockedDice[index] && styles.lockedDice,
                ]}
                onPress={() => toggleLockDice(index)}
              >
                {value || '-'}
              </Text>
            </Col>
          ))}
        </Row>
        <Row style={styles.row}>
          {scores.map((score, index) => (
            <Col key={index}>
              <DataTable.Row onPress={() => calculateScore(index)}>
                <DataTable.Cell style={styles.label}>
                  {score === null ? index + 1 : score}
                </DataTable.Cell>
              </DataTable.Row>
            </Col>
          ))}
        </Row>
        <Row style={styles.row}>
          <Text style={styles.label}>Total Score:</Text>
          <Text>{totalScore}</Text>
        </Row>
        <Row style={styles.row}>
          <Button title="Reset Game" onPress={resetGame} />
        </Row>
      </Grid>
    </View>
  );
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
    label: {
    },
    grid: {
      justifyContent: 'center',
      marginBottom: 32,
    },
    dice: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
    backgroundColor: '#f0f0f0',},
    lockedDice: {
      opacity: 0.5, // or any other style you want to apply to locked dice
    },
    tabBarIcon: {},
  });
  
  export default Gameboard; */