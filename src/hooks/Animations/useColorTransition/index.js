import { interpolateColor, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

export const useColorTransition = ({ properties, inputRange = [0, 1], colors = ['red', 'blue'], duration = 1000, delay = 0 }) => {
  const color = useSharedValue(0)

  const startAnimation = (isForward = true) => {
    color.value = withDelay(
      delay,
      withTiming(
        isForward ? 1 : 0, 
        { duration: duration })
    );
  }

  const colorStyles = useAnimatedStyle(() => {
    const interpolatedColor = interpolateColor(
      color.value,
      inputRange,
      colors,
    );
  
    return {
      [`${properties}`]: interpolatedColor
    }
  });


  return [colorStyles, startAnimation];
};