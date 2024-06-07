
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Formik, useFormik } from "formik";
import { Button, HelperText, TextInput } from "react-native-paper";
import * as Yup from 'yup'

import LoginSchema from '../validations/login.schema'
import loginApi from '../api/users'
import useAuth from '../hooks/auth'

import { formStyles } from "../styles";


function LoginForm(props) {
    const { changeForm } = props

    const { login } = useAuth();


    function initialValues() {
        return {
            identifier: '',
            password: ''
        }
    }


    
  function LoginSchema(){
    return{
      identifier: Yup.string().
        email('Correo no valido').
        required('Se requiere un correo'),
      password: Yup.string().
        required('Se requiere una contraseña')
    }
  }

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(LoginSchema()),
        onSubmit: async (values) => {
            console.log(values)

            try {
                const res = await loginApi(values);
                login(res);
            } catch (errors) {
                console.log(errors)
            }
        }
    });



    return (
        <View>
            <Text>
                Login
            </Text>

            <View>
                <TextInput
                    label="example@example.com"
                    mode="outlined"
                    onChangeText={(email) => formik.setFieldValue('identifier', email)}
                    onBlur={() => formik.setFieldTouched('identifier')}
                    error={formik.identifier && formik.touched.identifier}
                />
                <HelperText type="error" visible={formik.touched.identifier}>
                    {formik.errors.identifier}
                </HelperText>
            </View>

            <View>
                <TextInput
                    label='Password'
                    mode='outlined'
                    secureTextEntry={true}
                    onChangeText={(text) => formik.setFieldValue('password', text)}
                    onBlur={() => formik.setFieldTouched('password')}
                    error={formik.errors.password && formik.touched.password}
                />

                <HelperText type='error' visible={formik.touched.password}>
                    {formik.errors.password}
                </HelperText>
            </View>
            <Button
                mode='elevated'
                style={formStyles.btnRegister}
                labelStyle={formStyles.btnTextLabel}
                onPress={formik.handleSubmit}
            >
                Login
            </Button>
            <Button
                mode='elevated'
                style={formStyles.btnText}
                labelStyle={formStyles.btnTextLabel}
                onPress={changeForm}
            >
                Register 
            </Button>

        </View>
    )
}




export default LoginForm;

