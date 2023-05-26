import React, { useEffect, useState } from 'react';
import { SplashScreen } from 'expo-splash-screen'; // Update the import statement
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import MainScreen from './MainScreen';
import Splash from './SplashScreen';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await SplashScreen.preventAutoHideAsync(); // Update the method name
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        });
        // Any additional data loading or initialization tasks can go here
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
        setTimeout(() => {
          setShowSplash(false);
          SplashScreen.hideAsync(); // Update the method name
        }, 3000); // Adjust the duration (in milliseconds) as per your requirements
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  if (!isReady || showSplash) {
    return <Splash />;
  }

  return <MainScreen />;
}
