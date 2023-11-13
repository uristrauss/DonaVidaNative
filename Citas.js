import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

const Citas = ({ route }) => {
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
      })
      .catch((error) => {
        console.error('Error creando la donación:', error);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
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
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
  },
});

export default Citas;
