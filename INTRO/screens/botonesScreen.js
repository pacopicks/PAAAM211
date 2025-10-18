import React, {use, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

export default function botonesScreen() {
  const [prendido, setPrendido] = useState(false);

  const backgroundColor = prendido ? '#F5F5F5' : '#121212';
  const textColor = prendido ? '#000' : '#FFF';
  return(
    <View style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.texto, {color: textColor}]}>Estado: {prendido ? 'Prendido' : 'Apagado'}</Text>
      <TouchableOpacity
      style={styles.botonEncender}
      onPress={()=> setPrendido(true)}>
        <Text style={styles.textoBoton}>Prender</Text>

      </TouchableOpacity>
      
    <TouchableOpacity
      style={styles.botonApagar}
      onPress={()=> setPrendido(false)}>
        <Text style={styles.textoBoton}>Apagar</Text> 
    </TouchableOpacity>

    <View style = {styles.switchContainer}>
      <Text style = {[styles.switchLabel,{color: textColor}]}>Control de Switch: </Text>
      <Switch value = {prendido} onValueChange={setPrendido}> </Switch>
    </View>

      
    </View>
    
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  texto: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  botonEncender:{
    backgroundColor : '#4CAF50',
    paddingVertical : 10,
    paddingHorizontal: 25,
    bordeRadius : 8,
    marginBottom: 20,
  },
    botonApagar:{
    backgroundColor : '#F44336',
    paddingVertical : 10,
    paddingHorizontal: 25,
    bordeRadius : 8,
    marginBottom: 20,
  },
  textoBoton:{
    color:'#fff',
    fonSize :16,
    fontWeight :'600',
  },
  switchContainer :{
    flexDirection: 'row',
    alignItems : 'center',
  },
  switchLabel:{
    fontSize: 16,
    marginRight: 10,
  },

  
})
