import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function InfoText({ iconName, text, isDarkMode, showArrow }) {
  return (
    <View style={styles.infoContainer}>
      <Icon name={iconName} size={20} color={isDarkMode ? '#FFFFFF' : '#000000'} />
      <Text style={[styles.text, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
        {text}
      </Text>
      {showArrow && (
        <Icon
          name="chevron-forward"
          size={20}
          color={isDarkMode ? '#FFFFFF' : '#000000'}
          style={styles.arrowIcon}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures the arrow is at the end
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
  arrowIcon: {
    marginLeft: 'auto', // Moves the arrow to the right end
  },
});
