import React from 'react';
import { View, StyleSheet, Text, Platform } from 'react-native';

import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import TouchableOpacity from './TouchableOpacity';
import isAndroid from '../constants/Platform';


const CategoryGridTile = (props) => {
  const {title, onPress, color} = props;

  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={onPress}>
        <View
          style={{...styles.container, backgroundColor: color}}
        >
          <Text style={styles.title} numberOfLines={2}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderRadius: 10,
    overflow: isAndroid && Platform.Version >= 21 ? 'hidden' : 'visible',
    elevation: 5,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: .25,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    elevation: 3,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: FONTS.openSansBold,
    fontSize: 22,
    color: COLORS.white,
    textAlign: 'right'
  }
});
