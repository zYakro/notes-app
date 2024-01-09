import React from 'react'
import { icons } from '../../../../utils/goals/icons'
import { ImageContainer } from './styled'

export const IconImage = ({ icon }) => {
  const currentIcon = icons[icon]({ size: 50, color: '#4C4940' })

  return (
    <ImageContainer>
      {currentIcon}
    </ImageContainer>
  )
}
