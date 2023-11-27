import AuthInputField from '@views/AuthInputField';
import { Formik } from 'formik';
import { FC, useState } from 'react';
import { View, Text, TextInput, SafeAreaView, Button } from 'react-native';

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
            }} initialValues={initialValues}>
                {({ handleSubmit, handleChange, values }) => {
                    return (
                        <View>
                            <AuthInputField
                                placeholder="Jan Nowak"
                                label="Name:"
                                onChange={handleChange('name')}
                                value={values.name}
                            />
                            <AuthInputField
                                placeholder="name@email.com"
                                label="Email:"
                                keyboardType='email-address'
                                autoCapitalize='none'
                                onChange={handleChange('email')}
                                value={values.email}
                            />
                            <AuthInputField
                                placeholder="********"
                                label="Password:"
                                autoCapitalize='none'
                                secureTextEntry
                                onChange={handleChange('password')}
                                value={values.password}
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
