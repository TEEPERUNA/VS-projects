import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {

    const handleLogin = (fullAccess) => {
      navigation.replace('Main', { fullAccess });
    };
  
    return (
      <View style={styles.container}>
        <Image source={require('../assets/yths.png')} style={styles.logo} />
        <Text style={styles.title}>Login to YTHS App</Text>
  
        {/* Suomi.fi Button (Full access) */}
        <TouchableOpacity style={styles.suomiButton} onPress={() => handleLogin(true)}>
          <Ionicons name="shield-checkmark-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Login with Suomi.fi</Text>
        </TouchableOpacity>
  
        {/* Haka Button (Limited access) */}
        <TouchableOpacity style={styles.hakaButton} onPress={() => handleLogin(false)}>
          <Ionicons name="school-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Login with Haka ID</Text>
        </TouchableOpacity>
  
        <TouchableOpacity style={styles.helpButton}>
          <Text style={styles.helpText}>No credentials? Request help here</Text>
        </TouchableOpacity>
      </View>
    );
  }
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f6fb',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#1e3a8a',
  },
  suomiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#005FCC',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  hakaButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#00796B',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    justifyContent: 'center',
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    marginLeft: 10,
    fontSize: 16,
  },
  helpButton: {
    marginTop: 20,
  },
  helpText: {
    color: '#1e3a8a',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
});
