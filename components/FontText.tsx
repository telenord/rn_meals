import React from 'react';
import { StyleSheet, Text, } from 'react-native';

import FONTS from '../constants/fonts';

const FontText = (props) => {
  const {children, style} = props;

  return (
    <Text style={{...styles.text, ...style}}>
      {children}
    </Text>
  );
};


export default FontText;

const styles = StyleSheet.create({
  text: {
    fontFamily: FONTS.openSans
  },

});
