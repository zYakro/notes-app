import React from 'react'
import { Container } from './styled'
import { Auth } from '../../components/Auth'
import { SafeAreaView } from 'react-native'

export const AuthView = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Auth />
      </Container>
    </SafeAreaView>
  )
}