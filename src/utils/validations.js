import * as Yup from 'yup';


export const SignUpSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required.'),
    password: Yup.string().min(8, 'Password must be at least 8 characters.').required('Password is Required.')

})