import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,ScrollView,ImageBackground,Image, requireNativeComponent} from 'react-native';

const ImageBackgroundImage=require("..assets/restaurante.png")

export default function App() {

  return (
    <View style={styles.container}>
      <Text>Estamos trabajando en tu proyecto</Text>
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
     
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 

