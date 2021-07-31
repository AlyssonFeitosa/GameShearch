import React from 'react';
import {View, Text, StyleSheet, ImageBackground,Image} from 'react-native';

let logoLocal = require('C:/Users/Alysson/GameShearch/src/images/home2.jpg');



export default function Home() {
  return (
    <View>
      <ImageBackground source={logoLocal} style={{width:'100%', height:'100%'}}>
        <View style={stylesh.containerhome}>
          <Text style={stylesh.textotamanho}> 
           Neste aplicativo indicamos alguns dos melhores
          games do mercado pra você curtir e te manter
          atualizado sobre os principais lançamentos
          do mundo gamer, para todos os gostos e idades,
          clique no  icone de lançamentos para ver as novidades
          ou clique no icone categorias e confira os games do seu gênero 
          favorito veja os trailers e onde comprar seus games,
           mergulhe no mundo gamer.
          </Text>
        </View>
        
      </ImageBackground>
    </View>
  );
}
const stylesh = StyleSheet.create({
  containerhome: {
      backgroundColor: 'white',
      width: 350,
      height: 210,
      marginLeft:6,
      marginTop:4,
      borderRadius:12
  },
  textotamanho:{
    fontSize:17,
    marginLeft:3,
    fontStyle:'italic'
  }

});

