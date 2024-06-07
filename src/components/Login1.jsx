import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import LoginSchema from '../validations/login.schema'
import formStyles from '../styles/form'


const Login1 = (props) => {

    const { changeForm } = props

    function initialValues() {
        return {
            email: '',
            password: ''
        }
    }


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(LoginSchema()),
        onSubmit: (values) => {
            console.log('Formulario enviado')
            console.log(values)
        }
    })



    return (
        <View>
      <Text style = {formStyles.formTitle}>
        Iniciar Sesión
      </Text>
      <View>
        <TextInput 
          label= 'Correo electronico'
          mode='outlined'
          onChangeText={(text) => formik.setFieldValue('email', text)}
          onBlur={() => formik.setFieldTouched('email')}
          error = {formik.errors.email && formik.touched.email}
          />

          <HelperText type='error' visible={formik.errors.email}>
            {formik.errors.email}
          </HelperText>
      </View>

      <View>
        <TextInput
          label = 'Contraseña'
          mode='outlined'
          secureTextEntry = {true}
          onChangeText={(text) => formik.setFieldValue('password', text)}
          onBlur={() => formik.setFieldTouched('password')}
          error = {formik.errors.password && formik.touched.password}
          />

          <HelperText type='error' visible={formik.errors.password}>
            {formik.errors.password}
          </HelperText>
      </View>
      <Button
          mode='elevated'
          style = {formStyles.btnRegister}
          labelStyle = {formStyles.btnTextLabel}
          onPress={() => console.log('Iniciar sesion')}
          >
          Iniciar sesion
        </Button>
        <Button
          mode='elevated'
          style = {formStyles.btnText}
          labelStyle = {formStyles.btnTextLabel}
          onPress={changeForm}
          >
          Registrarse
        </Button>
        <Button
          mode='text'
          onPress={() => console.log('Contraseña olvidada')}
          >
          ¿Olvidaste la contraseña?
        </Button>
    </View>
    )
}

export default Login1

const styles = StyleSheet.create({})