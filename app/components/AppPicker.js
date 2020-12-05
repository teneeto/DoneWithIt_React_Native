import React from 'react';
import { View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';

import defaultStyles from '../config/styles';
import AppText from './AppText';

function AppPicker({ icon, placeholder, ...other }) {
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons
        name={icon}
        size={25}
        color={defaultStyles.colors.medium}
        style={styles.icon} />}

      <AppText style={styles.text} >{placeholder}</AppText>

      <MaterialCommunityIcons
        name='chevron-down'
        size={25}
        color={defaultStyles.colors.medium}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
})
export default AppPicker;