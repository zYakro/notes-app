import styled from "styled-components";

export const SystemBootPanelContainer = styled.View`
  flex: ${props => props.flex || 1};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 5px;
  overflow: hidden;
`