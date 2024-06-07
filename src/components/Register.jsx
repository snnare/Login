import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import RegistrationSchema from '../validations/register.schema'
import { registerApi } from '../api/users'


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


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(RegistrationSchema),
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

export default Register

const styles = StyleSheet.create({})