import React, { useEffect, useState } from 'react';
import {ScrollView, StyleSheet } from 'react-native';

import Loading from "./App/components/Loading";


export default function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=829751643419a7128b7ada50de590067&format=json")
            .then(res => res.json())
            .then(dat => {setData(dat.topartists.artist)})
    setIsLoading(false);
  }, []);

  return (
    <ScrollView style={styles.container}>
      {isLoading ? <Loading/> : 
      <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
                <Text>{item.name}</Text>
            )}
            />}
    </ScrollView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },
});
