import * as React from 'react'
import * as RN from "react-native";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../config/db";
import { useNavigation } from "@react-navigation/native";
import EmojiPicker from "rn-emoji-keyboard";


function Add (){
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = React.useState(false);
  const [newItem, setNewItem] = React.useState({
    emoji: "📷",
    name: "",
    price: 0,
    isSold: false,
    createdAt: new Date(),
  });

  const handlePick = (emojiObject) => {
    setNewItem({
      ...newItem,
      emoji: emojiObject.emoji,
    });
  };


  
  const onSend = async () => {
    const docRef = await addDoc(collection(database, 'products'), newItem);
    navigation.goBack();
  };



  return(
    <RN.View style={styles.container}>
      <RN.Text style={styles.title}>Vender Nuevo Producto</RN.Text>
      <RN.Text onPress={() => setIsOpen(true)} style={styles.emoji}>
        {newItem.emoji}
      </RN.Text>
      <EmojiPicker
        onEmojiSelected={handlePick}
        open={isOpen}
        onClose={() => setIsOpen(false)}
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, name: text })}
        style={styles.inputContainer}
        placeholder="Nombre del Producto"
      />
      <RN.TextInput
        onChangeText={(text) => setNewItem({ ...newItem, price: text })}
        style={styles.inputContainer}
        placeholder="$ Precio"
        keyboardType="numeric"
      />
      <RN.TouchableOpacity 
        style={styles.button} 
        title="Publicar" onPress={onSend}> 
        <RN.Text style={{color: '#fff', fontSize: 20, padding: 10}}>Publicar</RN.Text>
      </RN.TouchableOpacity>
    </RN.View>
  )
}


const styles = RN.StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
    },
    title: {
      fontSize: 32,
      fontWeight: "700",
    },
    inputContainer: {
      width: "90%",
      padding: 13,
      marginVertical: 6,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 6,
    },
    emoji: {
      fontSize: 100,
      borderWidth: 1,
      borderColor: "#ddd",
      borderRadius: 6,
      padding: 10,
      marginVertical: 6,
    },
    button: {
      backgroundColor: '#1f2124',
      padding: 2,
      marginVertical: 6,
      borderRadius: 8,
      alignItems: 'center',
  },
  });
  
export default Add;