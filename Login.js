import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginStatus, setLoginStatus] = useState('');

  const handleLogin = async () => {
    try {
      const requestBody = {
        email: email,
        contraseña: password
      };

      const response = await fetch('http://localhost:5000/donante/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(requestBody)
      });

      const data = await response.json();

      if (response.ok) {
        // Successful login
        setLoginStatus('Login successful');
        // Handle the successful login (e.g., navigate to a new screen)
      } else if (response.status === 401) {
        // Invalid credentials
        setLoginStatus('Invalid email or password');
        // Handle the failed login (e.g., display an error message)
      } else {
        // Other errors
        setLoginStatus('Error during login');
        // Handle the error (e.g., display an error message)
      }
    } catch (error) {
      console.error('Error during login:', error);
      setLoginStatus('Error during login');
      // Handle the error (e.g., display an error message)
    }
  };

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.loginTitle}>Login</Text>
      <View>
        <Text style={styles.loginLabel}>Email:</Text>
        <TextInput
          style={styles.loginInput}
          value={email}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View>
        <Text style={styles.loginLabel}>Password:</Text>
        <TextInput
          style={styles.loginInput}
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
        />
      </View>
      <Button title="Login" onPress={handleLogin} />
      {loginStatus && <Text style={styles.loginStatus}>{loginStatus}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  loginTitle: {
    fontSize: 24,
    marginBottom: 16,
  },
  loginLabel: {
    fontSize: 16,
  },
  loginInput: {
    height: 40,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  loginStatus: {
    fontSize: 16,
    marginTop: 16,
    color: 'red',
  },
});

export default Login;
