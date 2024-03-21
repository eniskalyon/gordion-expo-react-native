import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native';
import units from '@/assets/data/units';




export default function TabOneScreen() {
  
  const renderItem = ({ item }: { item: typeof units[number] }) => (
    <Pressable style={styles.container}>
    
      <View style={styles.unitContainer}>
      <Text style={styles.title}>{item.name}</Text>
      <Image
        style={styles.imageStyle}
        source={item.image }
      />
      <Text>{item.topic}</Text>
      </View>
   </Pressable>
  );

  return (
   <FlatList
    data={units}
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
    padding: 20,
  },
  unitContainer: {
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
  imageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginVertical: 10,
    borderRadius: 100
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
