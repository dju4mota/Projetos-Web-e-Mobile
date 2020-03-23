import React, { Component } from 'react';
import { View } from 'react-native';
import Botao from './componentes/Botao'
import Styles from './estilos/Padrao'
import Display from './componentes/Display'

export default class App extends Component {
  state = {
    displayValue: '0'
  }

  render() {
  return (
    <View style={Styles.container}>
      <Display value={this.state.displayValue} />
      <View style={Styles.botoes}>
        <Botao label= 'AC' />
        <Botao label= '/' />
        <Botao label= '7' />
        <Botao label= '8' />
        <Botao label= '9' />
        <Botao label= '*' />
        <Botao label= '4' />
        <Botao label= '5' />
        <Botao label= '6' />
        <Botao label= '-' />
        <Botao label= '1' />
        <Botao label= '2' />
        <Botao label= '3' />
        <Botao label= '+' />
        <Botao label= '0' />
        <Botao label= '.' />
        <Botao label= '=' />
      </View>
    </View>
  );
}}
