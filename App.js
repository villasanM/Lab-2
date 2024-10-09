import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Profile from './src/pages/Profile'; // Adjusted path

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <Profile />
    </SafeAreaView>
  );
}
