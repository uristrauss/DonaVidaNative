import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const RegistroUsuarioDuplicado = ({navigation}) => {
  const [formValues, setFormValues] = useState({
    Nombre: '',
    Apellido: '',
    FechaDeNacimiento: '',
    DNI: '',
    Email: '',
    Contraseña: '',
    Peso: '',
    BuenaSalud: '',
    Embarazo: '',
    Sexo: '',
    FechaDeDonacion: '',
    Medicamentos: '',
    HepatitisBC: '',
    Parto: '',
    Operacion: '',
    Antitetanica: '',
    UltimoTatuaje: '',
    UltimoHierro: '',
    LactanciaMaterna: '',
    FinMononucleosis: '',
    Antipaludicos: '',
    ITS: '',
    TipoSangre: '',
  });

  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormValues({ ...formValues, [name]: date });
    setShowDatePicker(false);
    setSelectedDateField(null);
  };


  const handleSubmit = () => {
    
    axios
      .post('http://localhost:5000/donante', formValues)
      .then((response) => {
        console.log('Usuario creado:', response.data);
      })
      .catch((error) => {
        console.error('Error creando usuario:', error);
      });
      

      navigation.navigate('Home');
  };


  const renderInputsForStep = (step) => {
    switch (step) {
      case 1:
        return (
          <View>
            

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

{/*{dateInput('Fecha de Nacimiento')}*/}

<Text>Fecha De Nacimiento:</Text>
<TextInput
  style={styles.input}
  value={formValues.FechaDeNacimiento}
  onChangeText={(text) => handleInputChange('FechaDeNacimiento', text)}
/>
  

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

      <Text>Fecha De Última Donación:</Text>
      <TextInput
        style={styles.input}
        value={formValues.FechaDeDonacion}
        onChangeText={(text) => handleInputChange('FechaDeDonacion', text)}
      />
          </View>
        );
      case 2:
        return (
          <View>
            


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


      <Text>Último Parto:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Parto}
        onChangeText={(text) => handleInputChange('Parto', text)}
      />
      

      <Text>Última Operación:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Operacion}
        onChangeText={(text) => handleInputChange('Operacion', text)}
      />

      <Text>Última Antitetanica:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Antitetanica}
        onChangeText={(text) => handleInputChange('Antitetanica', text)}
      />
 

      <Text>Último Tatuaje:</Text>
      <TextInput
        style={styles.input}
        value={formValues.UltimoTatuaje}
        onChangeText={(text) => handleInputChange('UltimoTatuaje', text)}
      />


      <Text>Último Hierro:</Text>
      <TextInput
        style={styles.input}
        value={formValues.UltimoHierro}
        onChangeText={(text) => handleInputChange('UltimoHierro', text)}
      />

      <Text>Lactancia Materna:</Text>
      <TextInput
        style={styles.input}
        value={formValues.LactanciaMaterna}
        onChangeText={(text) => handleInputChange('LactanciaMaterna', text)}
      />


      <Text>Fin Mononucleosis:</Text>
      <TextInput
        style={styles.input}
        value={formValues.FinMononucleosis}
        onChangeText={(text) => handleInputChange('FinMononucleosis', text)}
      />
      
      <Text>Antipaludicos:</Text>
      <TextInput
        style={styles.input}
        value={formValues.Antipaludicos}
        onChangeText={(text) => handleInputChange('Antipaludicos', text)}
      />

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

          </View>
        );
      default:
        return null;
    }
  };

  const handleContinue = () => {
    setCurrentStep(currentStep + 1);
  };



  return (
    <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.title}>Registro Usuario {currentStep}</Text>

    {renderInputsForStep(currentStep)}

    {currentStep === 1 && (
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
      <Text style={styles.buttonText}>Continuar</Text>
    </TouchableOpacity>
    )}

    {currentStep === 2 && (
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
      <Text style={styles.buttonText}>REGISTRAR</Text>
    </TouchableOpacity>
    )}
  </ScrollView>
  );

};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginBottom: 16,
    textAlign: 'center',
    color: '#FFFFFF', // Text color
    fontFamily: 'Times New Roman', // Times New Roman font
    backgroundColor: '#ff89a2', // Pink background
    paddingVertical: 10, // Vertical padding
    paddingHorizontal: 20, // Horizontal padding
    textTransform: 'uppercase', // Convert text to uppercase
    letterSpacing: 2, // Increase letter spacing
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 3, // For Android shadow
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
});

export default RegistroUsuarioDuplicado;
