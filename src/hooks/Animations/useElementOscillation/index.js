import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

export const useElementOscillation = ({ elements, duration, delay }) => {
  let timeout;
  const [currElement, setCurrElement] = useState(elements[0])

  const applyDelay = (delay, func) => {
    setTimeout(func, delay)
  }

  const updateElement = (index = 0) => {
    timeout = setTimeout(() => {
      if (index == elements.length - 1) {
        setCurrElement(elements[0])
        return updateElement(0)
      }

      setCurrElement(elements[index])
      return updateElement(index + 1)
    }, duration / elements.length)
  }

  useEffect(() => {
    applyDelay(delay, () => {
      updateElement()
    })

    return () => {
      clearTimeout(timeout)
    }
  }, [])

  return currElement;
}