import React from 'react';
import { SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';

function Screen({ children, style }) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[style, styles.view]}>
        {children}
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    paddingTop: Constants.statusBarHeight,
    flex: 1
  },
  view: {
    flex: 1
  },
})
export default Screen;