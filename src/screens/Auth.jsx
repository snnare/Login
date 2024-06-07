import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';

import {layoutStyle} from '../styles/index'
import Register from '../components/Register'
import LoginForm from '../components/LoginForm';
import logo from '../../assets/michi.jpeg'


function Auth() {
    const [showLogin, setshowLogin] = useState(true)
    const changeForm = () => setshowLogin(!showLogin)


    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo} source={logo} />
            {
                showLogin ?
                    <LoginForm
                        changeForm={changeForm}
                    />
                    :
                    <Register
                        changeForm={changeForm}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: '100%',
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    as: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default Auth;