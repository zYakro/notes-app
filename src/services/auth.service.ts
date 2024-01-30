import { NextOrObserver, User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";  
import { auth, firestore } from "../firebase/config";
import { doc, setDoc } from "firebase/firestore";

export const signUp = async (email: string, password: string, confirmation: string) => {
  if(password !== confirmation){
    return {
      success: false,
      message: "Passwords doesn't match"
    };
  }

  try{
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)

    const uid = userCredential.user.uid

    await setDoc(doc(firestore, 'users', uid), {
      email
    })
    
    return {
      success: true,
      message: ""
    }
  }catch(err){
    return {
      success: false,
      message: err.message
    }
  }
}

export const singIn = async (email: string, password: string) => {
  try{
    await signInWithEmailAndPassword(auth, email, password);

    return {
      success: true,
      message: ''
    }
  }catch(err){
    return {
      success: false,
      message: err.message
    }
  }
}

export const isUserAuthenticated = (onChange: NextOrObserver<User>) => {
  onAuthStateChanged(auth, onChange)
}