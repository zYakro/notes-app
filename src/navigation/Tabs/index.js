import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../../views/HomeView';
import { EnergyView } from '../../views/EnergyView';
import { TabBar } from '../TabBar';
import { StatusBar } from '../../components/StatusBar';
import { HabitsView } from '../../views/HabitsView';

const Tab = createBottomTabNavigator()

export const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <TabBar {...props} />}
      initialRouteName='Home'
    >
      <Tab.Screen name="Notes" component={EnergyView} />
      <Tab.Screen name="Habits" component={HabitsView} />
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="Energy" component={EnergyView} />
      <Tab.Screen name="Shop" component={EnergyView} />
    </Tab.Navigator >

  )
}