import React from 'react'
import { icons } from '../../../../utils/goals/icons'
import { ImageContainer } from './styled'
import { GoalIcons } from '@/types/types'

export const IconImage = ({ icon }: { icon: GoalIcons }) => {
  const currentIcon = icons[icon]({ size: 50, color: '#4C4940' })

  return (
    <ImageContainer>
      {currentIcon}
    </ImageContainer>
  )
}
