// Tabla.js
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tabla = ({ navigate }) => {
  const navigation = useNavigation();
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/beneficiario/')
      .then((response) => response.json())
      .then((beneficiariojson) => {
        console.log('beneficiario', beneficiariojson);
        setBeneficiarios(beneficiariojson);
        setIsLoading(false);
      });
  }, []);

  const handleDetallePress = (beneficiarioId) => {
    navigation.navigate('DetalleBeneficiario', { beneficiarioId });
  };

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Beneficiarios</Text>
      </View>
      {!isLoading &&
        beneficiarios.map((beneficiario) => (
          <View key={beneficiario.Id} style={styles.cardContainer}>
            <Image
              source={{ uri: beneficiario.Imagen }}
              style={styles.beneficiaryImage}
            />
            <View style={styles.beneficiaryInfoContainer}>
              <Text style={styles.beneficiaryName}>
                {beneficiario.Nombre} {beneficiario.Apellido}
              </Text>
              <Text style={styles.beneficiaryDetails}>
                <Text style={{ fontWeight: 'bold' }}>Donaciones Necesarias:</Text>{' '}
                {beneficiario.CantDonacionesNecesitadas}
              </Text>
              <Text style={styles.beneficiaryDetails}>
                <Text style={{ fontWeight: 'bold' }}>Compatibilidad:</Text> {beneficiario.Compatibilidad}
              </Text>
              <Text style={styles.beneficiaryDetails}>
                <Text style={{ fontWeight: 'bold' }}>fkCentro:</Text> {beneficiario.fkCentro}
              </Text>
      
              <TouchableOpacity style={styles.button} onPress={() => handleDetallePress(beneficiario.Id)}>
                <Text style={styles.buttonText}>Detalle</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
    </View>
  );
  
  
  
};

const styles = StyleSheet.create({
  titleContainer: {
    width: '100%', // Set to 100% to take the full width
    alignItems: 'center', // Center the title
    marginBottom: 16,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'Times New Roman',
    backgroundColor: '#ff89a2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  button: {
    backgroundColor: '#ff89a2',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardContainer: {
    width: '45%', // Adjust the width as needed
    margin: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 2,
    backgroundColor: '#fff',
  },
  beneficiaryImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    marginBottom: 10,
  },
  beneficiaryInfoContainer: {
    padding: 15,
  },
  beneficiaryName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  beneficiaryDetails: {
    marginBottom: 5,
  },
});

export default Tabla;
