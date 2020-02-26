import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [people, setPeople] = useState([
    { name: 'shaun', id: '1' },
    { name: 'pepe', id: '2' },
    { name: 'caca', id: '3' },
    { name: 'asdsd', id: '4' },
    { name: 'dsids', id: '5' },
    { name: 'dsids', id: '6' },
    { name: 'dsids', id: '7' },
    { name: 'end', id: '8' },

  ]);
 

  const clickHandler = () => {
    setName('chun li')
  }

  return (
    <View style={styles.container}>
      <FlatList 
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <Text style={styles.item}>{item.name}</Text>
        )}/>

      
      {/* <ScrollView>
      {people.map((item) => {
        return(
          <View key={item.key}> 
            <Text style={styles.item}>{item.name}</Text>
          </View>
        )
      })}
      </ScrollView> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 20,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  item: {
    marginTop: 24,
    padding: 30,
    backgroundColor: 'red',
    fontSize: 24,
    marginHorizontal: 10,
    marginTop: 24,
  }
});
