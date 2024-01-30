import React from 'react'
import { AddBatteryContent, AddBatteryPanelContainer } from './styled'
import { BasicCircularButton } from '../../Inputs/BasicCircularButton'
import { SimpleLineIcons } from '@expo/vector-icons';
import { DraggablePanel } from '../../Panels/DraggablePanel'

export const AddBatteryPanel = ({ isTabOpen }: { isTabOpen: boolean }) => {

  const addBattery = () => {

  }

  return (
    <AddBatteryPanelContainer>
      <DraggablePanel title={"▣ Add"} isTabOpen={isTabOpen}>
        <AddBatteryContent>
          <BasicCircularButton onPress={addBattery}>
            <SimpleLineIcons name="energy" size={20} color="#d0cbb3" />
          </BasicCircularButton>
        </AddBatteryContent>
      </DraggablePanel>
    </AddBatteryPanelContainer>
  )
}
