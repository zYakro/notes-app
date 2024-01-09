import styled from "styled-components";

export const ProgressRect = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4px;
  margin-right: 2px;
  height: 100%;
  background-color: transparent;
`

export const ColoredRect = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${({ theme, isDisabled }) =>
    (isDisabled)
      ? theme.disabledColor
      : theme.habits.progressRect
  };
`
export const ProgressNumber = styled.Text`
  color: ${({ theme }) => theme.habits.progressText};
  font-size: 12px;
`