import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as firebase from '../../actions/firebase'
import { Text, StyleSheet, View, ScrollView, TouchableOpacity, BackHandler } from 'react-native'

import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from '../../common/style'
import type { Dispatch } from '../../../types/Actions'
import config from '../../config'

const styles = StyleSheet.create({
  sessionScrollview: {
    backgroundColor: style.colors.background
  },
  sessionHeaderWrapper: {
    flex: 1,
    padding: 5,
    backgroundColor: style.colors.background,
    paddingBottom: 10,
    borderBottomWidth: 2,
    borderBottomColor: style.colors.color2,
  },
  heading1: {
    color: style.colors.color1,
    fontSize: style.fontSizes.heading1,
    fontFamily: style.fonts.headerBold,
  },
  heading2: {
    color: style.colors.color4,
    fontSize: style.fontSizes.heading2,
    fontFamily: style.fonts.headerBold,
    padding: 5,
  },
  headingSpeakerName: {
    color: style.colors.primary,
    fontWeight: "500",
    padding: 5,
  },
  textStyleHeder: {
    color: style.colors.primary,
  },
  textStyle: {
    color: style.colors.primary,
    padding: 5,
  },
  container: {
    backgroundColor: style.colors.backgroundSecondary,
  },
  keywordContainer: {
    borderWidth: 1,
    borderColor: style.colors.color3,
    borderRadius: 4,
    color: style.colors.primary,
    fontFamily: style.fonts.headerLight,
    padding: 3,
    margin: 5,
  },
  feedbackBtnContainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 2,
    borderColor: 'rgba(255, 255, 255, 0.2)',
    borderBottomWidth: 0,
    shadowColor: 'rgba(255, 255, 255, 0.5)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
    alignItems: 'center'
  },
  feedbackQuestionText : {
    color: style.colors.primary
  },
  feedbackBtn: {
    margin: 5,
    alignSelf: 'center' 
  },
  feedbackBtnText: {
    color: style.colors.color1,
    fontSize: 20,
    marginTop:5
  }
})

class SessionDetail extends React.Component {
  static propTypes = {
    logScreen: PropTypes.func,
    navigationState: PropTypes.object
  }

  componentWillMount() {
    this.props.logScreen()

    BackHandler.addEventListener("hardwareBackPress", () => {
      let routeIndex = this.props.navigationState.index
      let nestedNavigation = this.props.navigationState.routes[routeIndex].routes.length > 1
      if(nestedNavigation) {
        this.props.navigation.goBack()
        return true
      }
      return false
    })
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress')
  }

  render() {
    const { navigation, } = this.props
    const { params } = navigation.state

    let fromTime = moment.utc(new Date(params.sessionData.startTime)).format('HH:mm')
    let toTime = moment.utc(new Date(params.sessionData.endTime)).format('HH:mm, dddd, MMMM DD ')
    return (
      <ScrollView style={styles.sessionScrollview}>
        <View style={styles.sessionHeaderWrapper}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon name="arrow-left" style={{ padding: 0 }} size={40} color={style.colors.color4}
              onPress={() => navigation.goBack()} />
          </View>
          <Text style={styles.heading1}>{(params.sessionData.title).toUpperCase()}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Text style={styles.textStyleHeder}>{fromTime} - {toTime}</Text>
              <Text style={styles.textStyleHeder}>{params.sessionData.room} - {params.sessionData.format}</Text>
            </View>
          </View>       
        </View>
        <View style={styles.container}>
        { config.features.feedback &&
            <TouchableOpacity 
              title="Send feedback"
              style={styles.feedbackBtnContainer}
              accessibilityLabel="Go to feedback for this session" 
              {...this.props} 
              onPress={() => this.props.navigation.navigate('Feedback', { sessionData: params.sessionData })}>
              <Text style={styles.feedbackQuestionText}>How was this session? Would you like to send feedback?</Text>
              <Text style={styles.feedbackBtnText}>Send feedback</Text>
            </TouchableOpacity>  
          } 
          <Text style={styles.textStyle}>{params.sessionData.abstract}</Text>
          <Text style={styles.heading2}>INTENDED AUDIENCE:</Text>
          <Text style={styles.textStyle}>{params.sessionData.intendedAudience}</Text>
          <Text style={styles.heading2}>{params.sessionData.speakers.length === 1 ? "SPEAKER:" : "SPEAKERS:"}</Text>
          {
            params.sessionData.speakers.map((speaker, index) => {
              return (
                <View key={index}>
                  <Text style={styles.headingSpeakerName}>{speaker.name}</Text>
                  <Text style={styles.textStyle}>{speaker.bio}</Text>
                </View>)
            })
          }
          {params.sessionData.keywords &&
             <View>
              <Text style={styles.heading2}>KEYWORDS:</Text>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                {params.sessionData.keywords.map((keyword, index) => (
                     <Text style={styles.keywordContainer} key={index}>{keyword}</Text>
                  ))
                }
              </View>
            </View>
          }
        </View>
      </ScrollView>
    )
  }
}

SessionDetail.propTypes = {
  navigation: PropTypes.object
}

SessionDetail.defaultProps = {
  navigation: null
}

const mapDispatchToProps = (dispatch: Dispatch) =>
({ logScreen: () => { dispatch(firebase.setCurrentScreen('session_detail', 'SessionDetail')) } })

const mapStateToProps = (state) => {
  return {
    navigationState: state.tabBar,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionDetail)
