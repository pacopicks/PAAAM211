import { Text, View, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import BotonesScreen from './botonesScreen';
import ContadorScreen from './ContadorScreen';
import TextScreen from './TextSreen';
import ImageBackgroundSplashScreen from './ImageBackgroundSplashScreen';
import ScrollView from './ScrollView';
import FlatListSection from './FlatListSection';
import Modal from './modal';
import ActivityScreen from './ActivityScreen';
import RepasoScreen from './repasoScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'textScreen':
      return <TextScreen />;
    case 'imageBackground':
      return <ImageBackgroundSplashScreen />;
    case 'scrollView':
      return <ScrollView />;
    case 'activity':
      return <ActivityScreen />;
    case 'flatlist':
      return <FlatListSection />;
    case 'modal':
      return <Modal />;
    case 'repaso':
      return <RepasoScreen />;
    default:
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Menu de Practicas</Text>

          <Button title="Pract: Contador" onPress={() => setScreen('contador')} />
          <Button title="Pract: Botones" onPress={() => setScreen('botones')} />
          <Button title="Pract: TextScreen" onPress={() => setScreen('textScreen')} />
          <Button title="Pract: ImageBackground" onPress={() => setScreen('imageBackground')} />
          <Button title="Pract: ScrollView" onPress={() => setScreen('scrollView')} />
          <Button title="Pract: ActivityScreen" onPress={() => setScreen('activity')} />
          <Button title="Pract: FlatListSection" onPress={() => setScreen('flatlist')} />
          <Button title="Pract: Modal" onPress={() => setScreen('modal')} />
          <Button title="Pract: Repaso" onPress={() => setScreen('repaso')} />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8e44ad'
  },
  text: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 20
  }
});

