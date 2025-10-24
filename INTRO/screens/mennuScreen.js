import { Text, View, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

import BotonesScreen from './botonesScreen';
import ContadorScreen from './ContadorScreen';
import TextScreen from './TextSreen';
import ImageBackgroundSplashScreen from './ImageBackgroundSplashScreen';
import ScrollView from './Scroll_View';
import FlatListSection from './FlatList_Section';
import Modal from './modal';
import ActivityIndicator from './Activity_indicator';
import RepasoScreen from './repasoScreen';

export default function MenuScreen() {
  const [screen, setScreen] = useState('menu');

  switch (screen) {
    case 'contador':
      return <ContadorScreen />;
    case 'botones':
      return <BotonesScreen />;
    case 'TextScreen':
      return <TextScreen />;
    case 'ImageBackgroundSplashScreen':
      return <ImageBackgroundSplashScreen />;
    case 'scroll_view':
      return <ScrollView />;
    case 'activity_indicator':
      return <ActivityIndicator />;
    case 'flatlist_section':
      return <FlatListSection />;
    case 'modal':
      return <Modal />;
    case 'repaso':
      return <RepasoScreen />;
    default:
      
      return (
        <View style={styles.container}>
          <Text style={styles.text}>Menu de Practicas</Text>

          <Button
            title="Pract: Contador"
            onPress={() => setScreen('contador')}
          />

          <Button
            title="Pract: Botones"
            onPress={() => setScreen('botones')}
          />

          <Button
            title="Pract: TextScreen"
            onPress={() => setScreen('TextScreen')}
          />

          <Button
            title="Pract: ImageBackgroundSplashScreen"
            onPress={() => setScreen('ImageBackgroundSplashScreen')}
          />

          <Button
            title="Pract: ScrollView"
            onPress={() => setScreen('scroll_view')}
          />

          <Button
            title="Pract: Activity Indicator"
            onPress={() => setScreen('activity_indicator')}
          />

          <Button
            title="Pract: FlatList Section"
            onPress={() => setScreen('flatlist_section')}
          />

          <Button
            title="Pract: Modal"
            onPress={() => setScreen('modal')}
          />

          <Button
            title="Pract: Repaso"
            onPress={() => setScreen('repaso')}
          />
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex :1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#8e44ad'
  },
  text :{
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  botonesContainer: {
    marginTop: 28,
    flexDirection: 'row',
    gap: 10
  },
  botonesContainer2: {
    marginTop: 40,
    flexDirection: 'row',
    gap: 10
  }
});

