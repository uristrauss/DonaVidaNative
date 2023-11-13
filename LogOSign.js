import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LogOSign = () => {
  const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToSignUp = () => {
    navigation.navigate('RegistroUsuario');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <Text style={styles.buttonText}>Iniciá Sesión</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>O</Text>
      <TouchableOpacity style={[styles.button, styles.signUpButton]} onPress={goToSignUp}>
        <Text style={styles.buttonText}>Registrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#FF3B30',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  signUpButton: {
    backgroundColor: '#FF453A', 
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    color: 'black', 
    fontSize: 16,
    marginBottom: 20,
  },
});

export default LogOSign;
