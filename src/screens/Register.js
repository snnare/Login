import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, HelperText, TextInput } from 'react-native-paper'
import { useFormik } from 'formik'
import * as Yup from 'yup'

import {registerApi} from '../api/users'
import {formStyles} from '../styles/index'

export default function Register(props) {

    const {changeForm} = props
  
    const formik = useFormik({
      initialValues: initialValues(),
      validationSchema: Yup.object(RegistrationSchema()),
      onSubmit: async (values) => {
        console.log('Formulario enviado')
        console.log(values)
        try {
          const result = await registerApi(values);
          console.log('Usuario registrado', result);
          changeForm();
        } catch (error) {
          console.log('Algo anda mal', error);
        }
      }
    })
  
    function RegistrationSchema(){
      return{
        username: Yup.string().
          required('Se requiere un nombre').
          min(2, 'El nombre es muy corto').
          max(50, 'El nombre es muy largo'),
        email: Yup.string().
          email('Correo no valido').
          required('Se requiere un correo'),
        password: Yup.string().
          required('Se requiere una contraseña'),
        repeatPassword: Yup.string().
          required('Se requiere confirmar la contraseña').
          oneOf([Yup.ref('password')], 'Las contraseñas no coinciden')
      }
    }
  
    function initialValues() {
      return {
        username: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    }
  
    return (
      <View>
        <Text style = {formStyles.formTitle}>
          Formulario de registro
        </Text>
  
        <View>
          <TextInput 
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
            Registrarse
          </Button>
          <Button
            mode='elevated'
            style = {formStyles.btnText}
            labelStyle = {formStyles.btnTextLabel}
            onPress={changeForm}
            >
            Iniciar sesion
          </Button>
      </View>
    )
  }
  
  const styles = StyleSheet.create({})