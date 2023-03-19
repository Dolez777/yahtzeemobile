/* import React, { useState } from 'react';
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
      backgroundColor: '#212121', // Set the background color to dark grey
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 16,
    },
    label: {
      color: '#FFFFFF', // Set the label text color to white
      fontSize: 20, // Increase the font size of the labels
      fontWeight: 'bold', // Make the label text bold
    },
    grid: {
      width: '100%', // Set the width of the grid container to 100%
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 32,
      padding: 20, // Add padding to the grid container
      backgroundColor: '#424242', // Set the background color of the grid container to a darker grey
      borderRadius: 10, // Add rounded corners to the grid container
    },
    dice: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 16,
      backgroundColor: '#FFFFFF', // Set the background color of the dice boxes to white
      width: 60, // Adjust the width of the dice boxes
      height: 60, // Adjust the height of the dice boxes
      borderRadius: 10, // Add rounded corners to the dice boxes
      borderWidth: 2, // Add a border to the dice boxes
      borderColor: '#000000', // Set the border color of the dice boxes to black
      textAlign: 'center', // Center the text inside the dice boxes
      fontSize: 28, // Increase the font size of the dice boxes
      fontWeight: 'bold', // Make the text inside the dice boxes bold
      marginRight: 10, // Add some spacing between the dice boxes
    },
    lockedDice: {
      opacity: 0.5, // Set the opacity of the locked dice boxes to 50%
    },
    tabBarIcon: {},
    pointsGrid: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 32,
    },
    pointsButton: {
      borderWidth: 1,
      borderRadius: 5,
      borderColor: '#FFFFFF', // Set the border color of the points buttons to white
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#424242', // Set the background color of the points buttons to a darker grey
    },
    selectedPointsButton: {
      backgroundColor: '#000000',
    },
    pointsButtonText: {
      fontSize: 24,
      color: '#FFFFFF', // Set the text color of the points buttons to white
      fontWeight: 'bold', // Make the text inside the points buttons bold
    },
  });
  return (
    <View style={styles.container}>
      <Grid>
        <Row style={{...styles.row, marginTop: 32}}>
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
        <Row style={{...styles.row, marginTop: 32 }}>
          <Grid style={styles.pointsGrid}>
            {POINTS.map((points) => (
              <Col key={points}>
                <TouchableOpacity
                  style={[
                    styles.pointsButton,
                    selectedPoints === points && styles.selectedPointsButton,
                  ]}
                  // @ts-ignore
                  onPress={() => setSelectedPoints(points)}
                >
                  <Text style={styles.pointsButtonText}>{points}</Text>
                </TouchableOpacity>
              </Col>
            ))}
          </Grid>
        </Row>
        <Row style={{...styles.row, marginTop: 32 }}>
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
        
        <Row style={{...styles.row, marginTop: 32 }}>
          <Text style={styles.label}>Total Score:</Text>
          <Text>{totalScore}</Text>
        </Row>
        <Button title="Calculate Score" onPress={() => calculateScore(selectedScoreType)} />
        <Button title="Reset Game" onPress={resetGame} />
      </Grid>
    </View>
  );
};
  
  
export default Gameboard; */