import { Tabs } from 'expo-router'
import React from 'react'
import { Platform, useColorScheme } from 'react-native'
import { Colors } from '@/constants/Colors'
import TabBarBackground from '@/components/ui/TabBarBackground'
import { HapticTab } from '@/components/HapticTab'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { useThemeColor } from '@/hooks/useThemeColor'

const TabNavigation = () => {
  const colorScheme = useColorScheme()
  const background = useThemeColor('background')

  return (
    <Tabs
      //   initialRouteName='home/index'
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
        sceneStyle: {
          backgroundColor: background,
        },
      }}
    >
      <Tabs.Screen
        name='thayhongtoan'
        options={{
          title: 'Thayhongtoan',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='paperplane.fill' color={color} />,
        }}
      />

      <Tabs.Screen
        name='home'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='house.fill' color={color} />,
        }}
      />

      <Tabs.Screen
        name='tc-store'
        options={{
          title: 'TC Store',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name='paperplane.fill' color={color} />,
        }}
      />
    </Tabs>
  )
}

export default TabNavigation
