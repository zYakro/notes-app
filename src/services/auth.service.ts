import { supabase } from "@/supabase/config";
import { DatabaseError, ValidationError } from "./errors.service";

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
    const { data, error } = await supabase.auth.signUp({ email, password })

    if (error) throw error;

    const request = await supabase
      .from('users')
      .insert({
        email: email,
        coins: 0,
        exp: 0,
        preferences: {
          background: 'light-screen',
          theme: 'main-theme'
        }
      })

    if (request.error) throw error;
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
    const { error} = await supabase.auth.signInWithPassword({ email, password });

    if(error) throw error
  } catch (err) {
    const { code } = err

    ValidationError.throwValidationError(code)

    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const isUserAuthenticated = (onChange: any) => {

}