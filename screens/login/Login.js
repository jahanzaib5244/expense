import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image,ScrollView } from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Feather from 'react-native-vector-icons/Feather';
import { Formik } from 'formik';
import * as Yup from 'yup'



import {LoginStyle} from './LoginStyle'
import UseLogin from './UseLogin';
import AppButton from '../../src/component/AppButton';
import LoadingButton from '../../src/component/LoadingButton';


const validationschema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(3).label('Password')
});
export default function Login({ navigation }) {

    const [isinvalid,loading,doSigninUser,setsecureText,secureText] = UseLogin()
    return (
        <View style={LoginStyle.root}>
            
                <View style={LoginStyle.logo_container}>
                    {/* <Image style={{ width: 75, height: 75, opacity: 0.9, marginBottom: 8 }} source={require('../../assets/cgit.png')} /> */}
                    <Text style={{ color: 'white', fontSize: 28, letterSpacing: 2 }}>CGIT</Text>
                </View>
                <View
                    animation="fadeInUpBig"
                    style={LoginStyle.input_container}>
                    <Formik
                        initialValues={{ email: '', password: '' }}
                        validationSchema={validationschema}
                        onSubmit={values => doSigninUser(values)}>

                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                            <>
                                <Text style={LoginStyle.input_lable}>Email</Text>
                                <View style={LoginStyle.action}>
                                    <FontAwesome
                                        name="user-o"
                                        color="gray"
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Your Email Address..."
                                        placeholderTextColor="#666666"
                                        style={LoginStyle.textInput}
                                        autoCapitalize="none"
                                        onBlur={() => setFieldTouched("email")}
                                        onChangeText={handleChange("email")}
                                    />
                                    <View
                                        animation="bounceIn"
                                    >
                                        <Feather
                                            name="check-circle"
                                            color="green"
                                            size={20}
                                        />
                                    </View>
                                </View>
                                {touched.email && <Text style={{ color: '#FF6666' }}>{errors.email}</Text>}
                                <Text style={LoginStyle.input_lable}>Password</Text>
                                <View style={LoginStyle.action}>
                                    <Feather
                                        name="lock"
                                        color='gray'
                                        size={20}
                                    />
                                    <TextInput
                                        placeholder="Your Password"
                                        placeholderTextColor="#666666"
                                        secureTextEntry={secureText}
                                        style={LoginStyle.textInput}
                                        autoCapitalize="none"
                                        onChangeText={handleChange("password")}

                                    />

                                    <TouchableOpacity
                                        onPress={() => setsecureText(!secureText)}
                                    >
                                        {secureText ?
                                            <Feather
                                                name="eye-off"
                                                color="grey"
                                                size={20}
                                            />
                                            :
                                            <Feather
                                                name="eye"
                                                color="grey"
                                                size={20}
                                            />
                                        }
                                    </TouchableOpacity>
                                </View>
                                
                                {touched.password && <Text style={{ color: '#FF6666' }}>{errors.password}</Text>}
                                {isinvalid && <Text style={{ color: '#FF6666' }}>{isinvalid}</Text>}

                                <TouchableOpacity onPress={() => navigation.navigate('Forgetpassword')}>
                                    <Text style={{ color: '#494446', marginTop: 15 }}>Forgot password?</Text>
                                </TouchableOpacity>
                                <View style={LoginStyle.button}>
                                    {loading ?
                                        <LoadingButton />
                                        :
                                        <AppButton onPress={handleSubmit} name='LOG IN' />
                                    }


                                </View>

                            </>
                        )}

                    </Formik>



                </View>
           
        </View>
    )
}
