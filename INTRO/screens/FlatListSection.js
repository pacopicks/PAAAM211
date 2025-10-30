import { Text, StyleSheet, View, FlatList, SectionList } from 'react-native'
import React from 'react'

export default function FlatListSection() {
    
    const ejercicios = [
        { id: '1', nombre: 'Sentadillas', descripcion: 'Ejercicio para piernas y glúteos' },
        { id: '2', nombre: 'Press de Banca', descripcion: 'Ejercicio para pecho y tríceps' },
        { id: '3', nombre: 'Peso Muerto', descripcion: 'Ejercicio para espalda baja y piernas' },
        { id: '4', nombre: 'Dominadas', descripcion: 'Ejercicio para espalda y bíceps' },
    ]

    const contactos = [
        { titulo: 'A', data: ['Antoine Griezzman ', 'Aldomc', 'A tu'] },
        { titulo: 'P', data: ['Paloma', 'Papa', 'Palermo'] },
        { titulo: 'F', data: ['Fayuca', 'Fosi wl niño osito', 'Fabi'] },
    ]

    return (
        <View style={styles.container}>
            <View style={styles.listContainer}>
                <Text style={styles.titulo}>Lista de Ejercicios</Text>
                <FlatList
                    data={ejercicios}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style={styles.item}>
                            <Text style={styles.nombre}>{item.nombre}</Text>
                            <Text style={styles.descripcion}>{item.descripcion}</Text>
                        </View>
                    )}
                />
            </View>

            <View style={styles.listContainer}>
                <Text style={styles.titulo}>Contactos</Text>
                <SectionList
                    sections={contactos}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({item}) => (
                        <Text style={styles.item}>{item}</Text>
                    )}
                    renderSectionHeader={({section}) => (
                        <Text style={styles.header}>{section.titulo}</Text>
                    )}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    listContainer: {
        flex: 1,
        marginBottom: 20,
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    item: {
        padding: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 5,
        marginHorizontal: 10,
        borderRadius: 5,
    },
    nombre: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    descripcion: {
        fontSize: 14,
        color: '#666',
    },
    header: {
        fontSize: 18,
        backgroundColor: '#e0e0e0',
        padding: 10,
        marginTop: 10,
    }
})