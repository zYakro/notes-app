import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { IconContainer, IconText } from '../StatusBarIcon';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '@/types/types';
import { StackNavigationProp } from '@react-navigation/stack';

export const User = () => {
  const navigation = useNavigation<StackNavigationProp<Routes>>()

  const iconColor = '#4C4940'

  return (
    <IconContainer>
      <TouchableOpacity onPress={() => navigation.navigate('User')}>
        <FontAwesome name="user-circle-o" size={18} color={iconColor} />
      </TouchableOpacity>
    </IconContainer>
  )
}