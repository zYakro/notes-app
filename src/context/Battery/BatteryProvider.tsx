import React, { useEffect, useState } from 'react'
import { canAddBattery, getCurrentBattery, saveBatteryInStorage, saveTimestampInStorage } from '../../services/battery.service'
import { BatteryContext } from './BatteryContext'

export const BatteryProvider = ({ children }: { children: React.ReactNode}) => {
  const [battery, setBattery] = useState(4)

  const increaseBattery = async () => {
    if (await canAddBattery()) {
      setBattery(battery + 1)
      saveBatteryInStorage(battery + 1)
      saveTimestampInStorage()
    }
  }

  useEffect(() => {
    const setBatteryFromStorage = async () => {
      const storagedBattery = await getCurrentBattery();
      setBattery(storagedBattery)
    }

    setBatteryFromStorage()
  }, [])

  return (
    <BatteryContext.Provider value={{ battery, increaseBattery, canAddBattery }}>
      {children}
    </BatteryContext.Provider>
  )
}
