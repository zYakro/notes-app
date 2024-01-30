import { Easing } from 'react-native-reanimated';
import { useTransitionAnimation } from '../useTransitionAnimation';

type IUseExpandAnimation = {
  duration?: number
  delay?: number
  start?: boolean
}

export const useExpandAnimation = ({ duration = 800, delay = 0, start = true }: IUseExpandAnimation) => {
  return useTransitionAnimation({
    startValue: '0%',
    endValue: '100%',
    duration: duration,
    delay: delay,
    easing: Easing.linear,
    start: start,
  });
}

export const useDeExpandAnimation = ({ duration = 800, delay = 0, start = true }: IUseExpandAnimation) => {
  return useTransitionAnimation({
    startValue: '100%',
    endValue: '0%',
    duration: duration,
    delay: delay,
    easing: Easing.linear,
    start: start
  });
}

