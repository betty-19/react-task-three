import * as Yup from 'yup';

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required.'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters.')
    .required('Password is required.'),
});

export const PersonalInfoSchema = Yup.object().shape({
  fullname: Yup.string()
    .required('Full name is required')
    .min(2, 'Too short'),
  gender: Yup.string()
    .oneOf(['male', 'female'], 'Select gender')
    .required('Gender is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone must be numeric'),
  birthday: Yup.date().nullable(),
});

export const AddressSchema = Yup.object().shape({
  address: Yup.string().required('Street address is required'),
  appartment: Yup.string(),
  city: Yup.string().required('City is required'),
  state: Yup.string().required('State is required'),
  zipCode: Yup.string()
    .matches(/^\d+$/, 'Zip code must be numeric')
    .required('Zip code is required'),
});

