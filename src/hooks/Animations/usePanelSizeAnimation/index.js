import { useEffect } from 'react';
import { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

export const usePanelSizeAnimation = ({ duration, openDelays, closeDelays, isTabOpen, delay = 0 }) => {
  const width = useSharedValue('0%')
  const height = useSharedValue('0%')

  useEffect(() => {
    if (isTabOpen) {
      width.value = withDelay(
        openDelays.width + delay,
        withTiming('100%', {
          duration: duration,
          easing: Easing.linear
        })
      )

      height.value = withDelay(
        openDelays.height + delay,
        withTiming('100%', {
          duration: duration,
          easing: Easing.linear
        })
      )
      return;
    }

    width.value = withDelay(
      closeDelays.width + delay,
      withTiming('0%', {
        duration: duration,
        easing: Easing.linear
      })
    )

    height.value = withDelay(
      closeDelays.height + delay,
      withTiming('0%', {
        duration: duration,
        easing: Easing.linear
      })
    )

  }, [isTabOpen])

  const animatedStyle = useAnimatedStyle(() => {
    return {
      width: width.value,
      height: height.value
    }
  })

  return animatedStyle
}
