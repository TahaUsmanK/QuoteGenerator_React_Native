import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Button, Pressable, Text, View} from 'react-native';

function App(): React.JSX.Element {
  const [data, setData] = useState([]);

  const GetAPIData = async () => {
    const url = 'https://api.api-ninjas.com/v1/quotes?category=';
    const APIkey = '9QH2ATe+3PchHaLFoKGEUQ==2IpeTOXd4Pj1jF4r';
    try {
      const result = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': APIkey,
        },
      });
      const data = await result.json();
      setData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    GetAPIData();
  }, []);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Quote Generator</Text>
      {data.length > 0 && (
        <View>
          <Text
            style={{
              fontSize: 26,
              color: 'black',
              margin: 10,
              backgroundColor: 'lightblue',
              padding: 10,
              borderRadius: 10,
            }}>
            Quote: {data[0].quote}
          </Text>
          <Text
            style={{
              fontSize: 18,
              color: 'black',
              margin: 10,
              backgroundColor: 'lightblue',
              padding: 10,
              borderRadius: 10,
            }}>
            Author: {data[0].author}
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: 'black',
              margin: 10,
              backgroundColor: 'lightblue',
              padding: 10,
              borderRadius: 10,
            }}>
            Category: {data[0].category}
          </Text>
        </View>
      )}
      {data.length === 0 && <ActivityIndicator />}
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
        <Pressable
          onPress={GetAPIData}
          style={{backgroundColor: 'lightblue', padding: 10, borderRadius: 10 , paddingRight: 164, paddingLeft: 164}}>
          <Text>Get Quote</Text>
        </Pressable>
      </View>
    </View>
  );
}

export default App;
