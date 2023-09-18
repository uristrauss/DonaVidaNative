import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import logo from './Logo.png';




const Landing = () => {
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
    backgroundColor: '#440015', // Darker Red
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default Landing;
