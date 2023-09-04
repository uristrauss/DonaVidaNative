import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing';
import Login from './Login';
import RegistroBeneficiario from './RegistroBeneficiario';
import RegistroUsuario from './RegistroUsuario';

const App = () => {
  return (
    <View style={styles.container}>
      <RegistroUsuario /> {/* Include the Landing component */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;