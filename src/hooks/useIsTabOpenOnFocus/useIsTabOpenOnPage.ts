import { useIsFocused } from '@react-navigation/native'
import { useEffect, useState } from 'react'

type IUseIsTabOpenOnFocusReturn = [boolean, React.Dispatch<React.SetStateAction<boolean>>]

export const useIsTabOpenOnFocus = (initialState: boolean): IUseIsTabOpenOnFocusReturn => {
  const isFocused = useIsFocused()

  const [isTabOpen, setIsTabOpen] = useState(initialState)

  useEffect(() => {
    setIsTabOpen(isFocused)
  }, [isFocused])

  return [isTabOpen, setIsTabOpen]
}
