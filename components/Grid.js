import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions } from 'react-native'

export default class Grid extends Component{
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          {
            // Header
          }
        </View>

        <View style={styles.boxesContainer}>
          <View style={styles.box}>
            <Text>01</Text>
          </View>
          <View style={styles.box}>
            <Text>02</Text>
          </View>
          <View style={styles.box}>
            <Text>03</Text>
          </View>
          <View style={styles.box}>
            <Text>04</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    backgroundColor: '#EEEEEE',
    padding: 30,
    marginBottom: 10
  },
  boxesContainer:{
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 15
  },
  box:{
    flexBasis: Dimensions.get('window').width / 2 - 25,
    height: Dimensions.get('window').width / 2 - 100,
    margin: 5,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
  }
})
