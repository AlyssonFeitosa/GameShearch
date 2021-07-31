import React,{Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './src/pages/Home';
import Categorias from './src/pages/Categorias';
import Lancamentos from './src/pages/Lancamentos';
import Ação from './src/pages/generos/Ação/index.js';
import Aventura from './src/pages/generos/Aventura/index.js';
import BattleRoyale from './src/pages/generos/BattleRoyale/index.js';
import Celular from './src/pages/generos/Celular/index.js';
import Corrida from './src/pages/generos/Corrida/index.js';
import Luta from './src/pages/generos/Luta/index.js';
import Plataforma from './src/pages/generos/Plataforma/index.js';
import Rpg from './src/pages/generos/Rpg/index.js';
import Terror from './src/pages/generos/Terror/index.js';
import Tiro from './src/pages/generos/Tiro/index.js';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  Home: {
    name: 'ios-home',
  },
  Lancamentos: {
    name: 'ios-desktop',
  },
  Categorias: {
    name: 'ios-bar-chart-sharp',
  },
};

const MyTheme = {
  dark: false,
  colors: {
    primary: 'rgb(242, 242, 80)',
    background: 'rgb(255, 255, 255)',
    card: 'rgb(18, 10, 143)',
    text: 'rgb(240, 210, 41)',
    border: 'rgb(199, 199, 204)',
  },
};

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const {name} = icons[route.name];
          return <Icon name={name} color={color} size={size} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#e8d827',
        inactiveTintColor: '#f2f2fc',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Lancamentos" component={Lancamentos} />
      <Tab.Screen name="Categorias" component={Categorias} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator initialRoutName="Home">
        <Stack.Screen
          name="Home"
          component={Tabs}
          options={{
            title: 'GAME SHEARCH ',
            headerStyle: {
              backgroundColor: '#120a8f',
            },
            headerTintColor: '#f2f2fc',
          }}
        />
        <Stack.Screen name="Ação" component={Ação} />
        <Stack.Screen name="Aventura" component={Aventura} />
        <Stack.Screen name="BattleRoyale" component={BattleRoyale} />
        <Stack.Screen name="Celular" component={Celular} />
        <Stack.Screen name="Corrida" component={Corrida} />
        <Stack.Screen name="Luta" component={Luta} />
        <Stack.Screen name="Plataforma" component={Plataforma} />
        <Stack.Screen name="Rpg" component={Rpg} />
        <Stack.Screen name="Terror" component={Terror} />
        <Stack.Screen name="Tiro" component={Tiro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

