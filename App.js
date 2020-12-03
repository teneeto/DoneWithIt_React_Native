import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';

export default function App() {
  return (
    // <View style={styles.container}>

    //   <Card
    //     title='Red Jacket For Sale'
    //     subTitle='$100'
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
    // <MessagesScreen />
    <Screen>
      <ListItem title='Title' subTitle='SubTitle' />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100,
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  }
})