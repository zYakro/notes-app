import React from 'react';
import { useFadeInOutLoop } from '../../../hooks/Animations/useFadeInOutLoop';
import Animated, { AnimateStyle, useAnimatedStyle } from 'react-native-reanimated';
import { ViewStyle } from 'react-native';

interface IFadeInOutLoop {
  duration: number
  delay: number
  children?: React.ReactNode
  style?: AnimateStyle<ViewStyle>
}

export const FadeInOutLoop = ({ duration = 500, delay = 0, style, children }: IFadeInOutLoop) => {
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