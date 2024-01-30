import React from 'react'
import { WarningPanel } from '../../../Panels/WarningPanel';
import { LowBatteryIcon } from './styled';

export const LowBatteryIconPanel = ({ isTabOpen = true }: { isTabOpen: boolean }) => {
  return (
    <WarningPanel style={{top: '15%', left: '5%'}} title={"▣ Status"} isTabOpen={isTabOpen}>
      <LowBatteryIcon />
    </WarningPanel>
  )
}