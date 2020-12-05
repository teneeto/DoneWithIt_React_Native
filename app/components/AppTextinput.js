import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import defaultStyles from '../config/styles';

function AppTextinput({ icon, width = '100%', ...other }) {
  return (
    <View style={[styles.container, { width }]}>
      {icon && <MaterialCommunityIcons
        name={icon}
        size={25}
        color={defaultStyles.colors.medium}
        style={styles.icon}
      />}

      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        {...other}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
})
export default AppTextinput;