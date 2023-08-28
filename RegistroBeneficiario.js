import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const RegistroBeneficiario = () => {
  const [formValues, setFormValues] = useState({
    Nombre: '',
    Apellido: '',
    CantDonacionesNecesarias: '',
    Compatibilidad: '',
    Historia: '',
    NecesitaSangre: '',
    Grupo: '',
    Factor: '',
    fkCentro: '',
    Imagen: ''
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = () => {
    axios
      .post('http://localhost:5000/beneficiario', formValues)
      .then((response) => {
        console.log('Beneficiario created:', response.data);
        // Reset form values
        setFormValues({
          Nombre: '',
          Apellido: '',
          CantDonacionesNecesarias: '',
          Compatibilidad: '',
          Historia: '',
          NecesitaSangre: '',
          Grupo: '',
          Factor: '',
          fkCentro: '',
          Imagen: ''
        });
      })
      .catch((error) => {
        console.error('Error creating beneficiario:', error);
        // Handle error case
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Crear Beneficiario</Text>
      <View style={styles.formGroup}>
        <Text>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Nombre}
          onChangeText={(value) => handleInputChange('Nombre', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Apellido:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Apellido}
          onChangeText={(value) => handleInputChange('Apellido', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Cantidad de Donaciones Necesarias:</Text>
        <TextInput
          style={styles.input}
          value={formValues.CantDonacionesNecesarias}
          onChangeText={(value) => handleInputChange('CantDonacionesNecesarias', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Compatibilidad:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Compatibilidad}
          onChangeText={(value) => handleInputChange('Compatibilidad', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Historia:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Historia}
          onChangeText={(value) => handleInputChange('Historia', value)}
          multiline
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Necesita Sangre:</Text>
        <TextInput
          style={styles.input}
          value={formValues.NecesitaSangre}
          onChangeText={(value) => handleInputChange('NecesitaSangre', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Grupo:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Grupo}
          onChangeText={(value) => handleInputChange('Grupo', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Factor:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Factor}
          onChangeText={(value) => handleInputChange('Factor', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Centro:</Text>
        <TextInput
          style={styles.input}
          value={formValues.fkCentro}
          onChangeText={(value) => handleInputChange('fkCentro', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Imagen:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Imagen}
          onChangeText={(value) => handleInputChange('Imagen', value)}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Crear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: 500,
    margin: 'auto',
    padding: 20,
    backgroundColor: '#990000', // Darker red background color
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    color: '#fff',
  },
  heading: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 24,
    color: '#fff',
 
},
formGroup: {
  marginBottom: 25,
},
input: {
  width: '100%',
  padding: 12,
  backgroundColor: '#d66a6a', // Light red input background color
  color: '#fff',
  borderRadius: 5,
},
button: {
  width: '100%',
  padding: 12,
  backgroundColor: '#cc0000', // Red button background color
  borderRadius: 5,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: 10,
},
buttonText: {
  color: '#fff',
  fontWeight: 'bold',
  letterSpacing: 1,
},
});

export default RegistroBeneficiario;
