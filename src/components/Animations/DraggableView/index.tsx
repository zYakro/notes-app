import React, { useRef, useEffect } from 'react';
import { PanResponder, Animated } from 'react-native';

interface IDraggableView {
  x: number
  y: number
  children: React.ReactNode
}

export const DraggableView = ({ children, x = 0, y = 0 }: IDraggableView) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [null, { dx: pan.x, dy: pan.y }],
        { useNativeDriver: false }
      ),
      onPanResponderRelease: () => {
        pan.flattenOffset(); 
        pan.extractOffset();
      },
    })
  ).current;

  useEffect(() => {
    // Sets initial X and Y values
    pan.setOffset({ x: x, y: y }); 
    // Sets the values as 0 so offset doesn't duply 
    pan.setValue({ x: 0, y: 0 }); 
  }, []);

  return (
    <Animated.View
      style={{
        transform: [{ translateX: pan.x }, { translateY: pan.y }],
        position: 'relative',
        justifyContent: 'center',
        alignContent: 'center'
      }}
      {...panResponder.panHandlers}
    >
      {children}
    </Animated.View>
  );
};