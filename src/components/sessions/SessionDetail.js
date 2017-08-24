import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import * as firebase from '../../actions/firebase'

import { ScrollView, StyleSheet, Text, View } from 'react-native'

import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import style from '../../common/style'
import type { Dispatch } from '../../../types/Actions'

const styles = StyleSheet.create({
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
    color: style.colors.color1,
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
  }
})

class SessionDetail extends React.Component {
  static propTypes = {
    logScreen: PropTypes.func,
  }

  componentWillMount() {
    this.props.logScreen()
  }

  render() {
    const { navigation, } = this.props
    const { params } = navigation.state

    let fromTime = moment(new Date(params.sessionData.startTime)).format('dddd, MMMM DD HH:mm')
    let toTime = moment(new Date(params.sessionData.endTime)).format('HH:mm')
    return (
      <ScrollView>
        <View style={styles.sessionHeaderWrapper}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <Icon name="arrow-left" style={{ padding: 15 }} size={40} color={style.colors.color4}
              onPress={() => navigation.goBack()} />
          </View>
          <Text style={styles.heading1}>{(params.sessionData.title).toUpperCase()}</Text>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View>
              <Text style={styles.textStyleHeder}>{params.sessionData.room} {params.sessionData.format}</Text>
              <Text style={{ color: style.colors.color1 }}>{fromTime} - {toTime}</Text>
            </View>
          </View>
        </View>
        <View style={styles.container}>
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

export default connect(null, mapDispatchToProps)(SessionDetail)
