import { NextOrObserver, User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth, firestore } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";
import { DatabaseError, ValidationError } from "./errors.service";
import { FirebaseError } from "firebase/app";

export const signUp = async (email: string, password: string, confirmation: string) => {
  if (!email) {
    throw new ValidationError('Email field is empty')
  }

  if (!password) {
    throw new ValidationError('Password field is empty')
  }

  if (password !== confirmation) {
    throw new ValidationError("Passwords doesn't match")
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    const uid = userCredential.user.uid

    await setDoc(doc(firestore, 'users', uid), {
      email
    })

  } catch (err) {
    const { code } = err

    ValidationError.throwValidationError(code)

    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const singIn = async (email: string, password: string) => {
  if (!email) {
    throw new ValidationError('Email field is empty')
  }

  if (!password) {
    throw new ValidationError('Password field is empty')
  }

  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    const { code } = err

    ValidationError.throwValidationError(code)

    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const isUserAuthenticated = (onChange: NextOrObserver<User>) => {
  onAuthStateChanged(auth, onChange)
}