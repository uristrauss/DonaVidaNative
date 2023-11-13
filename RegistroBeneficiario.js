import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Picker, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
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

  const [centros, setCentros] = useState([]);
  const [centroSeleccionado, setCentroSeleccionado] = useState('');

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const fetchCentros = () => {
    axios.get('http://localhost:5000/centro')
      .then(response => {
        setCentros(response.data);
      })
      .catch(error => {
        console.error('Error fetching centers:', error);
      });
  };

  useEffect(() => {
    fetchCentros(); 
  }, []);

  const handleSubmit = () => {
    axios
      .post('http://localhost:5000/beneficiario', formValues)
      .then((response) => {
        console.log('Beneficiario created:', response.data);
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
  <Picker
  style={styles.input}
  selectedValue={formValues.fkCentro}
  onValueChange={(itemValue) => handleInputChange('fkCentro', itemValue)}
>
  <Picker.Item label="Elegí un Centro" value="" />
  {centros.map((centro) => (
    <Picker.Item
      key={centro.IdCentroDonacion}
      label={centro.Nombre}
      value={centro.IdCentroDonacion}
    />
  ))}
</Picker>



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

export default RegistroBeneficiario;
