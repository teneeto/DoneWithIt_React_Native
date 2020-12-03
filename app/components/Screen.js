import React from 'react';
import { SafeAreaView, StyleSheet, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children }) {
  return (
    <SafeAreaView style={styles.screen}>
      {children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
})
export default Screen;