import React, { useRef, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

export const ScrollToEnd = ({style, className, children}) => {
  const scrollViewRef = useRef();
  
  return (
    <ScrollView
      ref={scrollViewRef}
      style={[{ flex: 1 }, style]}
      className={className}
      onContentSizeChange={() => scrollViewRef.current.scrollToEnd({ animated: true })}
    >
      {children}
    </ScrollView>
  );
};