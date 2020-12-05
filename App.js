import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppButton from './app/components/AppButton';
import AppPicker from './app/components/AppPicker';
import AppTextinput from './app/components/AppTextinput';
import Card from './app/components/Card';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import Screen from './app/components/Screen';
import AccountScreen from './app/screens/AccountScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import WelcomeScreen from './app/screens/WelcomeScreen';
const categories = [
  { label: 'Furniture', value: '1' },
  { label: 'Clothing', value: '2' },
  { label: 'Cameras', value: '3' },
]

export default function App() {
  const [category, setCategory] = useState(categories[0].label);
  return (
    // <View style={styles.container}>

    //   <Card
    //     title='Red Jacket For Sale'
    //     subTitle='$100'
    //     image={require('./app/assets/jacket.jpg')}
    //   />
    // </View>
    // <MessagesScreen />
    // <ListingsScreen />
    <Screen>
      <AppPicker
        selectedItem={category}
        onSelectItem={(item) => setCategory(item)}
        items={categories}
        icon='apps'
        placeholder='Category' />
      <AppTextinput icon='email' placeholder='Email' />
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