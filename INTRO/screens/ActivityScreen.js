import React, { useState } from 'react';
import { Text, View, Button, StyleSheet, ActivityIndicator, Platform, Alert } from 'react-native';

export default function ActivityScreen() {
  const [cargando, setCargando] = useState(false);
  
  const carga = () => {
    setCargando(true);
    setTimeout(() => {
      setCargando(false);
      if (Platform.OS === 'web') {
        window.alert('Carga completa');
      } else {
        Alert.alert('Carga completa');
      }
    }, 3000);
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Presione para iniciar la simulación de carga</Text>
      {cargando ? (
        <ActivityIndicator size="large" color="blue" />
      ) : (
        <Button color="red" title="Presione para iniciar" onPress={carga} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  texto: {
    color: 'black',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
  },
  botonesContainer: {
    marginTop: 20,
    gap: 20,
  }
});