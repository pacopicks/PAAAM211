
//import : zona de imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React ,{useState} from 'react';


//componentes : zona de componentes
export default function App() {
  const [contador,setcontador]= useState(0);
  return ( 
    
    <View style={styles.container}>
      <Text>contador: {contador}  </Text>
      <Button title='agregar' onPress={() => setcontador(contador + 1)} />
      <Button title='quitar' onPress={() => setcontador(contador - 1)} />
      <Button title= 'reiniciar' onPress={()=> setcontador(0)}/>
      <StatusBar style="auto" />
    </View>
  );
}


//estilos : zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
