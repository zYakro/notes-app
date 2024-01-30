import { useContext, useEffect } from "react"
import { ThemeContext } from "styled-components"
import { useColorTransition } from "../../../../hooks/Animations/useColorTransition"

export const AnimationStyles = (isFocus: boolean) => {
  const theme = useContext(ThemeContext)

  const focusColors = [theme.inputColors.unfocusColor, theme.inputColors.focusColor]
  const duration = 100

  const [borderStyle, startBorderAnimation] = useColorTransition({
    properties: 'borderColor',
    colors: focusColors,
    duration: duration
  })

  const [colorStyle, startColorAnimation] = useColorTransition({
    properties: 'color',
    colors: focusColors,
    duration: duration
  })

  useEffect(() => {
    startBorderAnimation(isFocus)
    startColorAnimation(isFocus)
  }, [isFocus])

  return [borderStyle, colorStyle]
}