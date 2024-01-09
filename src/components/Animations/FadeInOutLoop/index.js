import React from 'react';
import { useFadeInOutLoop } from '../../../hooks/Animations/useFadeInOutLoop';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';

export const FadeInOutLoop = ({ duration = 500, delay = 0, style, children }) => {
  const fadeAnim = useFadeInOutLoop({ duration: duration, delay: delay });

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: fadeAnim.value,
  }))

  return (
    <Animated.View
      style={[animatedStyle, style]}
    >
      {children}
    </Animated.View>
  );
};