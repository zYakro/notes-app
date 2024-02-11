import { supabase } from "@/supabase/config";
import { DatabaseError, ValidationError } from "./errors.service";
import { isAuthError } from "@supabase/supabase-js";

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
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) throw error;

    const request = await supabase
      .from('users-info')
      .insert({
        email: email,
      })

    if (request.error) throw error;

  } catch (err) {

    if (isAuthError(err)) {
      throw new ValidationError(err.message)
    }

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
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) throw error
  } catch (err) {
    if (isAuthError(err)) {
      throw new ValidationError(err.message)
    }

    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}

export const signOut = async () => {
  try {
    const { error } = await supabase.auth.signOut()

    if (error) throw error;
  } catch (err) {
    if(isAuthError(err)){
      throw new ValidationError(err.message)
    }

    throw new DatabaseError('Something unexpected happened... Try again later')
  }
}