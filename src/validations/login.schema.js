function LoginSchema(){
    return{
      identifier: Yup.string().
        email('Email invalido!').
        required('Se requiere un correo'),
      password: Yup.string().
        required('Se requiere una contraseña')
    }
  }


  export default LoginSchema;