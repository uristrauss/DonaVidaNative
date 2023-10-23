import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Landing from './Landing';
import Login from './Login';
import RegistroBeneficiario from './RegistroBeneficiario';
import RegistroUsuario from './RegistroUsuario'; 
import Tabla from './Tabla';
import Citas from './Citas';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import RegistroUsuarioDuplicado from './RegistroUsuarioDuplicado';
import LogOSign from './LogOSign';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LogOSign" component={LogOSign}/>
      <Stack.Screen name="RegistroUsuario" component={RegistroUsuarioDuplicado}/>
      <Stack.Screen name="Tabla" component={Tabla}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;