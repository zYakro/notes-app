import { useState } from 'react';
import { useExpandAnimation, useDeExpandAnimation } from '../useExpandAnimation';

export const usePanelSizeAnimation = ({ duration, openDelays, closeDelays, isTabOpen, delay = 0 }) => {
  const expandedSize = {
    width: useExpandAnimation({
      duration: duration,
      delay: openDelays.width + delay,
      start: isTabOpen
    }),
    height: useExpandAnimation({
      duration: duration,
      delay: openDelays.height + delay,
      start: isTabOpen
    }),
  };

  const collapsedSize = {
    width: useDeExpandAnimation({
      duration: duration,
      delay: closeDelays.width,
      start: !isTabOpen
    }),
    height: useDeExpandAnimation({
      duration: duration,
      delay: closeDelays.height,
      start: !isTabOpen
    }),
  };

  const getWidth = () => (isTabOpen) ? expandedSize.width : collapsedSize.width;
  const getHeight = () => (isTabOpen) ? expandedSize.height : collapsedSize.height;

  return [getWidth(), getHeight()]
}
