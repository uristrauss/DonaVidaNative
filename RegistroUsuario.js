import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';

const RegistroUsuario = () => {
  const [calendarIcon, setCalendarIcon] = useState("https://images.unsplash.com/photo-1590272456521-1bbe160a18ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2llbG8lMjBuZWdyb3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80");
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

  const [fechaTest, setFechaTest] = useState( new Date())
  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleDateChange = (name, date) => {
    setFormValues({ ...formValues, [name]: date });
  };

  const handleSubmit = () => {
    axios
      .post('http://localhost:5000/donante', formValues)
      .then((response) => {
        console.log('Usuario creado:', response.data);
        // Reset form values
        setFormValues({
          ...formValues, // Don't overwrite all form values, keep them as they are
          Nombre: '',
          Apellido: '',
          FechaDeNacimiento: new Date(),
          DNI: '',
          Email: '',
          Contraseña: '',
          Peso: '',
          BuenaSalud: '',
          Embarazo: '',
          Sexo: '',
          FechaDeDonacion: new Date(),
          Medicamentos: '',
          HepatitisBC: '',
          Parto: new Date(),
          Operacion: new Date(),
          Antitetanica: new Date(),
          UltimoTatuaje: new Date(),
          UltimoHierro: new Date(),
          LactanciaMaterna: '',
          FinMononucleosis: new Date(),
          Antipaludicos: new Date(),
          ITS: '',
          TipoSangre: '',
        });
      })
      .catch((error) => {
        console.error('Error creando usuario:', error);
        // Handle error case
      });
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear Usuario</Text>
      <View style={styles.formGroup}>
        <Text>Nombre:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Nombre}
          onChangeText={(text) => handleInputChange('Nombre', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Apellido:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Apellido}
          onChangeText={(text) => handleInputChange('Apellido', text)}
        />
      </View>
      
    {/*
      <View style={styles.formGroup}>
        <Text>Fecha de Nacimiento:</Text>
        <DateTimePicker
          value={formValues.FechaDeNacimiento}
          mode={'date'}
          onChange={(value) =>
          //  handleDateChange('FechaDeNacimiento', date)
          setFechaTest(fechaTest)
          }
        />
      </View>
        */}
        

      <View style={styles.formGroup}>
        <Text>DNI:</Text>
        <TextInput
          style={styles.input}
          value={formValues.DNI}
          onChangeText={(text) => handleInputChange('DNI', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Email:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Email}
          onChangeText={(text) => handleInputChange('Email', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Contraseña:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Contraseña}
          onChangeText={(text) => handleInputChange('Contraseña', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Peso:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Peso}
          onChangeText={(text) => handleInputChange('Peso', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Buena Salud:</Text>
        <TextInput
          style={styles.input}
          value={formValues.BuenaSalud}
          onChangeText={(text) => handleInputChange('BuenaSalud', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Embarazo:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Embarazo}
          onChangeText={(text) => handleInputChange('Embarazo', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Sexo:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Sexo}
          onChangeText={(text) => handleInputChange('Sexo', text)}
        />
      </View>
      
      <View style={styles.formGroup}>
        <Text>Fecha de Donación:</Text>
        <DatePickerIOS
          date={formValues.FechaDeDonacion}
          onDateChange={(date) =>
            handleDateChange('FechaDeDonacion', date)
          }
        />
      </View>
        

      <View style={styles.formGroup}>
        <Text>Medicamentos:</Text>
        <TextInput
          style={styles.input}
          value={formValues.Medicamentos}
          onChangeText={(text) => handleInputChange('Medicamentos', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Hepatitis B/C:</Text>
        <TextInput
          style={styles.input}
          value={formValues.HepatitisBC}
          onChangeText={(text) => handleInputChange('HepatitisBC', text)}
        />
      </View>

      {/*
      <View style={styles.formGroup}>
        <Text>Parto:</Text>
        <DatePickerIOS
          date={formValues.Parto}
          onDateChange={(date) => handleDateChange('Parto', date)}
        />
      </View>
      

      <View style={styles.formGroup}>
        <Text>Operación:</Text>
        <DatePickerIOS
          date={formValues.Operacion}
          onDateChange={(date) => handleDateChange('Operacion', date)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Antitetánica:</Text>
        <DatePickerIOS
          date={formValues.Antitetanica}
          onDateChange={(date) =>
            handleDateChange('Antitetanica', date)
          }
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Último Tatuaje:</Text>
        <DatePickerIOS
          date={formValues.UltimoTatuaje}
          onDateChange={(date) =>
          handleDateChange('UltimoTatuaje', date)
        }
        />
        </View>
        <View style={styles.formGroup}>
        <Text>Último Tatuaje:</Text>
        <DatePickerIOS
          date={formValues.UltimoTatuaje}
          onDateChange={(date) =>
            handleDateChange('UltimoTatuaje', date)
          }
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Último Hierro:</Text>
        <DatePickerIOS
          date={formValues.UltimoHierro}
          onDateChange={(date) =>
            handleDateChange('UltimoHierro', date)
          }
        />
      </View>
        */}

      <View style={styles.formGroup}>
        <Text>Lactancia Materna:</Text>
        <TextInput
          style={styles.input}
          value={formValues.LactanciaMaterna}
          onChangeText={(text) => handleInputChange('LactanciaMaterna', text)}
        />
      </View>

      {/*
      <View style={styles.formGroup}>
        <Text>Fin Mononucleosis:</Text>
        <DatePickerIOS
          date={formValues.FinMononucleosis}
          onDateChange={(date) =>
            handleDateChange('FinMononucleosis', date)
          }
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Antipaludicos:</Text>
        <DatePickerIOS
          date={formValues.Antipaludicos}
          onDateChange={(date) =>
            handleDateChange('Antipaludicos', date)
          }
        />
      </View>
        */}
      <View style={styles.formGroup}>
        <Text>ITS:</Text>
        <TextInput
          style={styles.input}
          value={formValues.ITS}
          onChangeText={(text) => handleInputChange('ITS', text)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Tipo de Sangre:</Text>
        <TextInput
          style={styles.input}
          value={formValues.TipoSangre}
          onChangeText={(text) => handleInputChange('TipoSangre', text)}
        />
      </View>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? 'rgba(0, 0, 0, 0.5)' : 'blue',
            borderRadius: 8,
            paddingVertical: 10,
            paddingHorizontal: 20,
          },
        ]}
        onPress={handleSubmit}
      >
        <Text style={{ color: 'white', fontSize: 18 }}>Crear</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  formGroup: {
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 8,
  },
});

export default RegistroUsuario;
