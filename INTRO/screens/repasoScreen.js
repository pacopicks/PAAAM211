import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Switch, Button, Alert, Platform, ImageBackground, TextInput, Image } from "react-native";

const SplashImage = require("../assets/upq-logo.png");
const ImagendeFondo = require("../assets/fondo_cristiano_ronaldo.jpg");//zona de imagenes estaticas 

export default function RepasoScreen({ navigation }) {
  const [showSplash, setShowSplash] = useState(true); //true para mostrar el splash screen y el false para el formulario
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); //en caso de que sea false
    }, 3000); //ponemos un tiempo de 3 segundos 
    return () => clearTimeout(timer);
  }, []);

  const [nombre, setNombre] = useState(""); //definimos 3 constantes nombre,correo y el switch con su uso de estado
  const [correo, setCorreo] = useState(""); 
  const [actSwitch, setActSwitch] = useState(false); //comenzamos el switch con false porque no todos lo aceptaran
  
  const EmailValido = (email) => { //validamos que el formato de uso de correo sea valido con esta funcion
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const mostrarAlerta = () => {
    if (nombre.trim() === "") { //aqui comenzamos con la primer alerta la cual seria la del nombre 
      return Platform.OS === "web" //valido para ios y windows
        ? alert("Por favor, ingresa tu nombre.") //alerta para web 
        : Alert.alert("Error", "Por favor ingresa tu nombre."); //alerta para dispositivos moviles
    }
    if (correo.trim() === "") {//aqui lanzaremos alerta si el nombre esta vacio y el .trim elimina los espacios en blanco
      return Platform.OS === "web"
        ? alert("Por favor, ingresa tu correo electrónico.")
        : Alert.alert("Error", "Por favor ingresa tu correo electrónico.");
    }
    if (!EmailValido(correo)) {//aqui un poco mas de lo mismo solo que con el correo 
      return Platform.OS === "web"
        ? alert("Por favor, ingresa un correo electrónico válido.")
        : Alert.alert("Error", "Por favor ingresa un correo electrónico válido.");
    }
    if (!actSwitch) {// el ! retorna false significa que los terminos y condiciones no han sido aceptados 
      return Platform.OS === "web" 
        ? alert("Por favor acepta los términos y condiciones.")
        : Alert.alert("Error", "Por favor acepta los términos y condiciones.");
    }
    
    const mensajeExito = `Registro exitoso!\n\nNombre: ${nombre}\nCorreo: ${correo}`;//muestra una alerta de registro exitoso regresando los campos que llenaste 
    
    return Platform.OS === "web"
      ? alert(mensajeExito)
      : Alert.alert('Éxito', mensajeExito);
  };

  if (showSplash) {// si showsplash es true muestra la pantalla de carga si no, no mostrara nada hasta que cambie de valor 
    return (
      <ImageBackground source={ImagendeFondo} style={styles.background} resizeMode="cover">
        <View style={styles.overlay}>  
          <Image source={SplashImage} style={styles.logo} />
          <Text style={styles.splashText}>Cargando...</Text>
        </View>
      </ImageBackground>
    );
    //overlay es una capa transparente ,en el splash image aparece el logo de la upq y en el text saldra el texto de cargando 
  }

  return (
    //aqui tenemos la misma imagen de fondo pero con el formulario encima 
    <ImageBackground
      source={ImagendeFondo}
      style={styles.background}
      resizeMode="cover"
    > 
      <View style={styles.container}>   
        <Text style={styles.titulo}>Registro de Usuario</Text>
        
        <TextInput
          style={styles.recuadro}
          placeholder="Ingrese su nombre completo"
          value={nombre} //vamos a tener el valor incil del componente
          onChangeText={setNombre} //cambiamos el valor con cada tecleo que se haga 
        />

        <TextInput
          style={styles.recuadro}
          placeholder="Ingrese su correo electrónico"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address" //teclado especial para escribir correo 
          autoCapitalize="none" //evitar que las mayusculas se activen de forma automatica
        />

        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>
            Acepto los términos y condiciones 
          </Text>
          <Switch value={actSwitch} onValueChange={setActSwitch} />
        </View>
      
        <Button 
          title="Registrarse" 
          onPress={mostrarAlerta} 
        />
      </View>
    </ImageBackground>
    //<Switch value={actSwitch} estado incial del switch , onValueChange={setActSwitch}> cambiamos y mantenemos actualizado el switch
    //title="Registrarse"  texto del boton , onPress={mostrarAlerta}  al presionar se ejecuta esta funcion 
  );
}
// en este bloque creamos los estilos de nuestra pagina 
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center', //contenido centrado vertical
    alignItems: 'center', //centrado horizontalmente 
    backgroundColor: 'rgba(0,0,0,0.5)', //color %50 transparente
    width: '100%',
  },
  logo: {
    width: 150, 
    height: 150,
    marginBottom: 20, //espacio entre logo y texto
    resizeMode: 'contain', //proporciones sin recortar
  },
  splashText: {
    color: 'white',
    fontSize: 18, //tamaño de la fuente
    fontWeight: 'bold', //texto en negrita
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: 20,  //espacio interno
    borderRadius: 10, //bordes redondeados 
    margin: 20, //margen 
    width: '90%',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  recuadro: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#333', //color del borde 
    borderRadius: 5,
    marginBottom: 15, //margen del boton
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  switchContainer: {
    flexDirection: 'row', //elementos en la fila 
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  switchLabel: {
    fontSize: 16,
    marginRight: 10, //espacio entre texto y switch
    flex: 1,
  },
});