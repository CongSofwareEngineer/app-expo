import messaging from '@react-native-firebase/messaging'
import React, { useEffect } from 'react'
import { PermissionsAndroid } from 'react-native'

const Permission = () => {
  useEffect(() => {
    async function requestUserPermission() {
      try {
        const isSupported = await messaging().isSupported()

        console.log({ isSupported })
        const authStatus = await messaging().requestPermission()
        const enabled = authStatus === messaging.AuthorizationStatus.AUTHORIZED || authStatus === messaging.AuthorizationStatus.PROVISIONAL

        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
        if (enabled) {
          const token = await messaging().getToken()

          console.log({ token })

          messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log({ remoteMessage })
          })
        }
      } catch (error) {
        console.log({ error })
      }
    }
    requestUserPermission()
  }, [])

  return <></>
}

export default Permission
