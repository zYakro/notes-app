import React from 'react'
import { useExpandAnimation } from '../../../hooks/Animations/useExpandAnimation'
import styled from 'styled-components'
import Animated, { AnimateProps } from 'react-native-reanimated'
import { View, ViewStyle } from 'react-native'

const InLineProgressBarContainer = styled(View)`
  width: 200px;
  min-width: 200px;
  height: 2px;
  border-radius: 5px;
  background-color: inherit;
  margin: 5px 0px;
`

const progressBarStyles: ViewStyle = {
  height: '100%',
  backgroundColor: '#fafafa',
  borderRadius: 5,
}

export const InLineProgressBar = ({ duration = 1000, delay = 0 }: { duration?: number, delay?: number}) => {
  const width = useExpandAnimation({ duration, delay })

  return (
    <InLineProgressBarContainer>
      <Animated.View
        style={[{
          width: width,
        }, progressBarStyles]}
      />
    </InLineProgressBarContainer>
  )
}
