import { useEffect } from 'react';
import { Easing, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

export const useTransitionAnimation = ({ startValue, endValue, duration = 800, delay = 0, easing = Easing.linear, start = true }) => {
  let transition = useSharedValue(startValue)

  useEffect(() => {
    if (start) {
      return transition.value = withDelay(
        delay,
        withTiming(endValue, { duration: duration, easing: easing })
      );
    }
    // Resets the animation
    transition.value = startValue
  }, [start])

  return transition;
}