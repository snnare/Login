import * as React from 'react';
import * as RN from 'react-native';
import { database } from '../../config/db';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import { AntDesign } from '@expo/vector-icons';

export default function Product({
    id,
    emoji,
    name,
    price,
    isSold,
}) {

    const onDelete = () => {
        const docRef = doc(database, 'products', id);
        deleteDoc(docRef);
    }

    const onEdit = () => {
        const docRef = doc(database, 'products', id);
        updateDoc(docRef, {
            isSold: true,
        });
    }

    return(
        <RN.View>
            <RN.View style={styles.productContainer}>
                <RN.View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <RN.Text style={styles.emoji}>{emoji}</RN.Text>
                    <AntDesign onPress={onDelete} name="delete" size={24} color="red" />
                </RN.View>
                <RN.Text style={styles.name}>{name}</RN.Text>
                <RN.Text style={styles.price}>${price}</RN.Text>
                {isSold ? (
                    <RN.TouchableOpacity 
                    style={styles.completebutton}>
                    <RN.Text style={styles.buttonText}>Completado</RN.Text>
                </RN.TouchableOpacity>
                )
                : (
                    <RN.TouchableOpacity 
                    onPress={onEdit}
                    style={styles.button}>
                    <RN.Text style={styles.completebutton}>Completar Tarea</RN.Text>
                    </RN.TouchableOpacity>
                )}                
            </RN.View>
        </RN.View>
    )
}

const styles = RN.StyleSheet.create({
    productContainer: {
        padding: 16,
        backgroundColor: '#fafafa',
        margin: 16,
        borderRadius: 8,
    },
    emoji: {
        fontSize: 100,
        alignItems: 'center'
    },
    name: {
        fontSize: 32,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
    },
    button: {
        backgroundColor: '#651FFF',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
   },
    buttonText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#fff',
    },
    completebutton: {
        backgroundColor: '#2d913a',
        padding: 10,
        marginVertical: 6,
        borderRadius: 8,
        alignItems: 'center',
        color:''
    }

});