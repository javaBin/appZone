import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Image, StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native' 
import style from '../../common/style'
import * as firebase from '../../actions/firebase'

import type { Dispatch } from '../../../types/Actions'

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
    color: style.colors.primary
  },
  homeTextHeader: {
    fontFamily: style.fonts.special,
    fontSize: style.fontSizes.heading1,
    color: style.colors.primary,
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
  logoStyle: {
    width: 160,
    height: 120
  },
  superSecretImageStyle: {
    width: 120,
    height: 120
  }
})

class HomeScreen extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  static propTypes = {
    logScreen: PropTypes.func,
    counter: PropTypes.number,
  }

  componentWillMount() {
    this.props.logScreen({ })
  }

  handleSuperSecretOnPress = () => {
    this.setState( (previous, props) => ({counter: (previous.counter === 20 ) ? 0 : previous.counter + 1}))

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
            <TouchableOpacity onPress={this.handleSuperSecretOnPress}>
              <Image style={ (this.state.counter < 10)
                ? styles.logoStyle : styles.superSecretImageStyle } 
                source={ (this.state.counter < 10 ) 
                ? require('../../common/img/jzlogo_2017.png')
                : require('../../common/img/viking_duke2.png')}/>
            </TouchableOpacity>
            </View>
            <Text style = {styles.homeTextMadeBy}>{ 'Made by javaBin' }</Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}


const mapDispatchToProps = (dispatch: Dispatch) =>
({ logScreen: () => { dispatch(firebase.setCurrentScreen('home_screen', 'HomeScreen')) } })


export default connect(null, mapDispatchToProps)(HomeScreen)
