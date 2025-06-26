import React, { useEffect } from "react";
import messaging from "@react-native-firebase/messaging";

const Permission = () => {
  useEffect(() => {
    async function requestUserPermission() {
      try {
        const isSupported =await messaging().isSupported()
        console.log('====================================');
        console.log({isSupported});
        console.log('====================================');
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log("Authorization status:", authStatus);
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
