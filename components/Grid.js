import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Dimensions, Image, ScrollView } from 'react-native'

export default class Grid extends Component{
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          {
            // Header
          }
        </View>
        <ScrollView>
          <View style={styles.boxesContainer}>
            <View style={styles.box}>
              <Image source={require('../images/quran.jpg')} style={styles.backgroundImage} />
              <View style={styles.btnTextHolder}>
                <Text style={styles.btnText}>سور مستحبة</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Image source={require('../images/duaa.jpg')} style={styles.backgroundImage} />
              <View style={styles.btnTextHolder}>
                <Text style={styles.btnText}>ادعية و زيارات</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Image source={require('../images/contact.jpg')} style={styles.backgroundImage} />
              <View style={styles.btnTextHolder}>
                <Text style={styles.btnText}>تواصل معنا</Text>
              </View>
            </View>
            <View style={styles.box}>
              <Image source={require('../images/map.jpg')} style={styles.backgroundImage} />
              <View style={styles.btnTextHolder}>
                <Text style={styles.btnText}>خارطة المقبرة</Text>
              </View>
            </View>
          </View>
        </ScrollView>
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
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderColor: '#ccc',
  },
  backgroundImage:{
    flex: 1,
    width: '100%',
    height: 'auto',
    resizeMode: 'cover',
  },
  btnTextHolder:{
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  btnText:{
    backgroundColor: '#fff',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10
  }
})
