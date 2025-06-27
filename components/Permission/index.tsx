import React, { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";
import { PermissionsAndroid,Platform } from "react-native";

const Permission = () => {
  useEffect(() => {
    async function requestUserPermission() {
      try { 
         
        const isSupported = await messaging().isSupported();
        console.log("====================================");
        console.log({ isSupported });
        console.log("====================================");
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;
        PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
        );
        if (enabled) {
          console.log("Authorization status:", authStatus);
          const token = await messaging().getToken();
          console.log("====================================");
          console.log({ token });
          console.log("====================================");
            messaging().setBackgroundMessageHandler(async (remoteMessage) => {
            console.log("====================================");
            console.log({ remoteMessage });
            console.log("====================================");
          });
          
          
        }
      } catch (error) {
        console.log("====================================");
        console.log({ error });
        console.log("====================================");
      }
    }
    requestUserPermission(); 
  }, []); 

  return <></>;
};
 
export default Permission;  
