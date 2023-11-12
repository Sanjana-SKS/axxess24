import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftIcon, AppleIcon, BreadIcon, MilkIcon, EggIcon, CheeseIcon } from 'react-native-heroicons/outline';

export default function SearchScreen() {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [groceryItems, setGroceryItems] = useState([]);

  // Hardcoded grocery items with hero icons
  const allGroceryItems = [
    { id: 1, name: 'Apples', icon: <AppleIcon size={32} color="#000" /> },
    { id: 2, name: 'Bread', icon: <BreadIcon size={32} color="#000" /> },
    { id: 3, name: 'Milk', icon: <MilkIcon size={32} color="#000" /> },
    { id: 4, name: 'Eggs', icon: <EggIcon size={32} color="#000" /> },
    { id: 5, name: 'Cheese', icon: <CheeseIcon size={32} color="#000" /> },
  ];

  const handleSearch = (query) => {
    const filteredItems = allGroceryItems.filter(item =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setGroceryItems(filteredItems);
  };

  const addToCart = (item) => {
    // Implement add to cart logic here
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon size={32} strokeWidth={2} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchCard}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => {
            setSearchQuery(text);
            if (text === '') {
              setGroceryItems([]);
            }
          }}
          value={searchQuery}
          placeholder="Search for groceries"
          onSubmitEditing={() => handleSearch(searchQuery)}
        />

        <FlatList
          data={groceryItems}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.listItem}>
              {item.icon}
              <Text style={styles.itemText}>{item.name}</Text>
              <TouchableOpacity onPress={() => addToCart(item)} style={styles.addButton}>
                <Text style={styles.addButtonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
  },
  searchCard: {
    backgroundColor: 'red', // Red card background
    margin: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  searchInput: {
    height: 40,
    borderWidth: 0,
    padding: 10,
    backgroundColor: 'white',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: 'white',
  },
  itemText: {
    fontSize: 18,
    flex: 1,
    marginLeft: 10,
  },
  addButton: {
    backgroundColor: '#520f1a',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
  },
});
