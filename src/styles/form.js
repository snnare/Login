import { StyleSheet } from 'react-native';
import colors from '../styles/colors'

const formStyles = StyleSheet.create({
    input: {
        marginBottom: 20,
    },
    btnRegister: {
        backgroundColor: '#393d42',
        padding: 0,
    },
    btnTextLabel: {
        color: colors.dark,
    },
    btnText: {
        marginTop: 15,
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 19,
        marginBottom: 10,
        color: '#fff',
        alignSelf: 'center',
        position: 'relative',
        top: -10        
    },
    bgForm: {
        backgroundColor: '#1f2124',
    },
    bgTxtInput: {
        backgroundColor: '#9fa3a9',
        color: '#000',
    },
    
});

export default formStyles;