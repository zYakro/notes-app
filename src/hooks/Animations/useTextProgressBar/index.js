import { useEffect, useState } from 'react'

export const useTextProgressBar = ({ duration = 1000, delay = 1000, amount = 10, progressChar = '#', fillerChar = '-' }) => {
  const [progressText, setProgressText] = useState('')
  const [percentage, setPercentage] = useState('')
  const [hasFinished, setHasFinished] = useState(false)
  let interval;

  const getPercentage = (progressIndex, text) => {
    const percentage = ((progressIndex / text.length) * 100).toFixed(2)
    return `${percentage}%`
  }

  const getTextBar = () => Array(amount).fill(fillerChar);

  const updateText = () => { 
    let progressBar = getTextBar()
    let progressIndex = -1 // This way, the empty progress bar will be displayed first

    interval = setInterval(() => {

      if(progressIndex >= progressBar.length - 1){
        clearInterval(interval)
        setHasFinished(true)
      }

      progressBar[progressIndex] = progressChar

      progressIndex++;

      setProgressText(progressBar.join(''))
      setPercentage(getPercentage(progressIndex, progressBar))
    }, duration / amount)
  }

  const applyDelay = (func) => {
    setTimeout(() => {
      func()
    }, delay)
  }

  useEffect(() => {
    applyDelay(updateText)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return [progressText, percentage, hasFinished]
}
