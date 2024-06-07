import React, { useState } from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Button } from 'react-native-paper';


function ButtonD() {
    
    const [date, setDate] = useState('Presiona');

    return(
        <View>
            <Button
            icon='clock-time-eight'
            mode='elevated'
            onPress={() => {
                setDate(new Date().toLocaleDateString())
            }}>
                <Text style={StyleSheet.date}>{date}</Text>
            </Button>
        </View>
    )
}


const styless = StyleSheet.create({
    date: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }
})

export default ButtonD;