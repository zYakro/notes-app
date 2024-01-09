import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { SystemBootView } from './src/views/SystemBootView';
import { ImageBackground, View } from 'react-native';
import { AuthView } from './src/views/AuthView';
import { DarkCornersGradient } from './src/components/DarkCornersGradient/DarkCornersGradient'
import { useState } from 'react';
import ThemeProvider from './src/styles/ThemeProvider/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BatteryProvider} from './src/context/Battery/BatteryProvider'

export default function App() {
  const [isSystemBooted, setIsSystemBooted] = useState(false)

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <BatteryProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <ImageBackground
              source={require('./src/assets/light-screen.jpg')}
              style={{ flex: 1 }}
              resizeMode='stretch'
            >
              <DarkCornersGradient />
              <Navigation />
            </ImageBackground>
          </GestureHandlerRootView>
        </BatteryProvider>
      </ThemeProvider >
    </SafeAreaProvider>
  );
}