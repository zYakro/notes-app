import { Easing } from 'react-native-reanimated';
import { useTransitionAnimation } from '../useTransitionAnimation';

export const useOpacityAnimation = ({ duration = 800, delay = 0, start = true }) => {
  return useTransitionAnimation({
    startValue: 1,
    endValue: 0,
    duration: duration,
    delay: delay,
    easing: Easing.linear,
    start: start,
  })
}

export const useDeOpacityAnimation = ({ duration = 800, delay = 0, start = true }) => {
  return useTransitionAnimation({
    startValue: 0,
    endValue: 1,
    duration: duration,
    delay: delay,
    easing: Easing.linear,
    start: start,
  })
}