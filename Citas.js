import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const Citas = () => {
  const [valor, setValor] = useState({
    FkDonante: '',
    FkCentro: '',
    FkBeneficiario: '',
    FechaDonacion: '',
    YaDono: ''
  });

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
          YaDono: ''
        });
      })
      .catch((error) => {
        console.error('Error creando la donación:', error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="FkDonante"
        value={valor.FkDonante}
        onChangeText={(text) => handleInputChange('FkDonante', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="FkCentro"
        value={valor.FkCentro}
        onChangeText={(text) => handleInputChange('FkCentro', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="FkBeneficiario"
        value={valor.FkBeneficiario}
        onChangeText={(text) => handleInputChange('FkBeneficiario', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="FechaDonacion"
        value={valor.FechaDonacion}
        onChangeText={(text) => handleInputChange('FechaDonacion', text)}
      />
      <TextInput
        style={styles.input}
        placeholder="YaDono"
        value={valor.YaDono}
        onChangeText={(text) => handleInputChange('YaDono', text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text>Submit</Text>
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
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
});

export default Citas;
