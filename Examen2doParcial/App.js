import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

export default function App() {
  const categorias = [
    {
      titulo: 'Entradas',
      platillos: [
        {
          nombre: 'Nachos',
          descripcion: 'Nachos con queso y jalapeños.',
          precio: '$80',
        },
        {
          nombre: 'Tostadas',
          descripcion: 'Con guiso a eleccion.',
          precio: '$75',
        },
      ],
    },
    {
      titulo: 'Platos Fuertes',
      platillos: [
        {
          nombre: 'Pizza',
          descripcion: 'Pizza con pepperoni y queso.',
          precio: '$150',
        },
        {
          nombre: 'Hamburguesa',
          descripcion: 'Hamburguesa de res con papas .',
          precio: '$130',
        },
      ],
    },
  ];

  return (
    <ImageBackground
      source={require('./assets/restaurante.png')}
      style={styles.fondo}
    >
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Paco Picks</Text>
          <Text style={styles.descripcion}>
            La comida más rica del mundo caray
          </Text>
        </View>

        <ScrollView style={styles.scroll}>
          {categorias.map((categoria, index) => (
            <View key={index} style={styles.categoria}>
              <Text style={styles.categoriaTitulo}>{categoria.titulo}</Text>
              {categoria.platillos.map((platillo, idx) => (
                <View key={idx} style={styles.platillo}>
                  <Text style={styles.platilloNombre}>{platillo.nombre}</Text>
                  <Text style={styles.platilloDesc}>{platillo.descripcion}</Text>
                  <Text style={styles.platilloPrecio}>{platillo.precio}</Text>

                  <TouchableOpacity
                    style={styles.boton}
                    onPress={() => {}}
                    activeOpacity={0.7}
                  >
                    <Text style={styles.botonTexto}>Ordenar</Text>
                  </TouchableOpacity>
                </View>
              ))}
            </View>
          ))}
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  fondo: {
    flex: 1,
    resizeMode: 'cover',
  },
  
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.6)',
  },
  header: {
    padding: 20,
    backgroundColor: '#FF7F00', 
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  descripcion: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
  scroll: {
    padding: 15,
  },
  categoria: {
    marginBottom: 20,
  },
  categoriaTitulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FF7F00',
  },
  platillo: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3,
  },
  platilloNombre: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  platilloDesc: {
    fontSize: 14,
    color: '#555',
    marginVertical: 5,
  },
  platilloPrecio: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
  },
  boton: {
    backgroundColor: '#FF7F00',
    paddingVertical: 10,
    borderRadius: 5,
  },
  botonTexto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
