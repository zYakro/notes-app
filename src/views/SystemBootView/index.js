import { useState } from "react"
import { Container } from "./styled"
import { SystemBoot } from "../../components/SystemBoot"
import { useOpacityAnimation } from "../../hooks/Animations/useOpacityAnimation"
import { systemBootConfig } from "../../constant/animationSettings/systemBootConfig"
import { applyDelay } from "../../utils/delay/applyDelay"

export const SystemBootView = ({ setIsBooted }) => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)
  const opacity = useOpacityAnimation({
    ...systemBootConfig.opacity,
    start: isAnimationFinished
  })

  const onAnimationFinished = () => {
    setIsAnimationFinished(true)
    applyDelay(() => {setIsBooted(true)}, 1000)
  }

  return (
    <Container
      style={{
        opacity: opacity
      }}
    >
      <SystemBoot onFinish={onAnimationFinished} />
    </Container>
  )
}
