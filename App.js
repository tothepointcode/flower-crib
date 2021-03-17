import React, { useState } from 'react';

// React navigation stack
import RootStack from './navigators/RootStack';

// apploading
import AppLoading from 'expo-app-loading';

// async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [appReady, setAppReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("Yeah more data");

  const checkLoginCredentials = () => {
    AsyncStorage.getItem('flowerCribCredentials')
      .then((result) => {
        if (result !== null) {
          setStoredCredentials(JSON.parse(result));
        }
      })
      .catch((error) => console.log(error));
  };

 

  const clearLogin = () => {
    AsyncStorage.removeItem('flowerCribCredentials')
      .then(() => {})
      .catch((error) => console.log());
  };

  if (!appReady) {
    return <AppLoading startAsync={checkLoginCredentials} onFinish={() => setAppReady(true)} onError={console.warn} />;
  }

  return <RootStack storedCredentials={storedCredentials} />;
}
