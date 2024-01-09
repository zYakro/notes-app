import { useEffect, useState } from "react";
import { applyDelay } from '../../../utils/delay/applyDelay'

export const useDotsEffect = ({ duration = 1000, delay = 0 }) => {
  const [dotsText, setDotsText] = useState('')

  const updateDots = () => {
    let currentDotsText = ''

    const interval = setInterval(() => {
      
      currentDotsText += '.'

      if(currentDotsText.length > 3){
        currentDotsText = ''
      }

      setDotsText(currentDotsText)

    }, duration / 3)

    return interval
  }

  useEffect(() => {
    const interval = applyDelay(updateDots, delay)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return dotsText
}