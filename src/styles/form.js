import { StyleSheet } from 'react-native';
import colors from '../styles/colors';

const formStyles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: colors.bgDark, // Fondo oscuro para el input
        color: colors.fontLight, // Texto claro para el input
    },
    btnRegister: {
        backgroundColor: colors.primary, // Utiliza el color primario moderno
        padding: 10, // Añadir padding para mejor apariencia
        borderRadius: 5, // Bordes redondeados para un aspecto más moderno
    },
    btnTextLabel: {
        color: colors.fontLight, // Texto claro para mejor contraste
        fontSize: 16,
        fontWeight: 'bold',
    },
    btnText: {
        marginTop: 15,
        color: colors.primary, // Utiliza el color primario para el texto del botón
    },
    formTitle: {
        fontWeight: 'bold',
        fontSize: 24, // Tamaño de fuente más grande para el título
        marginBottom: 20,
        color: colors.primary, // Utiliza el color primario para el título
        alignSelf: 'center',
        position: 'relative',
        top: -10,
    },
    bgForm: {
        backgroundColor: colors.bgDark, // Fondo oscuro para el formulario
        padding: 20, // Añadir padding para espaciar los elementos
        borderRadius: 10, // Bordes redondeados para un aspecto más moderno
    },
    bgTxtInput: {
        backgroundColor: '#f5f5f5', // Fondo claro para el input
        color: '#000', // Texto oscuro para el input
        borderRadius: 5, // Bordes redondeados para un aspecto más moderno
        padding: 10, // Añadir padding para mejor apariencia
    },
});

export default formStyles;
