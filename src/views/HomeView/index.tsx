import { Text } from 'react-native';
import { Column, Container, HomeDraggablePanel } from './styled';
import { useIsFocused } from '@react-navigation/native'
import { UserInfoPanel } from '@/components/HomePanels/UserInfoPanel';

export const HomeView = () => {
  const isFocused = useIsFocused()

  return (
    <Container>
      <Column>
        <UserInfoPanel />
        <></>
        <></>
      </Column>
      <Column>
        <></>
        <></>
        <></>
      </Column>
    </Container>
  )
}
