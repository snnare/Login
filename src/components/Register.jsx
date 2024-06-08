import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Yup from 'yup'

import { Button, HelperText, TextInput } from 'react-native-paper'
import RegistrationSchema from '../validations/register.schema'
import { registerApi } from '../api/users'
import { useFormik } from 'formik'
import {formStyles} from '../styles/index'

const Register = (props) => {

    const { changeForm } = props

    function initialValues() {
        return {
            username: '',
            email: '',
            password: '',
            repeatPassword: ''
        }
    }

    // Registrado
    function RegistrationSchema() {
      return {
        username: Yup.string()
          .required('El nombre es obligatorio')
          .min(2, 'El nombre es demasiado corto')
          .max(50, 'El nombre es demasiado largo'),
        email: Yup.string()
          .email('El correo electrónico no es válido')
          .required('El correo electrónico es obligatorio'),
        password: Yup.string()
          .required('La contraseña es obligatoria'),
        repeatPassword: Yup.string()
          .required('Por favor, confirma tu contraseña')
          .oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      };
    }
    


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(RegistrationSchema()),
        onSubmit: async (values) => {
            console.log('Registro OK')
            console.log(values)
            try {
                const result = await registerApi(values);
                console.log('Usuario registrado', result);
                changeForm();
            } catch (error) {
                console.log('Ya valio mi pana:(', error);
            }
        }
    })
    return (
        <View >
        <Text style = {formStyles.formTitle}>
          Formulario de registro
        </Text>
  
        <View>
          <TextInput 
            style = {formStyles.bgTxtInput}
            label ='Nombre de usuario' 
            mode='outlined'
            onChangeText={(text) => formik.setFieldValue('username', text)}
            onBlur={() => formik.setFieldTouched('username')}
            error = {formik.errors.username && formik.touched.username}
            />
  
          <HelperText type='error' visible={formik.touched.username}>
            {formik.errors.username}
          </HelperText>
        </View>
        
        <View>
          <TextInput 
          style = {formStyles.bgTxtInput}
            label ='Correo electronico' 
            mode='outlined'
            onChangeText={(text) => formik.setFieldValue('email', text)}
            onBlur={() => formik.setFieldTouched('email')}
            error = {formik.errors.email && formik.touched.email}
            />
  
          <HelperText type='error' visible={formik.touched.email}>
            {formik.errors.email}
          </HelperText>
        </View>
  
        <View>
          <TextInput 
            style = {formStyles.bgTxtInput}
            label ='Contraseña' 
            mode='outlined'
            secureTextEntry = {true}
            onChangeText={(text) => formik.setFieldValue('password', text)}
            onBlur={() => formik.setFieldTouched('password')}
            error = {formik.errors.password && formik.touched.password}
            />
  
          <HelperText type='error' visible={formik.touched.password}>
            {formik.errors.password}
          </HelperText>
        </View>
  
        <View>
          <TextInput 
          style = {formStyles.bgTxtInput}
            label ='Repetir contraseña' 
            mode='outlined'
            secureTextEntry = {true}
            onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
            onBlur={() => formik.setFieldTouched('repeatPassword')}
            error = {formik.errors.repeatPassword && formik.touched.repeatPassword}
            />
  
          <HelperText type='error' visible={formik.touched.repeatPassword}>
            {formik.errors.repeatPassword}
          </HelperText>
        </View>
  
          <Button
            mode='elevated'
            style = {formStyles.btnRegister}
            labelStyle = {formStyles.btnTextLabel}
      onPress={formik.handleSubmit}
            >
            Register
          </Button>
          <Button
            mode='elevated'
            style = {formStyles.btnText}
            labelStyle = {formStyles.btnTextLabel}
            onPress={changeForm}
            >
            LogIn
          </Button>
      </View>
    )
}

export default Register

const styles = StyleSheet.create({})