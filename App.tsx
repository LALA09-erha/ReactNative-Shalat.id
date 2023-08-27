/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import Navigation from './src/navigation/Navigation';
import SplashScreen from 'react-native-splash-screen';

function App(): JSX.Element {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      {/* if Hadist Undifined try to pra loader */}
      <Navigation />

      {/* <HomeScreen /> */}
    </>
  );
}

export default App;
