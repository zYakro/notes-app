import { useTheme } from "styled-components";
import { IconBorder, IconContainer, ItemContainer, ItemTitle } from "./styled"
import { FontAwesome } from '@expo/vector-icons';
import { useColorTransition } from '../../../hooks/Animations/useColorTransition'
import { useEffect } from "react";

export const DifficultyItem = ({ title, changeDifficulty, currDifficulty, difficulty, icon }) => {
  const theme = useTheme()

  const [colorStyle, startAnimation] = useColorTransition({
    properties: 'backgroundColor',
    duration: 250,
    colors: [theme.onBackgroundColor, 'transparent']
  })

  const isFocused = currDifficulty == difficulty

  const changeDiff = () => {
    changeDifficulty(difficulty)
  }

  const iconProps = {
    size: 24,
    color: isFocused ? theme.onBackgroundColor : theme.backgroundColor,
  }

  useEffect(() => {
    startAnimation(isFocused)
  }, [isFocused])

  return (
    <ItemContainer onPress={changeDiff}>
      <IconBorder>
        <IconContainer style={colorStyle}>
          <FontAwesome name={icon} {...iconProps} />
        </IconContainer>
      </IconBorder>
      <ItemTitle>
        {title}
      </ItemTitle>
    </ItemContainer>
  )
}