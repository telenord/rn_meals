import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from "@expo/vector-icons";
import isAndroid from '../constants/Platform';
import COLORS from "../constants/colors";

const CustomHeaderButton = props => {
  return <HeaderButton
    {...props}
    IconComponent={Ionicons}
    iconSize={23}
    color={isAndroid ? 'white' : COLORS.primaryColor}
  />
};

export default CustomHeaderButton;
