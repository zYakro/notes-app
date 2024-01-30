import { useContext } from "react";
import { BatteryContext } from "../../context/Battery/BatteryContext";
import { DarkCornersGradientStyled } from "./styled";

export const DarkCornersGradient = () => {
  const { battery } = useContext(BatteryContext)

  const colorsOnBattery = {
    0: ['rgba(0, 0, 0, 0)', 'transparent', 'rgba(0, 0, 0, 0)'],
    1: ['rgba(0, 0, 0, 0.15)', 'transparent', 'rgba(0, 0, 0, 0.2)'],
    2: ['rgba(0, 0, 0, 0.1)', 'transparent', 'rgba(0, 0, 0, 0.15)'],
    3: ['rgba(0, 0, 0, 0.05)', 'transparent', 'rgba(0, 0, 0, 0.1)'],
    4: ['rgba(0, 0, 0, 0)', 'transparent', 'rgba(0, 0, 0, 0)'],
  }

  const props = {
    start: { x: 0, y: 0 },
    end: { x: 1, y: 1 },
    locations: [0.2, 0.5, 1],
    colors: colorsOnBattery[battery],
  }

  return (
    <DarkCornersGradientStyled {...props} />
  )
}