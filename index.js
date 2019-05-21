import React, {Component} from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native'

import Grid from './components/Grid'
import Grid_2 from './components/Grid_2'

export default class Home extends Component{
  render() {
    return (
      <Grid_2 />
    )
  }
}


AppRegistry.registerComponent('react_native_ref', () => Home)
