//import : zona de imports
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import React ,{useState} from 'react';



//componentes : zona de componentes
export default function App() {
  const [contador,setcontador]= useState(0);

  return ( 
    
    <View style={styles.container}>
      <Text style={styles.text}> contador: </Text>
      <Text style={styles.text2}> {contador}  </Text>

      <View style={styles.botonesContainer}>
      <Button color='red' title='agregar' onPress={() => setcontador(contador + 1)} />
      <Button  color='gold'title='quitar' onPress={() => setcontador(contador - 1)} />
      <Button color='orange' title= 'reiniciar' onPress={()=> setcontador(0)}/>
    </View>
      <StatusBar style="auto" />

     

      </View>
  );
}


//estilos : zona de estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e72f2fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: '#1c35d7df',
    fontSize: 30,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'line-through',
  }
  , text2:{
    color: '#1c35d7df',
    fontSize: 40,
    fontFamily: 'courier',
    fontWeight: '900',
    fontStyle: 'italic',
    textDecorationLLine: 'underline',

  }
  ,
  botonesContainer:{
    marginTop: 15,
    flexDirection: 'row-reverse',
    gap: 20

}
});

