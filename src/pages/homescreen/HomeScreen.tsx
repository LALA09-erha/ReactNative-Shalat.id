import {
  View,
  useColorScheme,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {Component} from 'react';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import HeaderScreen from './HeaderScreen';
import FooterScreen from './FooterScreen';
import TopScreen from './TopScreen';
import {get} from 'react-native/Libraries/TurboModule/TurboModuleRegistry';

var height = Dimensions.get('window').height + StatusBar.currentHeight;

function HomeScreen({route}): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const listQuotes = route.params.Quotes;
  const listBukhori = route.params.Bukhori;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
      }}>
      <StatusBar translucent backgroundColor="transparent" />

      {/* scroll when phone is horizonetal mode */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flex: 1,
            backgroundColor: backgroundStyle.backgroundColor,
            height: height,
          }}>
          {/* TOP COMPONENT */}
          <TopScreen />
          {/* END TOP COMPONENT */}

          {/* SECOND COMPONENT */}
          <View
            style={{
              flex: 1,
              backgroundColor: '#e8e8e8',
            }}>
            <HeaderScreen hadist={listBukhori} />
          </View>
          <FooterScreen quotes={listQuotes} />
          {/* END SECOND COMPONENT */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
