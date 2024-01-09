import React, { useContext } from 'react'
import { BatteryContext } from '../../../context/Battery/BatteryContext'
import { FontAwesome } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

export const Battery = ({ size = 50 }) => {
  const { battery } = useContext(BatteryContext)
  const theme = useTheme();

  const iconProps = {
    size: size,
    color: theme.text.color
  }

  const batteryIcons = {
    0: <FontAwesome name="battery-0" {...iconProps} />,
    1: <FontAwesome name="battery-1" {...iconProps} />,
    2: <FontAwesome name="battery-half" {...iconProps} />,
    3: <FontAwesome name="battery-3" {...iconProps} />,
    4: <FontAwesome name="battery-full" {...iconProps} />
  }

  return batteryIcons[battery]
}