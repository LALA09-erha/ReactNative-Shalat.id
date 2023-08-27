import {Text, View, ImageBackground} from 'react-native';
import React from 'react';

export default function TopScreen() {
  return (
    <>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../../../data/img/back2.webp')}
          style={{flex: 1, width: null, height: null}}>
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0,0,0,0.4)',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: 'white',
                fontSize: 30,
                fontVariant: ['small-caps'],
                fontWeight: 'bold',
              }}>
              Shalat.ID
            </Text>
            <Text
              style={{
                color: 'white',
                fontSize: 15,
                fontVariant: ['small-caps'],
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}>
              Hadist dan Al-Qur'an
            </Text>
          </View>
        </ImageBackground>
      </View>
    </>
  );
}
