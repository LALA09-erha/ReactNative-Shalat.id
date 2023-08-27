import {
  View,
  Text,
  ImageBackground,
  Image,
  StatusBar,
  Alert,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import quotes from '../../../data/hadist/quotes.json';
import bukhori from '../../../data/hadist/bukharii.json';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SplashScreen() {
  const navigation = useNavigation();
  const [Quotes, setQuotes] = useState(quotes);
  const [Bukhori, setBukhori] = useState(bukhori);
  // jika Quotes melebihi dari 300 karakter maka akan di potong
  var data = [];
  for (let i = 0; i < Quotes.quotes.length; i++) {
    if (data.includes(Quotes.quotes[i])) {
      continue;
    } else {
      data.push(Quotes.quotes[i]);
    }
    // }
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        // clear data
        // AsyncStorage.clear();
        // check data
        let data = new Promise(async (resolve, reject) => {
          let quotes = await AsyncStorage.getItem('Bukhori');
          if (quotes) {
            //
          } else {
            AsyncStorage.setItem('Bukhori', JSON.stringify(Bukhori));
            resolve(Bukhori);
          }
        });
      } catch (e) {
        Alert.alert('Error', "Something's wrong");
      }

      navigation.replace('Home', {
        Quotes: data,
        Bukhori: Bukhori,
      });
    }, 3000);
  }, [data && Bukhori]);
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />

      <ImageBackground
        source={require('../../../data/img/splash.png')}
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../../data/img/loading-6324_256.gif')}
          style={{
            width: 50,
            height: 50,

            marginTop: 200,
          }}></Image>
      </ImageBackground>
    </>
  );
}
