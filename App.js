import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { ImageBackground, View } from 'react-native';
import { DarkCornersGradient } from './src/components/DarkCornersGradient/DarkCornersGradient'
import { useState } from 'react';
import ThemeProvider from './src/styles/ThemeProvider/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BatteryProvider } from './src/context/Battery/BatteryProvider'
import { AlertsProvider } from './src/context/Alerts/AlertsProvider';

export default function App() {
  const [isSystemBooted, setIsSystemBooted] = useState(false)

  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <BatteryProvider>
          <AlertsProvider>
            <GestureHandlerRootView style={{ flex: 1 }}>
              <ImageBackground
                source={require('./src/assets/light-screen.jpg')}
                style={{ flex: 1 }}
                resizeMode='stretch'
              >
                <Navigation />
              </ImageBackground>
            </GestureHandlerRootView>
          </AlertsProvider>
        </BatteryProvider>
      </ThemeProvider >
    </SafeAreaProvider>
  );
}