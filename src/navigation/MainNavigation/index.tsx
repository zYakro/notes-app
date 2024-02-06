import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeView } from '../../views/HomeView';
import { EnergyView } from '../../views/EnergyView';
import { TabBar } from './TabBar';
import { HabitsView } from '../../views/HabitsView';
import { JournalView } from '../../views/JournalView';
import { StatusBar } from '../../components/StatusBar'
import { ShopView } from '@/views/ShopView';

const Tab = createBottomTabNavigator()

export const MainNavigation = () => {
  return (
    <>
      <StatusBar />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
        tabBar={props => <TabBar {...props} />}
        initialRouteName='Home'
        backBehavior='none'
      >
        <Tab.Screen name="Journal" component={JournalView} />
        <Tab.Screen name="Habits" component={HabitsView} />
        <Tab.Screen name="Home" component={HomeView} />
        <Tab.Screen name="Energy" component={EnergyView} />
        <Tab.Screen name="Shop" component={ShopView} />
      </Tab.Navigator >
    </>
  )
}