import React from 'react';

import { StyleSheet, Switch, Text, View } from 'react-native';
import COLORS from '../constants/colors';
import FONTS from '../constants/fonts';

const FilterSwitch = (props) => {
  const {value, onChange, label} = props;

  return (
    <View style={styles.filterContainer}>
      <Text style={styles.title}>{label}</Text>
      <Switch
        trackColor={{true: COLORS.primaryColor, false: ''}}
        value={value} onValueChange={onChange}
      />
    </View>
  );
};


export default FilterSwitch;
const styles = StyleSheet.create({
  filterContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.openSans,
    margin: 15
  },
});
