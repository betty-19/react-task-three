import * as Yup from 'yup'

export const SignUpSchema = Yup.object().shape({
    email:Yup.string().email('Invalid email').required('email is required'),
    password: Yup.string().required('password is required'),
})