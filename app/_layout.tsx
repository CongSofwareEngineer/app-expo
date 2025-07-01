import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { useFonts } from 'expo-font'
import { Stack, usePathname } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

import 'react-native-reanimated'
import '../styles/global.css'

import * as Notifications from 'expo-notifications'
import { useEffect } from 'react'
import { Platform } from 'react-native'

import MyModal from '@/components/MyModal'
import QueryClient from '@/components/QueryClient'
import { useColorScheme } from '@/hooks/useColorScheme'
import useLanguage from '@/hooks/useLanguage'

console.log('RootLayout')
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowBanner: true,
    shouldShowList: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
})

// messaging().setBackgroundMessageHandler(async (remoteMessage) => {
//   console.log('Message handled in the background!', remoteMessage)
// })

export default function RootLayout() {
  const { translate } = useLanguage()
  const patchName = usePathname()

  console.log('patchName', patchName)

  const colorScheme = useColorScheme()
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  })

  useEffect(() => {
    if (Platform.OS === 'android') {
      Notifications.getNotificationChannelsAsync().then((value) => {
        console.log({ getNotificationChannelsAsync: value })
      })
    }
    const notificationListener = Notifications.addNotificationReceivedListener((notification) => {
      console.log({ notification })
    })

    const responseListener = Notifications.addNotificationResponseReceivedListener((response) => {
      console.log({ response })
    })

    return () => {
      notificationListener.remove()
      responseListener.remove()
    }
  }, [])

  if (!loaded) {
    // Async font loading only occurs in development.
    return null
  }

  return (
    <QueryClient>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen
            name='(tab-navigation)'
            options={{
              headerShown: false,
              // title: translate('common.back'),
              headerBackTitleStyle: {
                fontSize: 8,
              },
              headerTitle: translate('common.back'),
              headerTitleStyle: {
                fontSize: 8,
              },
              headerBackTitle: translate('common.back'),
            }}
          />
          <Stack.Screen name='+not-found' />
          <Stack.Screen name='login' options={{ title: translate('login.titlePage'), headerShown: false }} />
          <Stack.Screen name='tc-store' options={{ title: translate('production.titlePage') }} />
          <Stack.Screen name='tc-store/production' options={{ title: translate('production.titlePage') }} />
          <Stack.Screen name='thayhongtoan/list-register' options={{ title: translate('production.titlePage') }} />
          <Stack.Screen name='setting' options={{ title: translate('production.titlePage') }} />
        </Stack>
        <StatusBar style='auto' />
        <MyModal />
        {/* <Permission /> */}
      </ThemeProvider>
    </QueryClient>
  )
}
