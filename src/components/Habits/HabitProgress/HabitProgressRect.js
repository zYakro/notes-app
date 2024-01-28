import { ColoredRect, ProgressRect } from './styled'

export const HabitProgressRect = ({ hasProgress }) => {
  return (
    <ProgressRect isDisabled={!hasProgress}>
      <ColoredRect isDisabled={!hasProgress} />
    </ProgressRect>
  )
}