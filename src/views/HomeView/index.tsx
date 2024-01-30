import { Text } from 'react-native';
import { Column, Container, HomeDraggablePanel } from './styled';
import { useIsFocused } from '@react-navigation/native'

export const HomeView = () => {
  const isFocused = useIsFocused()

  return (
    <Container>
      <Column>
        <HomeDraggablePanel isTabOpen={isFocused} title="▣ Asd"><Text>asdasd</Text></HomeDraggablePanel>
        <HomeDraggablePanel isTabOpen={isFocused} title="▣ Asd"><Text>asdasd</Text></HomeDraggablePanel>
        <HomeDraggablePanel isTabOpen={isFocused} title="▣ Asd"><Text>asdasd</Text></HomeDraggablePanel>
      </Column>
      <Column>
        <HomeDraggablePanel isTabOpen={isFocused} title="▣ Asd"><Text>asdasd</Text></HomeDraggablePanel>
        <HomeDraggablePanel isTabOpen={isFocused} title="▣ Asd"><Text>asdasd</Text></HomeDraggablePanel>
        <HomeDraggablePanel isTabOpen={isFocused} title="▣ Asd"><Text>asdasd</Text></HomeDraggablePanel>
      </Column>
    </Container>
  )
}
