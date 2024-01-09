import React, { useEffect, useRef } from 'react'
import { HabitProgressContainer, HabitProgressScroll, ProgressNumber } from './styled'
import { HabitProgressRect } from './HabitProgressRect';
import { Text } from 'react-native';

export const HabitProgress = ({ progress }) => {
  const scroll = useRef()

  const ProgressedRects = Array.from({ length: progress }, (_, index) => (
    <HabitProgressRect key={index} number={index + 1} hasProgress={true} />
  ));

  const scrollToEnd = () => {
    scroll.current.scrollToEnd({ animated: true })
  }

  return (
    <HabitProgressContainer>
      <ProgressNumber>
        {progress}
      </ProgressNumber>
      <HabitProgressScroll onLayout={scrollToEnd} ref={scroll} horizontal>
        {ProgressedRects}
      </HabitProgressScroll>
    </HabitProgressContainer>
  )
}