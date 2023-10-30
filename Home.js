import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const goToBeneficiarios = () => {
    navigation.navigate('Tabla'); 
  };

  
  const goToRegistroBeneficiarios = () => {
    navigation.navigate('RegistroBeneficiario');
  };
  

  return (
    <View>
    <View style={styles.container}>
      <Button title="BENEFICIARIOS" onPress={goToBeneficiarios} />
      <Text></Text>
    </View>

    <View style={styles.container}>
      <Button title="REGISTRO BENEFICIARIOS" onPress={goToRegistroBeneficiarios} />
      <Text></Text>
    </View>

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

export default Home;