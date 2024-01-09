import React, { useRef, useEffect } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';
import { AnimatedPanel } from '../AnimatedPanel';
import { BasicPanel } from '../BasicPanel';
import { DraggablePanelContainer } from './styled';
import { DraggableView } from '../../Animations/DraggableView'

export const DraggablePanel = ({ children, title, delay = 0, isTabOpen, style, x = 0, y = 0 }) => {
  return (
    <DraggableView x={x} y={y}>
      <DraggablePanelContainer style={style}>
        <AnimatedPanel isTabOpen={isTabOpen} delay={delay}>
          <BasicPanel title={title}>
            {children}
          </BasicPanel>
        </AnimatedPanel>
      </DraggablePanelContainer>
    </DraggableView>
  );
};