import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import axios from 'axios';

const DetalleBeneficiario = () => {
  const route = useRoute();
  const navigation = useNavigation(); // Add this line
  const { beneficiarioId } = route.params;
  const [beneficiario, setBeneficiario] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/beneficiario/${beneficiarioId}`);
        setBeneficiario(response.data);
      } catch (error) {
        console.error('Error fetching beneficiario details:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [beneficiarioId]);

  const handleCitas = () => {
    navigation.navigate('Citas', {
      beneficiarioId,
      fkCentro: beneficiario.fkCentro, // Assuming you have centroId in your beneficiario object
      donanteId: 1,
      
    });
  };

  if (isLoading || beneficiario === null) {
    return (
      <View style={styles.container}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Card
        title={`${beneficiario.Nombre} ${beneficiario.Apellido}`}
        imageUri={beneficiario.Imagen}
        historia={beneficiario.Historia}
        cantDonacionesNecesitadas={beneficiario.CantDonacionesNecesitadas}
        grupoFactor={`${beneficiario.Grupo} ${beneficiario.Factor}`}
        onPressCitas={handleCitas} // Pass the onPressCitas callback to Card component
      />
    </View>
  );
};

const Card = ({
  title,
  imageUri,
  historia,
  cantDonacionesNecesitadas,
  grupoFactor,
  onPressCitas, // Receive onPressCitas as a prop
}) => (
  <View style={styles.card}>
    <Image source={{ uri: imageUri }} style={styles.roundedImage} />
    <View style={styles.cardContent}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{historia}</Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>CantDonacionesNecesitadas:</Text>{' '}
        {cantDonacionesNecesitadas}
      </Text>
      <Text style={styles.text}>
        <Text style={{ fontWeight: 'bold' }}>Grupo y Factor:</Text> {grupoFactor}
      </Text>
    </View>

    <TouchableOpacity style={styles.button} onPress={onPressCitas}>
      <Text style={styles.buttonText}>Agendar Cita</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
  },
  roundedImage: {
    width: '100%',
    height: 200,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  text: {
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 5,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default DetalleBeneficiario;
