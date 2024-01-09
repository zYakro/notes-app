import styled from "styled-components";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export const DangerIcon = styled(Ionicons).attrs(({ theme }) => ({
  color: theme.text.color,
  name: 'battery-full',
  size: 35
}))``;