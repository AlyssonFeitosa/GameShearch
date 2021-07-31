import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/fundo3x.jpg');

function Categorias({ navigation }) {
  return (
    <View>

      <Text style={styles.categoriatexto}>Categorias</Text>
      <ImageBackground source={logoLocal} style={{ width: '100%', height: '100%', marginBottom: 50 }}>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Ação')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>AÇÃO</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Aventura')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>AVENTURA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Rpg')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>RPG</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Luta')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>LUTA</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('BattleRoyale')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>BATTLE ROYALE</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Tiro')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TIRO</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Corrida')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>CORRIDA</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Terror')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>TERROR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 12 }}>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Plataforma')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>PLATAFORMA</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Celular')} >
              <View style={styles.button}>
                <Text style={styles.buttonText}>CELULAR</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 2,
    alignItems: 'center'
  },
  button: {
    width: 150,
    alignItems: 'center',
    backgroundColor: '#f2f2fc',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'black'
  },
  categoriatexto: {
    fontSize: 28,
    marginLeft: 110,
  },
  posicaobotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});
export default Categorias;

