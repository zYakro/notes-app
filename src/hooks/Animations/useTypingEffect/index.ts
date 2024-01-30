import { useEffect, useState } from 'react'
import { applyDelay } from '@/utils/delay/applyDelay'

interface IUseTypingEffect {
	textToType: string
	duration?: number
	delay?: number
	velocity?: number
}

type IUseTypingEffectReturn = [
	currentText: string,
	hasFinished: boolean
]

export const useTypingEffect = ({ textToType, duration = 10000, delay = 0, velocity = 8 }: IUseTypingEffect): IUseTypingEffectReturn => {
	const [currentText, setCurrentText] = useState('')
	const [hasFinished, setHasFinished] = useState(false)

	const getTimeoutDuration = () => duration / (textToType.length / velocity);

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