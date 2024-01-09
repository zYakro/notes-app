import { Easing} from 'react-native-reanimated';
import { useTransitionAnimation } from '../useTransitionAnimation';

export const useExpandAnimation = ({ duration = 800, delay = 0, start = true }) => {
  return useTransitionAnimation({
    startValue: '0%',
    endValue: '100%',
    duration: duration,
    delay: delay,
    easing: Easing.Linear,
    start: start,
  });
}

export const useDeExpandAnimation = ({ duration = 800, delay = 0, start = true }) => {
  return useTransitionAnimation({
    startValue: '100%',
    endValue: '0%',
    duration: duration,
    delay: delay,
    easing: Easing.Linear,
    start: start
  });
}

