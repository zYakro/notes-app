import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getTimestampFromStorage() {
  try {
    const timestamp = await AsyncStorage.getItem('batteryTimestamp');

    if (!timestamp) {
      const currDate = Date.now();
      saveTimestampInStorage();
      return currDate;
    }

    return timestamp ? parseInt(timestamp, 10) : 1;
  } catch (error) {
    return 1;
  }
}

export async function saveTimestampInStorage() {
  try {
    const currentTimestamp = Date.now().toString();
    await AsyncStorage.setItem('batteryTimestamp', currentTimestamp);
  } catch (error) {
  }
}

export async function getBatteryFromStorage() {
  try {
    const storagedBattery = await AsyncStorage.getItem('battery');
    return storagedBattery ? parseInt(storagedBattery) : 4;
  } catch (error) {
  }
}

export async function saveBatteryInStorage(battery) {
  try {
    await AsyncStorage.setItem('battery', battery.toString());
  } catch (error) {
  }
}

export async function canAddBattery() {
  const timestamp = await getTimestampFromStorage();

  if (timestamp) {
    const currentTimestamp = Date.now();
    const hoursDifference = (currentTimestamp - timestamp) / (1000 * 60 * 60);

    return hoursDifference >= 2;
  }

  return false;
}

export const getHourDifference = (timestamp) => {
  const currentTimestamp = Date.now();
  const hoursDifference = (currentTimestamp - timestamp) / (1000 * 60 * 60);
  return Math.floor(hoursDifference / 4);
}

export async function getCurrentBattery() {
  const timestamp = await getTimestampFromStorage();

  if (timestamp) {
    const decreaseAmount = getHourDifference(timestamp)

    let currentBattery = await getBatteryFromStorage();

    currentBattery = Math.max(0, currentBattery - decreaseAmount);
    currentBattery = Math.min(4, currentBattery);

    await saveBatteryInStorage(currentBattery);

    return currentBattery
  }

  return 4;
}

