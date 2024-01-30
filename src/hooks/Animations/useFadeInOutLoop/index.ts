import { Easing, useSharedValue, withDelay, withRepeat, withSequence, withTiming } from 'react-native-reanimated';

export const useFadeInOutLoop = ({ duration, delay }: { duration: number, delay: number }) => {
  const fadeAnim = useSharedValue(0)

  fadeAnim.value = withRepeat(
    withDelay(
      delay,
      withSequence(
        withTiming(1, {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        }),
        withTiming(0, {
          duration: duration,
          easing: Easing.inOut(Easing.ease)
        })
      )
    ),
    -1,
  )

  return fadeAnim
};