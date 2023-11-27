import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import axios from 'axios';
import logo from './Logo.png';

const Citas = ({ route, navigation }) => {
  const [valor, setValor] = useState({
    FkDonante: route.params.donanteId,
    FkCentro: route.params.fkCentro,
    FkBeneficiario: route.params.beneficiarioId,
    FechaDonacion: '',
    YaDono: false,
  });

  const [beneficiarioData, setBeneficiarioData] = useState(null);
  const [centroData, setCentroData] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/beneficiario/${valor.FkBeneficiario}`)
      .then((response) => {
        setBeneficiarioData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching Beneficiario data:', error);
      });

      axios.get(`http://localhost:5000/centro/${valor.FkCentro}`)
      .then((response) => {
        console.log('CentroDonacion Data:', response.data);
        setCentroData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching CentroDonacion data:', error);
      });
    
  }, [valor.FkBeneficiario, valor.FkCentro]);

  const handleInputChange = (name, value) => {
    setValor({ ...valor, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post('http://localhost:5000/donacion', valor)
      .then((response) => {
        console.log('Donacion creada:', response.data);
        setValor({
          FkDonante: '',
          FkCentro: '',
          FkBeneficiario: '',
          FechaDonacion: '',
          YaDono: false,
        });
        navigation.navigate('Home');
      })
      .catch((error) => {
        console.error('Error creando la donación:', error);
        navigation.navigate('Home');
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.cardTitle}>Sacar turno</Text>

      <View style={styles.logoContainer}>
        <Image source={logo} alt="School Logo" style={styles.logo} />
      </View>

      <View style={styles.card}>

        {beneficiarioData && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Beneficiario: {beneficiarioData.Nombre} {beneficiarioData.Apellido}</Text>
          </View>
        )}

        {centroData && (
          <View style={styles.dataContainer}>
            <Text style={styles.dataText}>Centro Donacion: {centroData.Nombre}</Text>
          </View>
        )}

        <Text style={styles.title}>FechaDonacion</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter FechaDonacion"
          value={valor.FechaDonacion}
          onChangeText={(text) => handleInputChange('FechaDonacion', text)}
        />

        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>SUBMIT</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    padding: 16,
    width: '100%',
  },
  cardTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
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
  dataContainer: {
    marginBottom: 20,
  },
  dataText: {
    fontSize: 16,
    color: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: 'black',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'black',
  },
  button: {
    backgroundColor: '#ff89a2',
    padding: 12,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  logoContainer: {
    marginBottom: 40,
  },
});

export default Citas;
