import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native'
import defaultStyles from '../config/styles';

function AppText({ children, style, ...other }) {
  return (
    <Text style={[defaultStyles.text, style]} {...other}>{children}</Text>
  );
}

// const styles = StyleSheet.create({
//   text: {
//     // fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
//     ...Platform.select({
//       ios: {
//         fontSize: 20,
//         fontFamily: "Avenir"
//       },
//       android: {
//         fontSize: 18,
//         fontFamily: "Roboto"
//       }
//     })
//   }
// })
export default AppText;