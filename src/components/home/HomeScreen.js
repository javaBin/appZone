import React from 'react'
import PropTypes from 'prop-types'
import { Image, StyleSheet, ScrollView, Text, View } from 'react-native' 
import style from '../../common/style'
import * as firebase from '../../actions/firebase'

const styles = StyleSheet.create({
  homeWrapper: {
    backgroundColor: style.colors.backgroundSecondary,
    flex: 1,
  },
  homeContainer:  {
    flex: 1,    
    justifyContent: 'center',
    alignItems: 'center'
  },
  homeTextSubtitle: {
    fontFamily: style.fonts.headerRegular,
    margin: 10,
    color: style.colors.color1
  },
  homeTextHeader: {
    fontFamily: style.fonts.special,
    fontSize: style.fontSizes.heading3,
    color: style.colors.color3,
  },
  homeContainerScroll: {
    flexGrow: 1,
  },
  homeTextMadeBy: {
    fontFamily: style.fonts.headerRegular,
    margin: 10,
    color: style.colors.color4,
    textDecorationLine : 'underline',
    
  },
})

export default class HomeScreen extends React.Component {
  static propTypes = {
    dispatch: PropTypes.func,
  }

  componentWillMount() {
    this.props.dispatch(firebase.setCurrentScreen('home_screen', 'HomeScreen'))
  }

  render() {
    return (
      <View style = {styles.homeWrapper}>
        <ScrollView contentContainerStyle = {styles.homeContainerScroll}>
          <View style = {styles.homeContainer}>
            <Text style = {styles.homeTextHeader}>{ 'WELCOME TO' }</Text>
            <Text style = {styles.homeTextHeader}>{ 'JAVAZONE 2017' }</Text>      
            <Text style = {styles.homeTextSubtitle}>{ 'September 13th – 14th' }</Text>
            <Text style = {styles.homeTextSubtitle}>{ 'Oslo Spektrum' }</Text>
            <View style={{ margin: 5 }}>
              <Image style={{ width: 120, height: 100 }} source={require('../../common/img/jzlogo_2017.png')}/>
            </View>
            <Text style = {styles.homeTextMadeBy}>{ 'Made by javaBin' }</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
