import { initializeApp } from 'firebase/app'
import { getReactNativePersistence, initializeAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import AsyncStorage from '@react-native-async-storage/async-storage'

const config = {
  apiKey: "AIzaSyBAEBU1NL77YkxMx5vYmGwpE2GGnMZcF10",
  authDomain: "lunar-habits.firebaseapp.com",
  projectId: "lunar-habits",
  storageBucket: "lunar-habits.appspot.com",
  messagingSenderId: "106877103342",
  appId: "1:106877103342:web:510490cd765b0bdb8457ff",
  measurementId: "G-YNR4BLJ9S3"
}

const app = initializeApp(config)

const firestore = getFirestore(app)

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
})

export {
  app, firestore, auth
}