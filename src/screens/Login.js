import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, HelperText, TextInput } from 'react-native-paper';
import { useFormik } from 'formik';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import useAuth from '../hooks/auth'



export default function Login(props){
    const { changeForm } = props;
    const { login } = useAuth();
    const navigation = useNavigation();

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(LoginSchema()),
        onSubmit: async (values) => {
          try {
            const response = await loginApi(values);
            login(response);
            navigation.navigate('Home');
          } catch (error) {
            console.log('Algo anda mal', error);
          }
        },
      });

      function LoginSchema() {
        return {
          identifier: Yup.string().email('Correo no válido').required('Se requiere un correo'),
          password: Yup.string().required('Se requiere una contraseña'),
        };
      }
    
      function initialValues() {
        return {
          identifier: '',
          password: '',
        };
      }


      return( <View>
        <Text style = {formStyles.formTitle}>
          Iniciar Sesion
        </Text>
        
        <View>
          <TextInput 
            label ='Correo electronico' 
            mode='outlined'
            onChangeText={(text) => formik.setFieldValue('identifier', text)}
            onBlur={() => formik.setFieldTouched('identifier')}
            error = {formik.errors.identifier && formik.touched.identifier}
            />
  
          <HelperText type='error' visible={formik.touched.identifier}>
            {formik.errors.identifier}
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
  
          <Button
            mode='elevated'
            style = {formStyles.btnRegister}
            labelStyle = {formStyles.btnTextLabel}
      onPress={formik.handleSubmit}
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
      </View>)
}
const styles = StyleSheet.create({})