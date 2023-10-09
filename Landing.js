import React, {useState, useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import logo from './Logo.png';
import { useNavigation } from '@react-navigation/native';

const Landing = () => {
  const navigation = useNavigation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('LogOSign');
    }, 3000); 

    const interval = setInterval(() => {
      setProgress(prevProgress => prevProgress + 0.01); 
    }, 30);

    return () => clearTimeout(timer);
  }, [navigation]); 

  return (
    <View style={styles.landingContainer}>
      <Image source={logo} alt="School Logo" style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  landingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#440015', 
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Landing;
