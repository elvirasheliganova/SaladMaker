import { StatusBar } from 'expo-status-bar';
import { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './components/Navigation';
import SaladItems from './components/SaladItems';
import SaladMaker from './components/SaladMakerHeader';
import SaladSummary from './components/SaladSummary';

import { UserContextProvider } from './components/UserContext';

export default function App()  {
  return (
    <UserContextProvider >
      <View style={styles.container}>
        <Navigation />
        <SaladMaker />
        <SaladItems />
        <SaladSummary />
        <StatusBar style="auto" />
      </View>
    </UserContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    backgroundColor: 'pink',
    alignSelf: 'center',
    alignItems: 'center',
    
  },
});
