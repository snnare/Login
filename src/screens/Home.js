import * as React from "react";
import * as RN from "react-native";

import { useNavigation } from "@react-navigation/native";
import { database } from "../../config/db";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Product from '../components/Product'


export default function Home(){
    const [products, setProducts] = React.useState([]);
    const navigation = useNavigation();


    
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <RN.View style={styles.btnContainer}>

            <RN.View style={styles.btn}>
                <RN.TouchableOpacity onPress={() => navigation.navigate("Add")} > 
                    <RN.Text style={{color: '#fff'}}>Agregar</RN.Text>
                </RN.TouchableOpacity>
            </RN.View>

            <RN.View style={styles.btn}>
                <RN.TouchableOpacity onPress={() => navigation.navigate("Logout")} > 
                    <RN.Text style={{color: '#fff'}}>ByeBye</RN.Text>
                </RN.TouchableOpacity>
            </RN.View>
        </RN.View>
      ),
    });
  }, []);


  React.useEffect(() => {
    const collectionRef = collection(database, "products");
    const q = query(collectionRef, orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      // onSnapshot is a listener that listens to changes in the database in realtime
      console.log("querySnapshot unsusbscribe");
      setProducts(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          emoji: doc.data().emoji,
          name: doc.data().name,
          price: doc.data().price,
          isSold: doc.data().isSold,
          createdAt: doc.data().createdAt,
        }))
      );
    });
    return unsubscribe; // unsubscribe from the listener when the component is unmounting
    // because it avoids memory leaks
  }, []);




  return (
    <RN.View style={styles.container}>
      <RN.ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        <RN.Text style={styles.title}>Productos</RN.Text>
        {products.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </RN.ScrollView>
    </RN.View>
  );


  
}

const styles = RN.StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6a6e73",
    },
    title: {
      fontSize: 32,
      fontWeight: "bold",
      margin: 16,
    },
    btnContainer: {
      flexDirection: 'row',
    },
    btn: {
      marginHorizontal: 6,
      marginVertical: 2,
      backgroundColor: '#1f2124',
      padding: 8,
      marginVertical: 6,
      borderRadius: 8,
      alignItems: 'center',
    }
  });
  