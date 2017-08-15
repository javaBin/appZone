import React from 'react'
import { StyleSheet, Text, View } from 'react-native' 
import style from '../../common/style'

const styles = StyleSheet.create({
  homeTextSubtitle: {
    fontFamily: style.fonts.headerRegular,
    margin: 10,
    color: style.colors.color1
  },
  homeTextHeader: {
    fontFamily: style.fonts.special,
    fontSize: style.fontSizes.heading3,
    color: style.colors.color3
  },
  homeScreenStyle: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: style.colors.backgroundSecondary,
  },
  homeTextMadeBy: {
    fontFamily: style.fonts.headerRegular,
    margin: 10,
    color: style.colors.color4,
    textDecorationLine : 'underline'
  },
})

export default class HomeScreen extends React.Component {
  render() {
    return (
        <View style = {styles.homeScreenStyle}>
          <Text style = {styles.homeTextHeader}>{ 'WELCOME TO' }</Text>
          <Text style = {styles.homeTextHeader}>{ 'JAVAZONE 2017' }</Text>          
          <Text style = {styles.homeTextSubtitle}>{ 'September 13th –14th' }</Text>
          <Text style = {styles.homeTextSubtitle}>{ 'Oslo Spektrum' }</Text>
          <Text style = {styles.homeTextMadeBy}>{ 'Made by javaBin' }</Text>
        </View>
    )
  }
}
