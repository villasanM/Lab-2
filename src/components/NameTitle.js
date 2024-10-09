import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NameTitle({ name, lastName, isDarkMode }) {
  return (
    <View style={styles.container}>
      <Text style={[styles.name, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>{name}</Text>
      <Text style={[styles.lastName, { color: isDarkMode ? '#8E8E93' : '#000000' }]}>{lastName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'left', // Center-align the text
    marginBottom: 20,
  },
  name: {
    fontSize: 50, // Adjust font size as needed
    fontWeight: 'normal',
  },
  lastName: {
    fontSize: 30, // Size for the last name
    marginTop: 4, // Space between first and last name
    color: '#8E8E93',
  },
});
