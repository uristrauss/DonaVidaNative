import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Tabla = ({navigate}) => {
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
      {!isLoading &&
        beneficiarios.map((beneficiario) => (
          <View key={beneficiario.Id} style={{ width: '100%', padding: 10 }}>
            <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
              <Image
                source={{ uri: beneficiario.Imagen }}
                style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
              />
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  {beneficiario.Nombre} {beneficiario.Apellido}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>CantDonacionesNecesitadas:</Text>{' '}
                  {beneficiario.CantDonacionesNecesitadas}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Compatibilidad:</Text> {beneficiario.Compatibilidad}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>fkCentro:</Text> {beneficiario.fkCentro}
                </Text>

                <TouchableOpacity style={styles.button} onPress={() => handleDetallePress(beneficiario.Id)}>
                  <Text style={styles.buttonText}>Detalle</Text>
                </TouchableOpacity>
                
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: 12,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  button: {
    width: '100%',
    padding: 12,
    backgroundColor: '#cc0000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Tabla;
