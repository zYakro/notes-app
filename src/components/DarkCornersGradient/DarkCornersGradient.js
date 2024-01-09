import { LinearGradient } from "expo-linear-gradient";
import { useContext } from "react";
import styled from "styled-components";
import { BatteryContext } from "../../context/Battery/BatteryContext";

const DarkCornersGradientStyled = styled(LinearGradient).attrs({
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.2, 0.5, 1],
})`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

export const DarkCornersGradient = () => {
  const { battery } = useContext(BatteryContext)

  const colorsOnBattery = {
    0: ['rgba(0, 0, 0, 0)', 'transparent', 'rgba(0, 0, 0, 0)'],
    1: ['rgba(0, 0, 0, 0.15)', 'transparent', 'rgba(0, 0, 0, 0.2)'],
    2: ['rgba(0, 0, 0, 0.1)', 'transparent', 'rgba(0, 0, 0, 0.15)'],
    3: ['rgba(0, 0, 0, 0.05)', 'transparent', 'rgba(0, 0, 0, 0.1)'],
    4: ['rgba(0, 0, 0, 0)', 'transparent', 'rgba(0, 0, 0, 0)'],
  }

  return(
    <DarkCornersGradientStyled colors={colorsOnBattery[battery]}/>
  )
}