import React, { useRef } from 'react'
import { HabitProgressContainer, HabitProgressScroll, ProgressNumber } from './styled'
import { HabitProgressRect } from './HabitProgressRect';

export const HabitProgress = ({ progress }: { progress: number }) => {
  const scroll = useRef(null)

  const ProgressedRects = Array.from({ length: progress }, (_, index) => (
    <HabitProgressRect key={index} hasProgress={true} />
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