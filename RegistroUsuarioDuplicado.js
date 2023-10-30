import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const RegistroUsuarioDuplicado = ({navigation}) => {
  const [formValues, setFormValues] = useState({
    Nombre: '',
    Apellido: '',
    FechaDeNacimiento: null,
    DNI: '',
    Email: '',
    Contraseña: '',
    Peso: '',
    BuenaSalud: '',
    Embarazo: '',
    Sexo: '',
    FechaDeDonacion: null,
    Medicamentos: '',
    HepatitisBC: '',
    Parto: null,
    Operacion: null,
    Antitetanica: null,
    UltimoTatuaje: null,
    UltimoHierro: null,
    LactanciaMaterna: '',
    FinMononucleosis: null,
    Antipaludicos: null,
    ITS: '',
    TipoSangre: '',
  });

  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateField, setSelectedDateField] = useState(null);

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormValues({ ...formValues, [name]: date });
    setShowDatePicker(false);
    setSelectedDateField(null);
  };


  //NO SE MANDA NADA
  const handleSubmit = () => {
    /*
    axios
      .post('http://localhost:5000/donante', formValues)
      .then((response) => {
        console.log('Usuario creado:', response.data);
      })
      .catch((error) => {
        console.error('Error creando usuario:', error);
      });
      */

      navigation.navigate('Home');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Crear Usuario</Text>

      <Text>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Nombre}
        onChangeText={(text) => handleInputChange('Nombre', text)}
      />

      <Text>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Apellido}
        onChangeText={(text) => handleInputChange('Apellido', text)}
      />

      {dateInput('Fecha de Nacimiento')}

      <Text>DNI:</Text>
      <TextInput
        style={styles.input}
        value={formValues.DNI}
        onChangeText={(text) => handleInputChange('DNI', text)}
      />
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Email}
        onChangeText={(text) => handleInputChange('Email', text)}
      />
      <Text>Contraseña:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Contraseña}
        onChangeText={(text) => handleInputChange('Contraseña', text)}
      />
      <Text>Peso:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Peso}
        onChangeText={(text) => handleInputChange('Peso', text)}
      />
      <Text>Buena Salud:</Text>
      <TextInput
        style={styles.input}
        value={formValues.BuenaSalud}
        onChangeText={(text) => handleInputChange('BuenaSalud', text)}
      />
      <Text>Embarazo:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Embarazo}
        onChangeText={(text) => handleInputChange('Embarazo', text)}
      />
      <Text>Sexo:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Sexo}
        onChangeText={(text) => handleInputChange('Sexo', text)}
      />

      {dateInput('FechaDeDonacion')}

      <Text>Medicamentos:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Medicamentos}
        onChangeText={(text) => handleInputChange('Medicamentos', text)}
      />
      <Text>Hepatitis B/C:</Text>
      <TextInput
        style={styles.input}
        value={formValues.HepatitisBC}
        onChangeText={(text) => handleInputChange('HepatitisBC', text)}
      />


      {dateInput('Parto')}
      {dateInput('Operacion')}
      {dateInput('Antitetanica')}
      {dateInput('UltimoTatuaje')}
      {dateInput('UltimoHierro')}

      <Text>Lactancia Materna:</Text>
      <TextInput
        style={styles.input}
        value={formValues.LactanciaMaterna}
        onChangeText={(text) => handleInputChange('LactanciaMaterna', text)}
      />


      {dateInput('FinMononucleosis')}
      {dateInput('Antipaludicos')}

     
      
      
      <Text>ITS:</Text>
      <TextInput
        style={styles.input}
        value={formValues.ITS}
        onChangeText={(text) => handleInputChange('ITS', text)}
      />
      <Text>Tipo de Sangre:</Text>
      <TextInput
        style={styles.input}
        value={formValues.TipoSangre}
        onChangeText={(text) => handleInputChange('TipoSangre', text)}
      />

      <Button title="Crear" onPress={handleSubmit} />
    </ScrollView>
  );

  function dateInput(label) {
    return (
      <View style={styles.formGroup}>
        <Text>{label}:</Text>
        <Button title="Select Date" onPress={() => showDatePickerForField(label)} />
        {showDatePicker && selectedDateField === label && (
          <DateTimePicker
            testID="dateTimePicker"
            value={formValues[label] || new Date()}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={(event, selectedDate) => {
              handleDateChange(label, selectedDate);
            }}
          />
        )}
      </View>
    );
  }

  function showDatePickerForField(fieldName) {
    setSelectedDateField(fieldName);
    setShowDatePicker(true);
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  formGroup: {
    marginBottom: 16,
  },
});

export default RegistroUsuarioDuplicado;
