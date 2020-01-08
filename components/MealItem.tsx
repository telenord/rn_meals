import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';

import FONTS from '../constants/fonts';
import COLORS from '../constants/colors';
import TouchableOpacity from './TouchableOpacity';
import FontText from './FontText';


const MealItem = (props) => {
  const {title, duration, affordability, complexity, imageUrl, onPress} = props;

  return (
    <View style={styles.gridItem}>
      <TouchableOpacity
        style={{flex: 1}}
        onPress={onPress}>
        <View>
          <View
            style={{...styles.mealRow, ...styles.mealHeader}}
          >
            <ImageBackground style={styles.bgImage} source={{uri: imageUrl}}>
              <View
                style={styles.titleContainer}
              >
                <Text style={styles.title} numberOfLines={1}>{title}</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...styles.mealRow, ...styles.mealDetails}}>
            <FontText>{duration}m</FontText>
            <FontText style={styles.textUpperCase}>{complexity}</FontText>
            <FontText style={styles.textUpperCase}>{affordability}</FontText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};


export default MealItem;

const styles = StyleSheet.create({
  gridItem: {
    height: 200,
    borderRadius: 10,
    backgroundColor: '#f5f5f5',
    width: '100%',
    overflow: 'hidden',
    marginVertical: 10,
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%',
  },
  mealDetails: {
    height: '15%',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  textUpperCase: {
    textTransform: 'uppercase'
  },
  titleContainer: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  title: {
    fontFamily: FONTS.openSansBold,
    fontSize: 20,
    color: COLORS.white,
    textAlign: 'center'
  }
});
