import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateTo('Tabla')} style={styles.square}>
        <Image source={require('./assets/beneficiario.jpg')} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateTo('RegistroBeneficiario')} style={styles.square}>
        <Image source={require('./assets/registro.jpg')} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigateTo('Difusion')} style={styles.square}>
        <Image source={require('./assets/difusion.jpg')} style={styles.image} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => Linking.openURL('https://www.google.com/maps/search/hemocentros/@-34.6275424,-58.4824827,13z?entry=ttu')} style={styles.square}>
        <Image source={require('./assets/ubicaciones.jpg')} style={styles.image} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  square: {
    width: '40%', // Adjust the width as needed
    height: '40%',
    aspectRatio: 1, // Maintain aspect ratio for square
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: '10px'
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  text: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Home;
