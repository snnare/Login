
import * as Yup from 'yup'


function RegistrationSchema() {
    return {
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

export default RegistrationSchema;