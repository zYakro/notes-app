import styled from "styled-components";
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const LowBatteryIcon = styled(MaterialCommunityIcons).attrs(({ theme }) => ({
  color: theme.text.color,
  name: 'battery-charging-30',
  size: 30
}))``;