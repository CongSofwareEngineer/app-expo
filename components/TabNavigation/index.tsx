import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, useColorScheme } from 'react-native'
import { IconSymbol } from '../ui/IconSymbol'
import { Colors } from '@/constants/Colors'
import { HapticTab } from '../HapticTab'
import TabBarBackground from '@/components/ui/TabBarBackground'

const TabNavigation = () => {
  const colorScheme = useColorScheme()

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}
    >
      {/* <Tabs.Screen
        name='explore'
        options={{
          title: 'Explore',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='paperplane.fill' color={color} />,
        }}
      />
      <Tabs.Screen
        name='explore2'
        options={{
          title: 'explore2',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='paperplane.circle' color={color} />,
        }}
      /> */}
      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='house.fill' color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabNavigation
