import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native';

const Products = ({name, deleteProduct, idString}) => {
  return (
    <Pressable onPress={()=> deleteProduct(idString)}>
        <View style={styles.productItems}>
            <Text style={styles.item}> {name} </Text>
        </View>
    </Pressable>
  )
}

export default Products

const styles = StyleSheet.create({
    productItems:{
      marginTop: 10,
    },
    item:{
      backgroundColor: "#87cefa",
      padding: 20,
      fontSize: 17,
      marginVertical: 6,
    }
  });