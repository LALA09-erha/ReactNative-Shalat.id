import {Text, View, ImageBackground, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

function HeaderScreen(props): JSX.Element {
  const navigation = useNavigation();

  // ambil data dari props
  const listHadist = props.hadist;
  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: 'white',
          margin: 5,
          marginTop: 15,
          borderRadius: 10,
          padding: 5,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          flexDirection: 'column',
        }}>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
              fontFamily: 'verdana',
              marginLeft: 10,
            }}>
            Fitur Shalat.ID
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            elevation: 5,
            flex: 2,
            marginBottom: 20,
          }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Hadist', {hadist: listHadist});
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: '#f5b942',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <ImageBackground
                  source={require('../../../data/img/hadist.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}></ImageBackground>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'sans-serif',
                }}>
                Hadist
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Alquran');
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 50,
                  backgroundColor: '#33d48b',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: 5,
                }}>
                <ImageBackground
                  source={require('../../../data/img/alquran.png')}
                  style={{
                    width: 30,
                    height: 30,
                  }}></ImageBackground>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  fontSize: 15,
                  fontFamily: 'sans-serif',
                }}>
                Al-Qur'an
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default HeaderScreen;
