import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';

const Tabla = () => {
  const [beneficiarios, setBeneficiarios] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:5000/beneficiario/')
      .then((response) => response.json())
      .then((beneficiariojson) => {
        console.log('beneficiario', beneficiariojson);
        setBeneficiarios(beneficiariojson);
        setIsLoading(false);
      });
  }, []);

  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
    {!isLoading &&
      beneficiarios.map((beneficiario) => (
        <View key={beneficiario.Id} style={{ width: '100%', padding: 10 }}> {/* Adjusted width here */}
          <View style={{ borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
            <Image
              source={{ uri: beneficiario.Imagen }}
              style={{ width: '100%', height: 200, borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
            />
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
                  {beneficiario.Nombre} {beneficiario.Apellido}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>CantDonacionesNecesitadas:</Text>{' '}
                  {beneficiario.CantDonacionesNecesitadas}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Compatibilidad:</Text> {beneficiario.Compatibilidad}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Historia:</Text> {beneficiario.Historia}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>NecesitaSangre:</Text> {beneficiario.NecesitaSangre}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Grupo:</Text> {beneficiario.Grupo}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>Factor:</Text> {beneficiario.Factor}
                </Text>
                <Text>
                  <Text style={{ fontWeight: 'bold' }}>fkCentro:</Text> {beneficiario.fkCentro}
                </Text>
              </View>
            </View>
          </View>
        ))}
    </View>
  );
};

export default Tabla;
