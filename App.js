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
import DetalleBeneficiario from './DetalleBeneficiario';
import LogOSign from './LogOSign';
import Home from './Home';
import Difusion from './Difusion';



const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Landing'>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="LogOSign" component={LogOSign}/>
      <Stack.Screen name="RegistroUsuario" component={RegistroUsuarioDuplicado}/>
      <Stack.Screen name="Tabla" component={Tabla}/>
      <Stack.Screen name="Home" component={Home}/>
      <Stack.Screen name="RegistroBeneficiario" component={RegistroBeneficiario}/>
      <Stack.Screen name="DetalleBeneficiario" component={DetalleBeneficiario}/>
      <Stack.Screen name="Citas" component={Citas}/>
      <Stack.Screen name="Difusion" component={Difusion}/>
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