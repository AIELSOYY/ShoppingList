import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Pressable } from 'react-native';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';

const Products = ({name, deleteProduct, idString}) => {
  return (
    <Pressable onPress={()=> deleteProduct(idString)}>
        <View style={styles.productItems}>
          <FontAwesome name='remove' size={30} color={Colors.black}/>
            <Text style={styles.item}> {name} </Text>
        </View>
    </Pressable>
  )
}

export default Products

const styles = StyleSheet.create({
    productItems:{
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
    },
    item:{
      backgroundColor: Colors.SkyBlue,
      padding: 20,
      fontSize: 17,
      marginVertical: 6,
    }
  });