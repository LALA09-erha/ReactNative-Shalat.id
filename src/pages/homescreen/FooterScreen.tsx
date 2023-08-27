import {Text, View, ImageBackground, ScrollView} from 'react-native';
import React from 'react';

function FooterScreen(props): JSX.Element {
  // console.log(props.quotes);
  var index = 0;
  return (
    <>
      <View
        style={{
          flex: 2,
          backgroundColor: '#e8e8e8',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: 'black',
            fontFamily: 'verdana',
            marginLeft: 25,
            // marginBottom: 10,
          }}>
          Pengingat Kita
        </Text>
        {/* Make Card*/}
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{margin: 5, padding: 5}}>
          {Object.values(props.quotes).map(x => {
            return (
              // make text center
              <ImageBackground
                borderRadius={20}
                key={x.quote}
                source={require('../../../data/img/back.jpg')}
                style={{
                  flex: 7,
                  width: 300,
                  opacity: 0.8,
                  backgroundColor: '#84c949',
                  marginRight: 15,
                  borderRadius: 20,
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
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: 'bold',
                    color: 'black',
                    opacity: 1,
                    fontFamily: 'verdana',
                    paddingTop: 10,
                    textAlign: 'center',
                  }}>
                  {x.quote}
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    opacity: 1,
                    fontFamily: 'verdana',
                    paddingTop: 10,
                    textAlign: 'center',
                  }}>
                  - {x.author} -
                </Text>
              </ImageBackground>
            );
          })}
        </ScrollView>

        {/* End Card */}

        <Text
          style={{
            textAlign: 'center',
            fontSize: 15,
            color: 'black',
            fontFamily: 'verdana',
            alignItems: 'flex-end',
          }}>
          Shalat.ID © 2023 | RH
        </Text>
      </View>
    </>
  );
}

export default FooterScreen;
