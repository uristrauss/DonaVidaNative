import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, Image, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from './Logo.png';

const Home = () => {
  const navigation = useNavigation();

  const navigateTo = (screen) => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logo} alt="School Logo" style={styles.logo} />
      </View>

      <View style={styles.gridContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  square: {
    width: '40%',
    height: 200, // Adjust the height as needed
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    overflow: 'hidden',
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
