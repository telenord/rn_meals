import React from 'react';
import { Platform, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import isAndroid from "./../constants/Platform";

const TouchableCmp = props => {
  if (isAndroid && Platform.Version >= 21) {
    return (<TouchableNativeFeedback {...props}/>);
  }
  return (
    <TouchableOpacity {...props} />
  )
};

export default TouchableCmp;
