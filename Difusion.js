import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Share } from 'react-native';

const Difusion = () => {
  const [formValues, setFormValues] = useState({
    NombreApellido: '',
    HospitalDireccion: '',
    TipoSangre: '',
    Historia: '',
  });

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const handleShare = async () => {
    const cardContent = `Campaña de donación de DonaVida\n\nHola! Buen día, quería contarte que mi amigo ${formValues.NombreApellido} necesita donantes de sangre para una intervención.\nSu historia es la siguiente: ${formValues.Historia}.\nEstamos buscando donantes con tipo de Sangre: ${formValues.TipoSangre}.\nPuedes acercarte a: ${formValues.HospitalDireccion}.\nEstoy seguro de que mi amigo apreciará tu donación, ¡te esperamos!`;

    if (!Share || !Share.share) {
      console.error('Share API not available');
      return;
    }

    try {
      const result = await Share.share({
        message: cardContent,
      });

      if (result && result.action === Share.sharedAction) {
        console.log('Shared successfully');
      } else if (result && result.action === Share.dismissedAction) {
        console.log('Share dismissed');
      } else {
        console.log('Share action unknown');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Crear Difusión</Text>
      <View style={styles.formGroup}>
        <Text>Nombre y Apellido:</Text>
        <TextInput
          style={styles.input}
          value={formValues.NombreApellido}
          onChangeText={(value) => handleInputChange('NombreApellido', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Dirección:</Text>
        <TextInput
          style={styles.input}
          value={formValues.HospitalDireccion}
          onChangeText={(value) => handleInputChange('HospitalDireccion', value)}
        />
      </View>
      <View style={styles.formGroup}>
        <Text>Tipo de Sangre:</Text>
        <TextInput
          style={styles.input}
          value={formValues.TipoSangre}
          onChangeText={(value) => handleInputChange('TipoSangre', value)}
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
      <TouchableOpacity style={styles.button} onPress={handleShare}>
        <Text style={styles.buttonText}>Compartir</Text>
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

export default Difusion;
