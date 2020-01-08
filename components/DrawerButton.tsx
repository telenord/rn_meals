import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { withNavigation } from 'react-navigation';

import CustomHeaderButton from './HeaderButton';

const DrawerButton = (props) => {
  const {navigation} = props;

  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item title='Menu' iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
    </HeaderButtons>
  );
};


export default withNavigation(DrawerButton);

