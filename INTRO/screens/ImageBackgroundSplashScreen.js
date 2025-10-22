import React, {useState,useEffect } from "react";
import { StyleSheet,View,Image,Text,ImageBackground,Dimensions } from "react-native";


const BackgroundImage = require('../assets/splash-icon.png');

export default function ImageBackgroundSplashScreen({navigation}) {
const [showSplash,setShowSplash]= useState(true);
useEffect(() => {
  const timer = setTimeout(() => {
    setShowSplash(false);
  }, 3000);
  return () => clearTimeout(timer);
}, []);
if (showSplash){
 return (
    <ImageBackground
     source={BackgroundImage}
      style={styles.background}
    resizeMode="cover">
      <View style={styles.overlay}>
        <Text style={styles.tittle}>Bienvenido</Text>
        <Text style={styles.tittle}>cargando...</Text>
              </View>
    </ImageBackground>
  );
} 
return (
  <View style={styles.mainScreen}>
    <Text style={styles.mainText}>Pantalla Principal</Text>
  </View>
 );
}

  const {width,height}=Dimensions.get('window');
  const styles=StyleSheet.create({
    background:{
      width:width,
      height:height,
    },
    overlay:{
      flex: 1,
      backgroundColor:'rgba(0,0,0,0.5)',
      justifyContent:'center',
      alignItems:'center',
      padding:20,
    },
    tittle:{
      color:'#fff',
      fontSize:32,
      fontWeight:'bold',
      marginBottom:10,
      textAlign:'center',
    },
    mainScreen:{
      flex: 1,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor:'#3498db',
    },
    mainText:{
      fontSize:24,
      color:'#fff',
      fontWeight:'bold',
  
},
  });
