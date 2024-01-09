import { ColoredRect, ProgressNumber, ProgressRect } from './styled'

export const HabitProgressRect = ({ number, hasProgress }) => {
  return (
    <ProgressRect isDisabled={!hasProgress}>
      <ColoredRect isDisabled={!hasProgress}>
      </ColoredRect>
    </ProgressRect>
  )
}