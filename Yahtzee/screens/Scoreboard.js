import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { DataTable } from 'react-native-paper';

const Scoreboard = () => {
  const data = [
    { category: 'Ones', score: 4 },
    { category: 'Twos', score: 8 },
    { category: 'Threes', score: 9 },
    { category: 'Fours', score: null },
    { category: 'Fives', score: 15 },
    { category: 'Sixes', score: 18 },
    { category: 'Total', score: 54 },
    { category: 'Bonus', score: 0 },
    { category: 'Upper Section Total', score: 54 },
    { category: 'Three of a Kind', score: 15 },
    { category: 'Four of a Kind', score: null },
    { category: 'Full House', score: null },
    { category: 'Small Straight', score: 30 },
    { category: 'Large Straight', score: null },
    { category: 'Yahtzee', score: 50 },
    { category: 'Chance', score: 14 },
    { category: 'Lower Section Total', score: 109 },
    { category: 'Total Score', score: 163 },
  ];

  const renderDataRow = (rowData, index) => (
    <DataTable.Row key={index}>
      <DataTable.Cell>{rowData.category}</DataTable.Cell>
      <DataTable.Cell numeric>{rowData.score}</DataTable.Cell>
    </DataTable.Row>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scoreboard</Text>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Category</DataTable.Title>
          <DataTable.Title numeric>Score</DataTable.Title>
        </DataTable.Header>
        {data.map(renderDataRow)}
      </DataTable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default Scoreboard;
