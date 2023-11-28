import AuthInputField from '@views/AuthInputField';
import { Formik } from 'formik';
import { FC, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Button } from 'react-native';
import * as yup from 'yup';

const signupSchema = yup.object({
    name: yup
        .string()
        .trim('Missing name').
        min(3, 'Invalid name')
        .required('Name is required'),
    email: yup
        .string()
        .trim('Missing email')
        .email('Invalid name')
        .required('Email is required'),
    password: yup
        .string()
        .trim('Missing password')
        .min(8, 'Too short password')
        // .matches(/^(?=.*[a-zA-Z]) (?=.*\d)   /, 'too simple password')
        .required('Password is required'),
});

interface Props { }

const initialValues = {
    name: '',
    email: '',
    password: '',
}

const SignUp: FC<Props> = props => {
    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
    })

    return (
        <SafeAreaView>
            <Formik onSubmit={(values) => {
                console.log(values);
            }} initialValues={initialValues}
                validationSchema={signupSchema}>
                {({ handleSubmit, handleChange, values, errors }) => {
                    return (
                        <View>
                            <AuthInputField
                                placeholder="Jan Nowak"
                                label="Name:"
                                onChange={handleChange('name')}
                                value={values.name}
                                errorMessage={errors.name}
                            />
                            <AuthInputField
                                placeholder="name@email.com"
                                label="Email:"
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChange={handleChange('email')}
                                value={values.email}
                                errorMessage={errors.email}
                            />
                            <AuthInputField
                                placeholder="********"
                                label="Password:"
                                autoCapitalize='none'
                                secureTextEntry
                                onChange={handleChange('password')}
                                value={values.password}
                                errorMessage={errors.password}
                            />
                            <Button onPress={() => handleSubmit()} title='Sign up' />
                        </View>
                    );
                }}
            </Formik>
        </SafeAreaView>
    );
}

export default SignUp;
