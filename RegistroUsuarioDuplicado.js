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

      <Button title="Crear" onPress={handleSubmit} />
    </ScrollView>
  );

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
