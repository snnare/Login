import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import useAuth from '../hooks/auth';


export default function Logout({ navigation }) {
    const { logout } = useAuth();
  
    useEffect(() => {
      const handleLogout = async () => {
  
        // Realiza el logout
        logout();
  
        // Navega a la pantalla de inicio de sesión (ajusta según tu configuración)
        navigation.navigate('Login');
      };
  
      handleLogout();
    }, [logout, navigation]);
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Cerrando sesión...</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  });
  