import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';
import { PaperProvider } from 'react-native-paper';


import Auth from './src/screens/Auth'
import {AuthContext} from './src/context/AuthContext'
import Navigation from './src/Navigation';
import { setTokenApi, getTokenApi, removeTokenApi } from './src/api/token'


export default function App() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    (async () => {
      const token = await getTokenApi();
      if(token) {
        console.log('Estoy logeado');
        console.log(token);
      }else{
        setAuth(null);
      }
    })();
  }, []);

  const login = user => {
    console.log('LOGIN: ');
    console.log(user);
  
    if (user && user.jwt) {
      setTokenApi(user.jwt);
      setAuth({
        token: user.jwt,
        idUser: user.user._id,
      });
    } else {
      console.error('Error al iniciar sesión: El objeto de usuario o el token es nulo.');
      // Puedes manejar el error de alguna manera, por ejemplo, mostrar un mensaje al usuario.
    }
  }

  const logout = () => {
    if (auth) {
        console.log('LOGOUT');
        console.log(auth);
        removeTokenApi(); // Eliminar el token al cerrar sesión
        setAuth(null);
    }
}

  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
    }),
    [auth]
  );

  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
        <PaperProvider>
        {
          auth ? <Navigation/> : <Auth/>
        }
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2f9',
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center',
    justifyContent: 'center', 
  },
});