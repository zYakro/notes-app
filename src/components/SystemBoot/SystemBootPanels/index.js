import { Panels, PanelRow } from './styled'
import { SystemBootPanel } from '../SystemBootPanel'
import { SystemBootTypingText } from '../SystemBootTypingText'
import { SystemBootProgress } from '../SystemBootProgress'
import { systemBootData } from '../../../utils/systemBootInfo/systemBootData'
import { systemBootInfo } from '../../../utils/systemBootInfo/systemBootInfo'
import { SystemBootTextProgressBar } from '../SystemBootTextProgressBar'

import { useState } from 'react'
import { systemBootConfig } from '../../../constant/animationSettings/systemBootConfig'
import { applyDelay } from '../../../utils/delay/applyDelay'

export const SystemBootPanels = ({ onFinish = () => {} }) => {
  const [isTabsOpen, setIsTabsOpen] = useState(true)

  const closeTabs = () => {
    applyDelay(() => {
      onFinish()
      //setIsTabsOpen(false)
    }, 2500);
  }

  return (
    <Panels>
      <PanelRow>
        <SystemBootPanel title="⦿ Process Monitor" isTabOpen={isTabsOpen}>
          <SystemBootTypingText duration={systemBootConfig.typingPanels.data} velocity={8} dataToType={systemBootData} />
        </SystemBootPanel>
      </PanelRow>
      <PanelRow flex={0.2}>
        <SystemBootPanel isTabOpen={isTabsOpen} >
          <SystemBootTextProgressBar onHasFinished={closeTabs} />
        </SystemBootPanel>
      </PanelRow>
      <PanelRow>
        <SystemBootPanel title="⦿ System Status" isTabOpen={isTabsOpen}>
          <SystemBootProgress />
        </SystemBootPanel>
        <SystemBootPanel title="⦿ System Info" isTabOpen={isTabsOpen}>
          <SystemBootTypingText duration={systemBootConfig.typingPanels.info} velocity={5} dataToType={systemBootInfo} />
        </SystemBootPanel>
      </PanelRow>
    </Panels>
  )
}
