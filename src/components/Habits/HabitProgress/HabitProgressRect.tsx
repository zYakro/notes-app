import { ColoredRect, ProgressRect } from './styled'

export const HabitProgressRect = ({ hasProgress }: { hasProgress: boolean }) => {
  return (
    <ProgressRect>
      <ColoredRect isDisabled={!hasProgress} />
    </ProgressRect>
  )
}