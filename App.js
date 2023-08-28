import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing';
import RegistroBeneficiario from './RegistroBeneficiario';

const App = () => {
  return (
    <View style={styles.container}>
      <RegistroBeneficiario /> {/* Include the Landing component */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;