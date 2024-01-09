import { useEffect, useState } from 'react'



export const useTypingEffect = (textToType, duration = 10000, delay = 0, velocity = 8) => {
	const [currentText, setCurrentText] = useState('')
	const [hasFinished, setHasFinished] = useState(false)

	const getTimeoutDuration = () => duration / (textToType.length / velocity);

	const applyDelay = (func, delay) => {
		setTimeout(() => {
			return func()
		}, delay)
	}

	const updateCurrentTextData = () => {
		let currentTextIndex = 1

		const interval = setInterval(() => {
			const textAtCurrentIndex = textToType.slice(0, currentTextIndex)

			currentTextIndex += velocity

			setCurrentText(textAtCurrentIndex)

			const hasFinished = currentTextIndex > textToType.length
			if (hasFinished) {
				setHasFinished(true)
				return clearInterval(interval);
			}

		}, getTimeoutDuration())
	
		return interval;
	}

	useEffect(() => {
		const interval = applyDelay(updateCurrentTextData, delay)

		return () => {
			clearInterval(interval)
		}
	}, [])

	return [currentText, hasFinished]
}