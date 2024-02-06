import 'react-native-reanimated'
import 'react-native-gesture-handler'
import { DarkCornersGradient } from './src/components/DarkCornersGradient'
import ThemeProvider from './src/styles/ThemeProvider/ThemeProvider';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Navigation } from './src/navigation/Navigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { BatteryProvider } from './src/context/Battery/BatteryProvider'
import { AlertsProvider } from './src/context/Alerts/AlertsProvider';
import { UserInfoProvider } from '@/context/UserInfo/UserInfoProvider';
import { BackgroundImage } from '@/components/BackgroundImage';

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <UserInfoProvider>
          <BatteryProvider>
            <AlertsProvider>
              <GestureHandlerRootView style={{ flex: 1 }}>
                <BackgroundImage>
                  <DarkCornersGradient />
                  <Navigation />
                </BackgroundImage>
              </GestureHandlerRootView>
            </AlertsProvider>
          </BatteryProvider>
        </UserInfoProvider>
      </ThemeProvider >
    </SafeAreaProvider>
  );
}