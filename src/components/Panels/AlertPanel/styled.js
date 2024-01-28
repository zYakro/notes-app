import styled from "styled-components";

export const Content = styled.View`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`

export const PanelText = styled.Text`
  color: ${({ theme }) => theme.text.color};
`

export const SubmitButtons = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 50%;
  gap: 10px;
`