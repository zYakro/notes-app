import { SoloPanel } from '../../Panels/SoloPanel'
import { EntryPanelContainer, ViewContainer } from './styled'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'

export const EntryPanel = ({ title, children }) => {
  return (
    <ViewContainer>
      <EntryPanelContainer>
        <AnimatedPanelOnFocus>
          <SoloPanel title={title}>
            {children}
          </SoloPanel>
        </AnimatedPanelOnFocus>
      </EntryPanelContainer>
    </ViewContainer>
  )
}