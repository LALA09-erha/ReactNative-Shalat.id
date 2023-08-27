import {View, Text, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HadistScreen({route}) {
  // const listHadist = route.params.hadist;
  const [listHadist, setListHadist] = useState([]);
  const data = () => {
    setTimeout(async () => {
      let hadist = await AsyncStorage.getItem('Bukhori');
      if (hadist) {
        let dataHadist = JSON.parse(hadist);
        setListHadist(dataHadist);
      }
    }, 3000);
  };

  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            flexDirection: 'column',
            flex: 1,
          }}>
          {/* Content */}
          {/* Perulangan Hadist */}
          {Object.values(listHadist).map((x, i) => {
            return (
              <View
                key={i}
                style={{
                  backgroundColor: 'white',
                  height: 100,
                  margin: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  borderRadius: 10,
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,
                  elevation: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: 'black',
                    fontFamily: 'verdana',
                    marginLeft: 10,
                  }}>
                  {x.number}
                </Text>
              </View>
            );
          })}
          {/* End Content */}
        </View>
      </ScrollView>
    </>
  );
}
