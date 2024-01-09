import { ImageBackground } from 'react-native'
import { SystemBootPanels } from './SystemBootPanels'
import { Container } from './styled'
import { SystemBootTitle } from './SystemBootTitle'

export const SystemBoot = ({ onFinish }) => {
  const backgroundImage = require('../../assets/black-background.png')

  return (
    <ImageBackground source={backgroundImage} style={{ flex: 1 }} resizeMode="cover">
      <Container
        source={backgroundImage}
        resizeMode='stretch'
      >
        <SystemBootTitle />
        <SystemBootPanels onFinish={() => {}} />
      </Container>
    </ImageBackground>
  )
}
