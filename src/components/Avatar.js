import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export default function Avatar() {
  return (
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={require('../../assets/profile.jpg')} // Load image from assets
        resizeMode="cover" // Fill the avatar space
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    marginTop: 80,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60, // Circular avatar
  },
});
