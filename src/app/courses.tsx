import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Pressable, FlatList, Image } from 'react-native';
import languages from '@/assets/data/languages';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function ModalScreen() {

  const renderItem = ({ item }: { item: typeof languages[number] }) => (
    <Pressable style={styles.container}>
      <View style={styles.courseContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Image
      style={styles.imageStyle}
      source={item.image}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* <EditScreenInfo path="app/modal.tsx" /> */}
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    </Pressable>
  );

  return (
   <FlatList
    data={languages}
    renderItem={renderItem}
    keyExtractor={(item, index) => String(index)}
   />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  courseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
    borderRadius: 100
  },
});
