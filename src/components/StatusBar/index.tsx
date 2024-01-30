import { Battery } from "./Battery"
import { Level } from "./Level"
import { StatusBarMenu } from "./StatusBarMenu"

export const StatusBar = () => {
  return (
    <StatusBarMenu>
      <Level />
      <Battery />
    </StatusBarMenu>
  )
}
