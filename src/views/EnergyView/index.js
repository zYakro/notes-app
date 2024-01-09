import React, { useContext } from 'react'
import { Container } from './styled'
import { BatteryPanel } from '../../components/Energy/BatteryPanel'
import { EnergyTextPanel } from '../../components/Energy/EnergyTextPanel'
import { LowBatteryPanels } from '../../components/Energy/LowBatteryPanels'

export const EnergyView = () => {
  return (
    <Container>
      <EnergyTextPanel />
      <BatteryPanel />
      <LowBatteryPanels />
    </Container>
  )
}