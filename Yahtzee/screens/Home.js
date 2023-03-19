import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Home = ({ navigation }) => {
  const [name, setName] = useState('');

  const handleLayout = () => {
    inputRef.current.focus();
  };

  const handleSubmit = () => {
    inputRef.current.blur();
    navigation.navigate("GameRules", { name });
  };

  const inputRef = React.createRef();

  return (
    <View onLayout={handleLayout}>
      <Text>Please enter your name:</Text>
      <TextInput
        ref={inputRef}
        value={name}
        onChangeText={setName}
        onSubmitEditing={handleSubmit}
      />
      <Button title="OK" onPress={handleSubmit} />
    </View>
  );
};

export default Home;
