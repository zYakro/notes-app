import { Battery } from "./Battery"
import { StatusBarMenu } from "./StatusBarMenu"
import { User } from "./User"

export const StatusBar = () => {
  return (
    <StatusBarMenu>
      <Battery />
      <User  />
    </StatusBarMenu>
  )
}
