import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ItemDetails from './ItemDetails';

export default function Item({ item}) {
  return (
    <View style={[styles.itemContainer, { backgroundColor: primary }]}>
      <Text style={[styles.itemName, { color: white }]}>
        {item.name || item.description}
      </Text>
      <ItemDetails item={item}/>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  },
  itemName: {
    fontSize: 12,
    fontWeight: 'bold',
    flex: 1,
  },
});