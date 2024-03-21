import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Learn to feel in [LANGUAGE]!</Text>
      <ScrollView style={styles.cardContainer} contentContainerStyle={{ alignItems: 'center' }}>
        <View style={styles.card}><Text>Poem Content</Text></View>
        <View style={styles.card}><Text>Story Content</Text></View>
        <View style={styles.card}><Text>Tongue Twister Content</Text></View>
        <View style={styles.card}><Text>Song Content</Text></View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  cardContainer: {
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 50,
    marginVertical: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
