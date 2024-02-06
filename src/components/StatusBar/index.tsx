import { Battery } from "./Battery"
import { Level } from "./Level"
import { StatusBarMenu } from "./StatusBarMenu"
import { User } from "./User"

export const StatusBar = () => {
  return (
    <StatusBarMenu>
      <Level />
      <Battery />
      <User  />
    </StatusBarMenu>
  )
}
