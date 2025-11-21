import { View, Text, StyleSheet, Button } from 'react-native';

export default function Detalle({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Usuario</Text>
      <Text>Nombre: Francisco Guerrero</Text>
      <Text>Email: franciscoguerrero09717@gmail.com</Text>
      <Text>Teléfono: 4422019345</Text>
      <Button 
        title="Regresar a Perfil" 
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});