import React, {Component} from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native'

import Grid from './components/Grid'

export default class Home extends Component{
  render() {
    return (
      <Grid />
    )
  }
}


AppRegistry.registerComponent('react_native_ref', () => Home)
