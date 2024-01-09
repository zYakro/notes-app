import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components"

export const Container = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  min-width: 100%;
  min-height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  padding: 25px;
`