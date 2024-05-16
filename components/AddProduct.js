import React from 'react'
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const AddProduct = ({submitHandler}) => {

    const [product, setProduct] = useState("");

    const inputHandler = (val) => {
        setProduct(val)
    }

    const handleClick = () => {
        submitHandler(product);
        setProduct("")
    }

  return (
    <View>
        <TextInput placeholder='Nouveau produit' onChangeText={inputHandler} value={product}/>
        <Button onPress={handleClick} title='Valider'/>
    </View>
  )
}

export default AddProduct