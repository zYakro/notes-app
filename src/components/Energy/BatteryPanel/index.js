import { View, Text } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { BatteryPanelContainer, BatteryPanelContent } from './styled'
import { AnimatedPanel } from '../../Panels/AnimatedPanel'
import { BasicPanel } from '../../Panels/BasicPanel'
import { Battery } from '../Battery'
import { animatedPanel } from '../../../constant/animationSettings/animatedPanel'
import { BasicCircularButton } from '../../Inputs/BasicCircularButton'
import { SimpleLineIcons } from '@expo/vector-icons';
import { BatteryContext } from '../../../context/Battery/BatteryContext'
import { AnimatedPanelOnFocus } from '../../Panels/AnimatedPanelOnFocus'

export const BatteryPanel = ({ isTabOpen }) => {
  const [hasBeenOpen, setHasBeenOpen] = useState(false)
  const [buttonOpacity, setButtonOpacity] = useState(0.5)

  const panelDelay = animatedPanel.open + 5500

  const { increaseBattery, canAddBattery } = useContext(BatteryContext)

  useEffect(() => {
    setHasBeenOpen(true)
  }, [isTabOpen])

  useEffect(() => {
    const setBatteryOpacity = async () => {
      if (await canAddBattery()) {
        setButtonOpacity(1)
      }
    }

    setBatteryOpacity()
  }, [])

  const addBatteryOnPress = async () => {
    increaseBattery()
    setButtonOpacity(0.5)
  }

  return (
    <BatteryPanelContainer>
      <AnimatedPanelOnFocus delay={(hasBeenOpen) ? 0 : panelDelay}>
        <BasicPanel title={"▣ Battery"}>
          <BatteryPanelContent>
            <Battery />
            <View style={{ opacity: buttonOpacity }}>
              <BasicCircularButton onPress={addBatteryOnPress}>
                <SimpleLineIcons name="energy" size={20} color="#d0cbb3" />
              </BasicCircularButton>
            </View>
          </BatteryPanelContent>
        </BasicPanel>
      </AnimatedPanelOnFocus>
    </BatteryPanelContainer>
  )
}
