import React from 'react'
import { IconContainer } from '../StatusBarIcon';
import { Battery as BatteryIcon } from '../../Energy/Battery';

export const Battery = () => {
  return (
    <IconContainer>
      <BatteryIcon size={16} />
    </IconContainer>
  )
}