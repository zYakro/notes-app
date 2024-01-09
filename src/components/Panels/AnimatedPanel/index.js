import React, { useEffect } from 'react';
import Animated from 'react-native-reanimated';
import { usePanelSizeAnimation } from '../../../hooks/Animations/usePanelSizeAnimation';
import { animatedPanel } from '../../../constant/animationSettings/animatedPanel';

export const AnimatedPanel = ({ isTabOpen = true, delay = 0,children }) => {
  const [width, height] = usePanelSizeAnimation({
    ...animatedPanel.panelSizeAnim,
    isTabOpen: isTabOpen,
    delay: delay
  })

  return (
    <Animated.View
      style={{
        width: width,
        height: height,
      }}
    >
      {children}
    </Animated.View>
  );
}