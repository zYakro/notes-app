import { TouchableOpacity, View } from 'react-native'
import styled from 'styled-components'

export const PopupPanelContainer = styled(View)`
  max-width: 500px;
  max-height: 300px;
  width: 100%;
  height: 100%;
  padding: 0 25px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const OverlayBackground = styled(View)`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`

export const CloseIconContainer = styled(TouchableOpacity)`
  padding: 0px 5px;
`