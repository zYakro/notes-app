import React, { useEffect } from 'react';
import Animated from 'react-native-reanimated';
import { usePanelSizeAnimation } from '../../../hooks/Animations/usePanelSizeAnimation';
import { animatedPanel } from '../../../constant/animationSettings/animatedPanel';

type IAnimatedPanel = {
  isTabOpen?: boolean
  delay?: number
  children?: React.ReactNode
}

export const AnimatedPanel = ({ isTabOpen = true, delay = 0,children }: IAnimatedPanel) => {
  const animatedStyle = usePanelSizeAnimation({
    ...animatedPanel.panelSizeAnim,
    isTabOpen: isTabOpen,
    delay: delay
  })

  return (
    <Animated.View style={animatedStyle} >
      {children}
    </Animated.View>
  );
}