import React, { useEffect } from 'react'
import { Ionicons, MaterialCommunityIcons,SimpleLineIcons, AntDesign } from '@expo/vector-icons';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

export const TabIcons = ({ routeName, isFocused }) => {
  const theme = useContext(ThemeContext)

  const props = {
    size: (!isFocused) ? 24 : 26,
    color: (!isFocused) ? theme.tabBar.iconColor : theme.tabBar.focusIconColor 
  }

  const Icons = {
    'Home': <Ionicons name='home' {...props}/>,
    'Energy': <SimpleLineIcons name="energy" {...props} />,
    'Shop': <AntDesign name="shoppingcart" {...props} />,
    'Journal': <AntDesign name="book" {...props} />,
    'Habits': <MaterialCommunityIcons name="star-four-points-outline" {...props} />
  }

  return Icons[routeName]
}
