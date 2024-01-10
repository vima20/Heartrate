import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button, Card, Title } from 'react-native-paper';

const HeartRateCalculator = () => {
  const [age, setAge] = useState('');
  const [lowerLimit, setLowerLimit] = useState('');
  const [upperLimit, setUpperLimit] = useState('');

  const calculateHeartRateLimits = () => {
    const parsedAge = parseInt(age, 10);

    if (parsedAge <= 0 || parsedAge >= 101) {
      alert('Please enter a valid whole number age between 1 and 100.');
      return;
    }

    const lower = Math.round((220 - parsedAge) * 0.65);
    const upper = Math.round((220 - parsedAge) * 0.85);

    setLowerLimit(lower.toString());
    setUpperLimit(upper.toString());
  };




  return (
    <View style={styles.container}>
      <Card>
        <Card.Content>
          <Title>Heart Rate Calculator</Title>
          <TextInput
            style={styles.input}
            placeholder="Enter age between 1 - 100"
            keyboardType="numeric"
            value={age}
            onChangeText={(text) => setAge(text)}
          />
          <Button mode="contained" onPress={calculateHeartRateLimits}>
            Calculate
          </Button>
          <Text style={styles.result}>
            Heart Rate Limits: {lowerLimit} - {upperLimit}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    marginBottom: 16,
    padding: 8,
    borderColor: 'blue',
    borderWidth: 1,
  },
  result: {
    marginTop: 16,
    fontSize: 18,
    textAlign: 'center',
  },
});

export default HeartRateCalculator;
