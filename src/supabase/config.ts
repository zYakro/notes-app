import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { Database } from '@/types/supabase'

const supabaseUrl = "https://acmfzlvbevunuwzycymm.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFjbWZ6bHZiZXZ1bnV3enljeW1tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDcyNDgwODMsImV4cCI6MjAyMjgyNDA4M30.tmmsMRe7-gYC-Hy9WBQkwqYgXNH2xc3NE9KSum287DA"

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})