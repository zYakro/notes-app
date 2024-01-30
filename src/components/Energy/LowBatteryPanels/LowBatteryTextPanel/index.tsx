import React from 'react'
import { WarningPanel } from '../../../Panels/WarningPanel';
import { WarningIcon, WarningText } from './styled';

export const LowBatteryTextPanel = ({ isTabOpen = true }: { isTabOpen: boolean }) => {
  return (
    <WarningPanel style={{top: '65%', left: '15%'}} title={"▣ Status"} isTabOpen={isTabOpen}>
      <WarningIcon />
      <WarningText>
        LOW
      </WarningText>
      <WarningIcon />
    </WarningPanel>
  )
}