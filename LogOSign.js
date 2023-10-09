import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
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
      <Button title="Go to Login" onPress={goToLogin} />
      <br></br>
      <Button title="Sign Up" onPress={goToSignUp}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LogOSign;