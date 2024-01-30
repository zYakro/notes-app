import React, { useRef, useEffect, useState } from 'react';
import { ScrollView, ViewStyle } from 'react-native';

type IScrollToEnd = {
  style?: ViewStyle
  children?: React.ReactNode
}

export const ScrollToEnd = ({style, children}: IScrollToEnd) => {
  const scrollViewRef = useRef(null);
  
  return (
    <ScrollView
      ref={scrollViewRef}
      style={[{ flex: 1 }, style]}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      {children}
    </ScrollView>
  );
};