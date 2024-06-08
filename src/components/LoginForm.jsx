import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik, useFormik } from "formik";
import { Button, HelperText, TextInput, useTheme } from "react-native-paper";
import * as Yup from 'yup';

import LoginSchema from '../validations/login.schema';
import { loginApi } from '../api/users';
import useAuth from '../hooks/auth';
import colors from '../styles/colors'; // Importa los nuevos colores

function LoginForm(props) {
    const { changeForm } = props;
    const { login } = useAuth();
    const theme = useTheme();

    function initialValues() {
        return {
            identifier: '',
            password: ''
        };
    }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(LoginSchema),
        onSubmit: async (values) => {
            console.log(values);
            try {
                const res = await loginApi(values);
                login(res);
            } catch (errors) {
                console.log(errors);
            }
        }
    });

    return (
        <View style={[styles.container, { backgroundColor: '#f5f5f5' }]}>
            <Text style={styles.title}>Login</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    label="Email"
                    mode="outlined"
                    value={formik.values.identifier}
                    onChangeText={(email) => formik.setFieldValue('identifier', email)}
                    onBlur={() => formik.setFieldTouched('identifier')}
                    error={formik.touched.identifier && !!formik.errors.identifier}
                    style={styles.input}
                    theme={{ colors: { primary: colors.primary } }} // Aplica el color primario
                />
                <HelperText type="error" visible={formik.touched.identifier && !!formik.errors.identifier}>
                    {formik.errors.identifier}
                </HelperText>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    label='Password'
                    mode='outlined'
                    secureTextEntry={true}
                    value={formik.values.password}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                    onBlur={() => formik.setFieldTouched('password')}
                    error={formik.touched.password && !!formik.errors.password}
                    style={styles.input}
                    theme={{ colors: { primary: colors.primary } }} // Aplica el color primario
                />
                <HelperText type='error' visible={formik.touched.password && !!formik.errors.password}>
                    {formik.errors.password}
                </HelperText>
            </View>

            <Button
                mode='contained'
                onPress={formik.handleSubmit}
                style={[styles.button, { backgroundColor: colors.primary }]} // Aplica el color primario
                labelStyle={styles.buttonText}
            >
                Login
            </Button>

            <Button
                mode='text'
                onPress={changeForm}
                style={styles.changeFormButton}
                labelStyle={[styles.changeFormButtonText, { color: colors.primary }]} // Aplica el color primario
            >
                Register
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
        color: colors.dark,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        backgroundColor: '#fff',
    },
    button: {
        marginTop: 20,
        padding: 10,
    },
    buttonText: {
        fontSize: 16,
        color: colors.fontLight,
    },
    changeFormButton: {
        marginTop: 10,
    },
    changeFormButtonText: {
        fontSize: 14,
    },
});

export default LoginForm;
