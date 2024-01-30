import React, { useRef, useEffect } from 'react';
import { View, Text, PanResponder, Animated, ViewStyle } from 'react-native';
import { AnimatedPanel } from '../AnimatedPanel';
import { BasicPanel } from '../BasicPanel';
import { DraggablePanelContainer } from './styled';
import { DraggableView } from '../../Animations/DraggableView'

interface IDraggablePanel {
  title: string
  delay?: number
  isTabOpen: boolean
  x?: number
  y?: number
  children: React.ReactNode
  style?: ViewStyle
}

export const DraggablePanel = ({ children, title, delay = 0, isTabOpen, style, x = 0, y = 0 }: IDraggablePanel) => {
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