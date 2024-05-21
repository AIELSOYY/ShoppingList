import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity, Modal, Alert, Pressable, ImageBackground, Image } from 'react-native';
import AddProduct from './components/AddProduct';
import Products from './components/Products';
import Header from './components/Header';
import Colors from './constants/Colors';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  const [myProducts, setMyProducts]= useState([]);
  const [showModal, setShowModal] = useState(false);
  const [fontsLoaded, error] = useFonts({
    Roboto: Roboto_500Medium,
  })

  const submitHandler = (product) => {
    if(product.length>1){
      const idString = Date.now().toString();
      setMyProducts(currentMyProducts => [{key: idString, name: product}, ...currentMyProducts])
    }
    else{
      setShowModal(true)
      // Alert.alert("Désole", "Nombre de caractères insuffisant minimun 2 caractères",
      //   [
      //     { text: "Compris",
      //       onPress: () => console.warn("Refusé")
      //     },
      //     { text: "D'accord",
      //       onPress: () => console.warn("Refusé")
      //     },
      //     { text: "OK",
      //       onPress: () => console.warn("Refusé")
      //     },
      //   ],
      //   { cancelable: true }
      // );
    }
  }

  const deleteProduct = (key) => {
    setMyProducts(currentMyProducts =>{
      return currentMyProducts.filter(product => product.key != key)
    })
  }

  const Tab = createBottomTabNavigator();

  return (
    <ImageBackground style={styles.bgImage} source={require('./assets/image/img.jpg')}>
      <Header/>
    <View style={styles.container}>
      <Modal visible={showModal} onRequestClose={()=>setShowModal(false)} animationType='slide' transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalHeaderText}>
                Oups il y a une erreur!!
              </Text>
            </View>
            <View style={styles.modalBody}>
              <Text stlye={styles.modalBodyText}>
                Merci de noter plus d'un seul caractère
              </Text>
            </View>
            <View style={styles.modalFooter}>
              <Pressable style={styles.pressableBtnModal} onPress={() => setShowModal(false)}>
                <Text style={styles.modalBtn}>
                  D'accord
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <AddProduct submitHandler={submitHandler}/>
      {/* myProducts.map((product, index) => {
        return(
          <Text key={index} style={styles.item}>
            {product}
          </Text>
        )
      }) */}
      <FlatList  
          data={myProducts}
          renderItem={({item}) => (
            <Products name={item.name} idString={item.key} deleteProduct={deleteProduct}/>
          )}
        />

    </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: () => {
          return (
            <Image source={{uri:'./assets/image/img.jpg'}}/>
          )
        }}}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
    
    </ImageBackground>
    

  );
}

function HomeScreen(){
  return(
    <View>
      <Text>Home</Text>
    </View>
  )
}

function SettingsScreen(){
  return(
    <View>
      <Text>Settings</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    paddingTop: 60
  },
  textInputWrapper: {
    marginTop: 50,
    backgroundColor: 'pink',
    alignItems: 'center',
    height: 200,
    width: "100%"
  },
  textInput: {
    height: 40,
    borderColor: Colors.gray,
    borderWidth: 1,
    padding: 10,
    margin: 9,
    width: "90%",
    marginBottom: 5,
  },
  viewList: {
    marginTop: 40,
    backgroundColor: "purple",
    padding: 20,
  },
  textView: {
    color: 'white',
    fontSize: 25
  },
  textViewBold: {
    fontWeight: 'bold',
    fontSize: 20
  },
  modalContainer:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"rgba(0,0,0,0.2)"
  },
  modalContent:{
    backgroundColor:"#fff",
    width:"90%",
    height: 250,
    borderRadius: 15,
    padding: 9,
    alignItems:"center",
  },
  modalHeader: {
    width: '100%',
    padding: 16,
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray' ,
  },
  modalHeaderText: {
    color: 'grey',
    fontSize: 17,   
    fontFamily: 'Roboto'
  },
  modalBody: {
    flex: 1,
    width: "100%",
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBodyText: {
    fontSize: 17,
  },
  modalFooter: {
    width: '100%',
  },
  pressableBtnModal: {
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: 'lightseagreen',
  },
  modalBtn: {
    fontSize: 17,
    color: '#fff',
    textAlign: 'center',
    padding: 16
  },
  bgImage:{
    flex: 1
  }
});
