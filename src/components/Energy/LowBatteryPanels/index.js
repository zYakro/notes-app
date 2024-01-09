import React, { useContext } from 'react'
import { BatteryContext } from '../../../context/Battery/BatteryContext'
import { LowBatteryIconPanel } from './LowBatteryIconPanel'
import { LowBatteryDangerIconPanel } from './LowBatteryDangerIconPanel'
import { LowBatteryTextPanel } from './LowBatteryTextPanel'
import { useIsFocused } from '@react-navigation/native'

export const LowBatteryPanels = () => {
  const isFocused = useIsFocused()
  const { battery } = useContext(BatteryContext)

  return (
    <>
      {
        battery <= 3 && battery != 0 &&
        <LowBatteryIconPanel isTabOpen={isFocused} />
      }
      {
        battery <= 2 && battery != 0 &&
        <LowBatteryDangerIconPanel isTabOpen={isFocused} />
      }
      {
        battery <= 1 && battery != 0 &&
        <LowBatteryTextPanel isTabOpen={isFocused} />
      }
    </>
  )
}