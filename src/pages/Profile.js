import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Avatar from '../components/Avatar';
import NameTitle from '../components/NameTitle';
import InfoText from '../components/InfoText';


export default function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#1C1C1E' : '#F8F8F8' }]}>
      <View style={styles.topSection}>
        <Avatar style={styles.avatar} />
        <View style={styles.joinedContainer}>
          <Text style={[styles.joinedText, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
            Joined
          </Text>
          <Text style={[styles.joinedDateText, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>
            1 year ago
          </Text>
        </View>
      </View>

  
      <NameTitle name="Mariane" lastName="Villasan" isDarkMode={isDarkMode} />

     
      <Text style={[styles.sectionTitle, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Profile</Text>
      <InfoText
        iconName="person-outline"
        text="Manage user"
        isDarkMode={isDarkMode}
        showArrow={true}
      />


      <Text style={[styles.sectionTitle, { color: isDarkMode ? '#FFFFFF' : '#000000' }]}>Settings</Text>
      <InfoText
        iconName="notifications-outline"
        text="Notifications"
        isDarkMode={isDarkMode}
        showArrow={true} 
      />
      <View style={styles.infoContainer}>
        <InfoText
          iconName="moon-outline"
          text="Dark Mode"
          isDarkMode={isDarkMode}
        />
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
      </View>

   
      <View style={styles.signOutContainer}>
        <View style={styles.signOutBackground}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </View>
      </View>

      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-start',
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  joinedContainer: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: 10,
    padding: 5,
    marginTop: 80,
  },
  joinedText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: 'gray',
  },
  joinedDateText: {
    fontSize: 16,
    marginTop: 4,
    fontWeight: 'normal',
    color: '#FFFFFF', 
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  signOutContainer: {
    alignItems: 'flex-start',
    marginTop: 30,
  },
  signOutBackground: {
    backgroundColor: '#C4C4C4',
    padding: 10,
    borderRadius: 5,
  },
  signOutText: {
    fontSize: 16,
    color: '#000000',
    textAlign: 'center',
  },
});
