import React from 'react'
import { WarningPanel } from '../../../Panels/WarningPanel';
import { DangerIcon } from './styled';

export const LowBatteryDangerIconPanel = ({ isTabOpen = true }: { isTabOpen?: boolean}) => {
  return (
    <WarningPanel style={{top: '40%', left: '60%'}} title={"▣ Status"} isTabOpen={isTabOpen}>
      <DangerIcon />
    </WarningPanel>
  )
}