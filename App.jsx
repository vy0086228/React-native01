{/*import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from "./src/screen/LoginScreen";
import SignupScreen from "./src/screen/signupScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
   <Stack.Screen name="Login" component={LoginScreen} />
   <Stack.Screen name="signup" component={SignupScreen} />
 </Stack.Navigator>
 </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})*/}

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const App = () => {
  const [isSignup, setIsSignup] = useState(true); // State to toggle between signup and login
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = () => {
    // Handle signup logic here
    Alert.alert('Signup Successful', `Welcome, ${name}!`);
  };

  const handleLogin = () => {
    // Handle login logic here
    Alert.alert('Login Successful', `Welcome back, ${email}!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isSignup ? 'Signup' : 'Login'}</Text>
      
      {isSignup && (
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={setName}
        />
      )}
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button
        title={isSignup ? 'Signup' : 'Login'}
        onPress={isSignup ? handleSignup : handleLogin}
      />
      
      <Button
        title={isSignup ? 'Already have an account? Login' : "Don't have an account? Signup"}
        onPress={() => setIsSignup(!isSignup)}
        color="#841584"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default App;
