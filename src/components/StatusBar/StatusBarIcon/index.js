import styled from "styled-components";

export const IconContainer = styled.View`
  max-width: 60px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  gap: 2px;
`

export const IconText = styled.Text`
  color: ${({ color }) => color};
  width: auto;
  font-weight: bold;
  font-size: 12px;
  max-width: auto;
`